import { monkeypatchSheet } from "./lib/itemSheet5e.js";
import { darkSheetCompat } from "./compat/darksheetCompat.js";

// Setting to always show resources
Hooks.on("init", function () {
  game.settings.register("srd_heros_et_dragons", "RessClassAll", {
    name: "montrer toutes les ressources",
    hint: "montrer toutes les ressources spécifique aux classes.",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: x => window.location.reload()
  });






  // check migration


  // Init resource list + resource counter
  var sheetResources = ["primary", "secondary", "tertiary", "Rage", "Inspiration", "Canalisation", "Sorcellerie", "Ki", "Lien", "Formes", "Imposition"];

  sheetResources = sheetResources.slice(0, 11);

  // Monkeypatch original function

  
  const originalGetData = game.dnd5e.applications.ActorSheet5eCharacter.prototype.getData;
  if (typeof libWrapper === "function") {
    libWrapper.register(
      "srd_heros_et_dragons",
      "game.dnd5e.applications.ActorSheet5eCharacter.prototype.getData",
      function (wrapper, ...args) {
        const sheetData = originalGetData.call(this);
        sheetData["resources"] = sheetResources.reduce((arr, r) => {
          const res = sheetData.data.resources[r] || {};
          res.name = r;
          res.placeholder = game.i18n.localize("DND5E.Resource" + r.titleCase());

          if (res && res.name === "count" && res.value === null) res.value = 3;
          if (res && res.name === "count" && res.value > globalLimit) res.value = globalLimit;
          return arr.concat([res]);
        }, []);
        wrapper.apply(this, args);
        return sheetData;
      },
      "WRAPPER"
    );
  } else {
    game.dnd5e.applications.ActorSheet5eCharacter.prototype.getData = function () {
      const sheetData = originalGetData.call(this);

      // Temporary HP
      let hp = sheetData.data.attributes.hp;
      if (hp.temp === 0) delete hp.temp;
      if (hp.tempmax === 0) delete hp.tempmax;

      // Resources
      sheetData["resources"] = sheetResources.reduce((arr, r) => {
        const res = sheetData.data.resources[r] || {};
        res.name = r;
        res.placeholder = game.i18n.localize("DND5E.Resource" + r.titleCase());
        if (res && res.value === 0 && res.name != "count") delete res.value;
        if (res && res.max === 0 && res.name != "count") delete res.max;
        if (res && res.name === "count") {
          res.max = globalLimit;
          res.label = "Resource Count";
          res.sr = false;
          res.lr = false;
        }
        if (res && res.name === "count" && res.value === null) res.value = 3;
        if (res && res.name === "count" && res.value > globalLimit) res.value = globalLimit;
        return arr.concat([res]);
      }, []);

      // Return data for rendering
      // Experience Tracking
      sheetData["disableExperience"] = game.settings.get("dnd5e", "disableExperienceTracking");

      return sheetData;
    };
  }
  /** @type {string[]} */
  var itemResources = [];

  sheetResources.forEach((resource) => {
    if (!(resource === "count" || resource === "primary" || resource === "secondary" || resource === "tertiary")) {
      itemResources.push(`resources.${resource}.value`);
    }
  });


  // Monkeypatch item sheet list so it shows up under the resources for items/spells
  monkeypatchSheet(itemResources);

  // Compatibility
  game.modules.forEach((module) => {
    switch (module.id) {
      // darksheet compat
      case "darksheet":
        if (module.active) {
          darkSheetCompat(sheetResources);
        }
        break;
    }
  });
});
Hooks.on("renderActorSheet", function (dndSheet) {
  if (
    dndSheet.constructor.name == "MonsterBlock5e"
  ) return;
  // Get all html elements that are resources
  var list = document.getElementsByClassName("attribute resource");
  //var classes =dndSheet.data.items.type["class"];
  //console.log(classes);
})

