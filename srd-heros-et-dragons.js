/*
_________________création des objets javascript une fois intit
*/





import { packMonsters } from './modules/monsters.js';
import { prepareCreatureData } from './modules/monsters.js';
import { packSpells } from './modules/spells.js';
import { prepareSpellData } from './modules/spells.js';
import { HDMenu } from './modules/HDMenu.js';
export let menuHD = new HDMenu();

Hooks.once("init", async function() {

    await prepareCreatureData();
    await prepareSpellData();


});

async function monsterCreation() {
    let srdMonst = await Compendium.create({ entity: "Actor", label: "HD Bestiaire" });
    for (var creature of packMonsters) {
        let actor = await Actor.create(creature, { displaySheet: false, temporary: true });
        srdMonst.createEntity(actor);
    }
};

async function spellCreation() {
    let srdSpell = await Compendium.create({ entity: "Item", label: "HD Grimoire" });
    for (var spell of packSpells) {
        let spellItem = await Item.create(spell, { displaySheet: false, temporary: true });
        srdSpell.createEntity(spellItem);
    }

};



/*
---------------une foi ready 
*/



Hooks.once("ready", async function() {


    // créer la fenetre de dialogue pour créer les compendiums




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

    logo.addEventListener("click", function() {
        menuHD.render(true);
        console.log(packSpells)
    });



});