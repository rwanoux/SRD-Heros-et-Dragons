export const HDSRD = {};


//-------------récup les races
HDSRD.races = [];
HDSRD.traitsRaciaux = [];
HDSRD.historiques = [];


async function getRaces(index) {
  for (let r of index) {
    HDSRD.races.push(r)
  }
}


async function gettraitsRaciaux(index) {
  let indexTrait = "";
  for (let tr of index) {
    HDSRD.traitsRaciaux.push(tr);
  }

}

async function traitsInRaces() {

  HDSRD.races.forEach(r => {
    r.traits = [];
    HDSRD.traitsRaciaux.forEach(tr => {
      let indexTrait = tr.name.indexOf(r.name);
      if (indexTrait !== -1) {
        r.traits.push(tr);
      };
      switch (r.name) {
        case "Elfe d'Aether":
        case "Elfe de Fer":
        case "Elfe des Sylves":
          indexTrait = tr.name.indexOf("(Elfe)");
          if (indexTrait !== -1) {
            r.traits.push(tr);
          };
          break;
        case "Gnome des fées":
        case "Gnome des lacs":
        case "Gnome des roches":
          indexTrait = tr.name.indexOf("(Gnome)");
          if (indexTrait !== -1) {
            r.traits.push(tr);
          };
          break;
        case "Halfelin Grand-sabot":
        case "Halfelin Pied léger":
          indexTrait = tr.name.indexOf("(Halfelin)");
          if (indexTrait !== -1) {
            r.traits.push(tr);
          };
          break;
        case "Nain des laves":
        case "Nain des pierres":
        case "Nain des tertres":
          indexTrait = tr.name.indexOf("(Nain)");
          if (indexTrait !== -1) {
            r.traits.push(tr);
          };
          break;
        case "Sangdragon Airain":
        case "Sangdragon Argent":
        case "Sangdragon Blanc":
        case "Sangdragon Bleu":
        case "Sangdragon Bronze":
        case "Sangdragon Cuivre":
        case "Sangdragon Noir":
        case "Sangdragon Or":
        case "Sangdragon Rouge":
        case "Sangdragon Vert":
          indexTrait = tr.name.indexOf("(Sangdragon)");
          if (indexTrait !== -1) {
            r.traits.push(tr);
          };
          break;
      }
    });
  });
}
//-------------récup les historiques


function getHist(index) {

  for (let h of index) {
    HDSRD.historiques.push(h.name)
  }
}
HDSRD.classes = {
  barbare: {
    label: "Barbare",
  },
  barde: {
    label: "Barde",

  },
  clerc: {
    label: "Clerc",

  },
  druide: {
    label: "Druide",

  },
  ensorceleur: {
    label: "Ensorceleur",

  },
  guerrier: {
    label: "Guerrier",

  },
  magicien: {
    label: "Magicien",

  },
  moine: {
    label: "Moine",
  },
  paladin: {
    label: "Paladin",

  },
  rodeur: {
    label: "Rôdeur",

  },
  roublard: {
    label: "Roublard",

  },
  sorcier: {
    label: "Sorcier",

  }
}
HDSRD.rules = {};
HDSRD.rules.scoresCarac = {
  methode: {
    fixe: {
      selected:true,
      courageux: [14, 12, 12, 10, 10, 8],
      heroique: [15, 14, 13, 12, 10, 8],
      legendaire: [16, 15, 13, 12, 12, 10]

    },
    aleatoire: {
      selected:false,
      courageux: ["(4d6dl)-1","(4d6dl)-1","(4d6dl)-1","(4d6dl)-1","(4d6dl)-1","(4d6dl)-1"],
      heroique: ["(4d6dl)","(4d6dl)","(4d6dl)","(4d6dl)","(4d6dl)","(4d6dl)"],
      legendaire: ["(4d6dl)+1","(4d6dl)+1","(4d6dl)+1","(4d6dl)+1","(4d6dl)+1","(4d6dl)+1"]
    },
    repartition: {
      selected:false
    }
  }


};


Hooks.once("ready", function () {

  console.log("----------------------------------------------------------------------------------------")
  const packRace = game.packs.get("srd-heros-et-dragons.h-d-races");
  const packTrRaciaux = game.packs.get("srd-heros-et-dragons.h-d-traits-raciaux");
  const packClasse = game.packs.get("srd-heros-et-dragons.h-d-classes-et-specialisations");

  game.packs.get("srd-heros-et-dragons.h-d-races").getIndex().then(index =>
    getRaces(index)
  );
  game.packs.get("srd-heros-et-dragons.h-d-traits-raciaux").getIndex().then(index =>
    gettraitsRaciaux(index).then(i => {
      traitsInRaces()
    })
  );
  game.packs.get("srd-heros-et-dragons.h-d-historiques").getIndex().then(index =>
    getHist(index)
  );
})