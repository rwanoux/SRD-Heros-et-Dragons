/*
_________________création des objets javascript une fois intit
*/
<<<<<<< HEAD
=======





import { packMonsters } from './modules/monsters.js';
import { prepareCreatureData } from './modules/monsters.js';
import { packSpells } from './modules/spells.js';
import { prepareSpellData } from './modules/spells.js';
import { HDMenu } from './modules/HDMenu.js';
export let menuHD = new HDMenu();
>>>>>>> 4eea986205d9f2ec07b2c310c0825d99de5cdaad





<<<<<<< HEAD
import { packMonsters } from './modules/monsters.js';
import { prepareCreatureData } from './modules/monsters.js';
import { packSpells } from './modules/spells.js';
import { prepareSpellData } from './modules/spells.js';

import { itemsPack } from './modules/items.js';
import { prepareItemsData } from './modules/items.js';
import { preloadTemplates } from './modules/preloadTemplates.js';




=======
>>>>>>> 4eea986205d9f2ec07b2c310c0825d99de5cdaad
async function monsterCreation() {
    let srdMonst = await Compendium.create({ entity: "Actor", label: "HD Bestiaire" });
    for (var creature of packMonsters) {
        let actor = await Actor.create(creature, { displaySheet: false, temporary: true });
        srdMonst.createEntity(actor);
    }
};

<<<<<<< HEAD
/*-------tests en cours-------------*/


async function spellCreation() {
    let srdSpell = await Compendium.create({ entity: "Item", label: "grimoire_DRS_H&D" });

=======
async function spellCreation() {
    let srdSpell = await Compendium.create({ entity: "Item", label: "HD Grimoire" });
>>>>>>> 4eea986205d9f2ec07b2c310c0825d99de5cdaad
    for (var spell of packSpells) {
        let spellItem = await Item.create(spell, { displaySheet: false, temporary: true });
        srdSpell.createEntity(spellItem);
    }

};
async function itemCreation() {
    let srdItem = await Compendium.create({ entity: "Item", label: "objets magiques_DRS_H&D" });

    for (var magItem of packItems) {
        let MG = await Item.create(magItem, { displaySheet: false, temporary: true });
        srdItem.createEntity(MG);
    }

};



/*
---------------une foi ready 
*/



Hooks.once("ready", async function() {

<<<<<<< HEAD
    let d = new Dialog({
        title: "créer des compendium ?",
        content: "<p>choisissez les compendium à créer</p>",
        buttons: {
            one: {
                icon: '<i class="fas fa-check"></i>',
                label: "créer le compendium monstres",
                callback: () => monsterCreation()
            },
            two: {
                icon: '<i class="fas fa-check"></i>',
                label: "créer le compendium sorts",
                callback: () => spellCreation()
            },
            three: {
                icon: '<i class="fas fa-check"></i>',
                label: "créer le compendium d'objets magique--travail en cours--",
                callback: () => itemCreation()
            }
        }


    });
=======

    // créer la fenetre de dialogue pour créer les compendiums




>>>>>>> 4eea986205d9f2ec07b2c310c0825d99de5cdaad
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

        preloadTemplates();
        prepareCreatureData();
        prepareSpellData();
        prepareItemsData();


        d.render(true);

    });

    logo.addEventListener("click", function() {
        menuHD.render(true);
        console.log(packSpells)
    });



});