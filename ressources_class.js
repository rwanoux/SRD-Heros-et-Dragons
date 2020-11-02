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



Hooks.on("renderActorSheet", function (app,html,data) {

  // Get all html elements that are resources
  let classes=data.items.filter(it=>it.type=="class");
  let resslist = $("li.resource").find("input[type='text']");
  for (let i=3;i<resslist.length;i++){
    resslist[i].disabled="disabled";
    
    resslist[i].parentNode.parentNode.style.display="none"


  }
  for (let cl of classes){
    switch(cl.name){
      case "Barbare":resslist[3].parentNode.parentNode.style.display="block";break;
      case "Barde":resslist[4].parentNode.parentNode.style.display="block";break;
      case "Clerc":resslist[5].parentNode.parentNode.style.display="block";break;
      case "Druide":resslist[9].parentNode.parentNode.style.display="block";break;
      case "Ensorceleur":resslist[6].parentNode.parentNode.style.display="block";break;
      case "Guerrier":resslist[6].parentNode.parentNode.style.display="block";break;
      case "Magicien":break;
      case "Moine":resslist[7].parentNode.parentNode.style.display="block";break;
      case "Paladin":resslist[5].parentNode.parentNode.style.display="block";resslist[10].parentNode.parentNode.style.display="block";break;
      case "Rôdeur":break;
      case "Roublard":resslist[6].parentNode.parentNode.style.display="block";break;
      case "Sorcier":resslist[6].parentNode.parentNode.style.display="block";break;
    }
    
  }
 
 




 
  



})

