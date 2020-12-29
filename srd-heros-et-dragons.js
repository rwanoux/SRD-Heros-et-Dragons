//fonctions et class déportées
import {
    createLDM
} from './createMonsters.js';

import {
    calcCA
} from './modules/calcCA.js';
import {
    initRessourcesClass
} from './ressources_class.js';
import {
    showRessourcesClass
} from './ressources_class.js';
import {
    aidejeu
} from './modules/aidejeu.js';
import {
    openSRD
} from './modules/openSRD.js';
import {
    openWiki
} from './modules/openWiki.js';
import {
    openSupport
} from './modules/openSupport.js';
import {
    openTipee
} from './modules/openTipee.js';
import {
    trieAlphabFR
} from './modules/trieAlpha.js';
import {
    compendiumColor
} from './modules/compendiums.js';
import {
    hideDD5Compendium
} from './modules/compendiums.js';

import {
    ClassFeaturesHD
} from './modules/classFeatures.js'; //----WIP---

import {
    diceHD
} from './modules/diceH&D.js';
import {
    levelUp
} from './modules/aidecrea/levelup.js'
import {
    checkSubClass
} from './modules/aidecrea/checkSubClass.js'
import Actor5e from '../../systems/dnd5e/module/actor/entity.js'
import getClassfeaturesHD from './modules/getClassFeaturesHD.js'

/*-- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -
 ----------------dice so nice--------------------
 -- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -*/

Hooks.once('diceSoNiceReady', function (dice3d) {
    diceHD(dice3d);

});
Hooks.on('createOwnedItem', function (targetActor, targetItem, option, id) {
    if (targetItem.name == "Clerc" || targetItem.name == "Ensorceleur") {
        checkSubClass(targetActor, targetItem);
    }
})




/*-- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -
 ----------------INIT--------------------
 -- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -*/

//----ceci est juste une aide pour récup les id des items
Hooks.on("renderItemSheet5e", function (sheet) {
    console.log(`----${sheet.object.data.name}------`);
    console.log(sheet.object.data._id);
    console.log("---------------")

})

Hooks.once("init", function () {
   // createLDM();
    /*
        CUB.enhancedConditions.settings.system = "Héros & Dragons",
            CUB.enhancedConditions.settings.maps.HD = [
                ["Aveuglé", "modules/combat-utility-belt/icons/blinded.svg", ""]
                ["Charmé", "modules/combat-utility-belt/icons/charmed.svg", ""]
                ["Concentration", "modules/combat-utility-belt/icons/concentrating.svg", ""]
                ["Assourdi", "modules/combat-utility-belt/icons/deafened.svg", ""]
                ["Epuisement 1", "modules/combat-utility-belt/icons/exhaustion1.svg", ""]
                ["Epuisement 2", "modules/combat-utility-belt/icons/exhaustion2.svg", ""]
                ["Epuisement 3", "modules/combat-utility-belt/icons/exhaustion3.svg", ""]
                ["Epuisement 4", "modules/combat-utility-belt/icons/exhaustion4.svg", ""]
                ["Epuisement 5", "modules/combat-utility-belt/icons/exhaustion5.svg", ""]
                ["Effrayé", "modules/combat-utility-belt/icons/frightened.svg", ""]
                ["Aggrippé", "modules/combat-utility-belt/icons/grappled.svg", ""]
                ["Neutralisé", "modules/combat-utility-belt/icons/incapacitated.svg", ""]
                ["Invisible", "modules/combat-utility-belt/icons/invisible.svg", ""]
                ["Paralysé", "modules/combat-utility-belt/icons/paralyzed.svg", ""]
                ["Petrifié", "modules/combat-utility-belt/icons/petrified.svg", ""]
                ["Poisoned", "modules/combat-utility-belt/icons/poisoned.svg", ""]
                ["A terre", "modules/combat-utility-belt/icons/prone.svg", ""]
                ["Entravé", "modules/combat-utility-belt/icons/restrained.svg", ""]
                ["Etourdi", "modules/combat-utility-belt/icons/stunned.svg", ""]
                ["Inconscient", "icons/svg/unconscious.svg", ""]
            ]


    */
    //---------déclaration des settings
    game.settings.register('srd-heros-et-dragons', 'calcCA', {
        name: "calcul de la CA",
        hint: "calculer automatiquement la classe d'armure en fonction de l'armure équipée, uniquement sur les personnage joueurs ",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => window.location.reload()
    });
    game.settings.register('srd-heros-et-dragons', 'ressourcesClass', {
        name: "ressources de classes",
        hint: "ajouter les ressources spécifiques aux classes et sous-classes (point de sorcelleries, impositions des mains, inspirations bardiques etc...",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => window.location.reload()
    });
    game.settings.register('srd-heros-et-dragons', 'HDstyle', {
        name: "appliquer le style",
        hint: "applique une surchouche graphique au jeu",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => window.location.reload()
    });
    game.settings.register('srd-heros-et-dragons', 'HDcompendiumColor', {
        name: "couleur des compendium H&D et DD5",
        hint: "affiche les compendium H&D en vert, DD5 en rouge",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
        onChange: () => window.location.reload()
    });
    game.settings.register('srd-heros-et-dragons', 'HDhideDD5Compendium', {
        name: "masquer les compendium DD5",
        hint: "masque les compendium issus du system DD5",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => window.location.reload()
    });
    game.settings.register('srd-heros-et-dragons', 'consoleDebug', {
        name: "console Debug",
        hint: "activer le debugage console (pour dev)",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
        onChange: () => window.location.reload()
    });

    game.settings.register('srd-heros-et-dragons', 'levelUp', {
        name: "aptitudes automatiques",
        hint: "NON FONCTIONNEL // travail en cours",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        onChange: () => window.location.reload()
    });

    if (game.settings.get('srd-heros-et-dragons', 'ressourcesClass')) {
        initRessourcesClass();
    }
    //appliquer css selon les options de config du module
    if (game.settings.get('srd-heros-et-dragons', 'HDstyle')) {

        // Create new link Element 
        var styleHD = document.createElement('link');
        // set the attributes for link element 
        styleHD.rel = 'stylesheet';
        styleHD.type = 'text/css';
        styleHD.href = '/modules/srd-heros-et-dragons/style/HD.css';
        styleHD.media = 'all';
        document.getElementsByTagName('HEAD')[0].appendChild(styleHD);


        // Create new link Element 
        var styleHDbetterNPC = document.createElement('link');
        // set the attributes for link element 
        styleHDbetterNPC.rel = 'stylesheet';
        styleHDbetterNPC.type = 'text/css';
        styleHDbetterNPC.href = '/modules/srd-heros-et-dragons/style/HDbetterNPC.css';
        styleHDbetterNPC.media = 'all';
        document.getElementsByTagName('HEAD')[0].appendChild(styleHDbetterNPC);

        // Create new link Element 
        var styleHDmidiqol = document.createElement('link');
        // set the attributes for link element 
        styleHDmidiqol.rel = 'stylesheet';
        styleHDmidiqol.type = 'text/css';
        styleHDmidiqol.href = '/modules/srd-heros-et-dragons/style/HDmidiqol.css';
        styleHDmidiqol.media = 'all';
        document.getElementsByTagName('HEAD')[0].appendChild(styleHDmidiqol);

        // Create new link Element 
        var styleHDtidysheet = document.createElement('link');
        // set the attributes for link element 
        styleHDtidysheet.rel = 'stylesheet';
        styleHDtidysheet.type = 'text/css';
        styleHDtidysheet.href = '/modules/srd-heros-et-dragons/style/HDtidysheet.css';
        styleHDtidysheet.media = 'all';
        document.getElementsByTagName('HEAD')[0].appendChild(styleHDtidysheet);
    }

    //console debug

    if (game.settings.get('srd-heros-et-dragons', 'consoleDebug')) {
        CONFIG.debug.hooks = true;
    } else {
        CONFIG.debug.hooks = false;
    }

    //modif des évolution de classes depuis ./modules/classFeatures.js
    if (game.settings.get('srd-heros-et-dragons', 'levelUp')) {
        CONFIG.DND5E.classFeatures = ClassFeaturesHD
    } else {
        CONFIG.DND5E.classFeatures = {};
    }

});

