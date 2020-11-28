export const HDSRD = {};
//-------------récup les races
HDSRD.races = [];
 function getRaces(index) {
    for (let r of index) {
        HDSRD.races.push(r.name)
    }
}
HDSRD.traitsRaciaux = [];
 function gettraitsRaciaux(index) {
    for (let tr of index) {
        HDSRD.traitsRaciaux.push(tr.name);
    }

}
//-------------récup les historiques
HDSRD.historiques = [];
 function getHist(index) {
     
    for (let h of index) {
        HDSRD.historiques.push(h.name)
    }
}
HDSRD.classes={
    barbare:{
      label:"Barbare",
    },
    barde:{
      label:"Barde",

    },
    clerc:{
      label:"Clerc",

    },
    druide:{
      label:"Druide",

    },
    ensorceleur:{
      label:"Ensorceleur",

    },
    guerrier:{
      label:"Guerrier",

    },
    magicien:{
      label:"Magicien",

    },
    moine:{
      label:"Moine",
    },
    paladin:{
      label:"Paladin",

    },
    rodeur:{
      label:"Rôdeur",

    },
    roublard:{
      label:"Roublard",

    },
    sorcier:{
      label:"Sorcier",

    }
}


Hooks.once("ready",  function() {

    game.packs.get("srd-heros-et-dragons.h-d-races").getIndex().then(index =>
        getRaces(index)
    );
    game.packs.get("srd-heros-et-dragons.h-d-traits-raciaux").getIndex().then(index =>
        gettraitsRaciaux(index)
    );
    game.packs.get("srd-heros-et-dragons.h-d-historiques").getIndex().then(index =>
        getHist(index)
    );
console.log(HDSRD.historiques)

})