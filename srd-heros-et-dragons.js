/*
_________________création des objets javascript une fois intit
*/
import { packMonsters } from './modules/monsters.js';
import { prepareCreatureData } from './modules/monsters.js';
import { packSpells } from './modules/spells.js';
import { prepareSpellData } from './modules/spells.js'

Hooks.once("init", async function() {

    await prepareCreatureData();
    await prepareSpellData();


});





async function monsterCreation() {

    let srdMonst = await Compendium.create({ entity: "Actor", label: "Bestiaire_DRS_H&D" });

    for (var creature of packMonsters) {
        let actor = await Actor.create(creature, { displaySheet: false, temporary: true });
        srdMonst.createEntity(actor);
    }
};

/*-------tests en cours-------------*/


async function spellsCreation() {
    let srdSpell = await Compendium.create({ entity: "Item", label: "grimoire_DRS_H&D" });

    for (var spell of packSpells) {
        let spellItem = await Item.create(spell, { displaySheet: false, temporary: true });
        srdSpell.createEntity(spellItem);
    }

};



/*
---------------une foi ready 
*/



Hooks.once("ready", async function() {



    //CONFIG.debug.hooks = true;
    console.log(`--------Heros et Dragons SRD Ready`);
    console.log(`
      .......................................

      .....................:*=#=+-...........
      
      ..................-=##=-...............
      
      ................-=####*:*=#######*:....
      
      ...........-:..*#############*:........
      
      ..........=#####################=*-....
      
      .........*##########################=-.
      
      ........-########################*-::+-
      
      ...-...+###########=-..+##########=-...
      
      ..+#:+=#######:=##:.....-###########=..
      
      .-##########=-:##+......+########+.*#+.
      
      .+#####=+....-=#=......*########=....:.
      
      .:#=+-..-*##====:....+##########*......
      
      ..-..-++:-........-=###########=.......
      
      ...............-=#############=........
      
      .............-=#############*..........
      
      ............+##########=+-.............
      
      ............######=+-..................
      
      ............=##=:......................
      
      .............+.........................
      `);

    var logo = document.getElementById("logo");
    logo.setAttribute("src", "modules/srd-heros-et-dragons/img/logoHD.png");
    logo.setAttribute("title", "clickez pour créer les compendiums");


    /*
    logo.addEventListener("click", await spellsCreation());
    logo.addEventListener("click", await monsterCreation());
    */
});