//--------------------------------------
//----setting compendiums
//--------------------------------------
Hooks.on("renderSidebarTab", function () {
    if (game.settings.get('srd-heros-et-dragons', 'HDcompendiumColor')) {
        compendiumColor();
    }
    if (game.settings.get('srd-heros-et-dragons', 'HDhideDD5Compendium')) {
        hideDD5Compendium();
    }
});



Hooks.once("ready", function () {

    //----------le menu liens externes
    let liensExt = new Dialog({
        title: "liens externes en lien avec Héros et Dragons",
        content: "<p>où souhaites-tu te rendre ?</p>",
        buttons: {

            one: {
                icon: '<i class="fas fa-check"></i>',
                label: "acceder au srd dans le navigateur",
                callback: () => openSRD()
            },
            two: {
                icon: '<i class="fas fa-check"></i>',
                label: "joindre le support du module sur discord",
                callback: () => openSupport()
            },
            three: {
                icon: '<i class="fas fa-check"></i>',
                label: "accéder au wiki francophone dédié",
                callback: () => openWiki()
            },
            four: {
                icon: '<i class="fas fa-check"></i>',
                label: "accéder à la page tipee",
                callback: () => openTipee()
            }

        }
    });


    //------------message et logo dans console 


    console.log(`--------Heros et Dragons SRD Ready--------------------------------`);
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



    //----logo image
    var logo = document.getElementById("logo");
    logo.setAttribute("src", "modules/srd-heros-et-dragons/img/logoHD.png");

    //--------------ouvrir le menu lien sur click logo
    logo.setAttribute("title", "liens externes");
    logo.addEventListener("click", function () {
        liensExt.render(true);
    });

    //------------ajout bouton aide de regles
    let zoneAide = document.createElement('div');
    renderTemplate("modules/srd-heros-et-dragons/templates/menuAide.html").then(html => {
        zoneAide.id = "openAide";
        zoneAide.innerHTML = html;
        document.body.append(zoneAide);
    });

    let aideApp = new aidejeu;
    zoneAide.addEventListener("click", function () {
        aideApp.render(true);
    });




});

//-------------action sur feuille de perso---------
//-------------------------------------------------

Hooks.on("renderActorSheet5e", async function (app, html, data) {


    //---trie alphabétique
    trieAlphabFR();
    //bouton montée de niveau
    levelUp(html, data);
    // ressources de classes
    if (game.settings.get('srd-heros-et-dragons', 'ressourcesClass')) {
        showRessourcesClass(app, html, data);
    };
    if (game.settings.get('srd-heros-et-dragons', 'calcCA') && data.isCharacter == true) {
        calcCA(app, html, data);
    };
});

