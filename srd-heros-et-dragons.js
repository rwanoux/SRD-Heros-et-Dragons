//fonctions et class déportées
import {
    redirectInIFrame
} from './modules/redirectInIFrame.js';

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
    openIssue
} from './modules/openIssue.js';
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
} from './modules/classFeatures.js';

import {
    diceHD
} from './modules/diceH&D.js';
import {
    levelUp
} from './modules/aidecrea/levelup.js'
import {
    checkSubClass
} from './modules/aidecrea/checkSubClass.js'

/*-- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -
 ----------------dice so nice--------------------
 -- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -*/

Hooks.once('diceSoNiceReady', function(dice3d) {
    diceHD(dice3d);

});

//----déclenchent du check de sous classe dès le premier niveau si clerc ou ensorceleur
Hooks.on('createItem', function(item) {
    if (item.name == "Clerc" || item.name == "Ensorceleur") {
        checkSubClass(item.actor, item);
    }
})

/*-- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -
 ----------------INIT--------------------
 -- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -*/
Hooks.once("init", function() {
    // createLDM(); // .........en attente ....

    //---------déclaration des settings

    game.settings.register('srd-heros-et-dragons', 'aideJeu', {
        name: "aide de jeu",
        hint: "affiche un bouton permettant d'accéder à une aide de jeu",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
        onChange: () => window.location.reload()
    });

    game.settings.register('srd-heros-et-dragons', 'boutonCrea', {
        name: "bouton de création",
        hint: "affiche un bouton sur la feuille de personnage permettant d'accéder à la création de personnage",
        scope: "world",
        config: true,
        default: true,
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

    //Merge both dnd5e and hnd class features
    CONFIG.DND5E.classFeatures = {...ClassFeaturesHD, ...CONFIG.DND5E.classFeatures };
});

//--------------------------------------
//----setting compendiums
//--------------------------------------
Hooks.on("renderSidebarTab", function() {
    if (game.settings.get('srd-heros-et-dragons', 'HDcompendiumColor')) {
        compendiumColor();
    }
    if (game.settings.get('srd-heros-et-dragons', 'HDhideDD5Compendium')) {
        hideDD5Compendium();
    }
});


//--------------------------------------
//----modif des éléments de l'ui
//--------------------------------------
Hooks.once("ready", async function() {

    //----------le menu liens externes
    let liensExt = new Dialog({
        title: "liens externes en lien avec Héros et Dragons",
        content: "<p>où souhaites-tu te rendre ?</p>",
        buttons: {

            one: {
                icon: '<i class="fas fa-expand-arrows-alt"style="font-size:24px"></i>',
                label: "<p>acceder au srd dans le navigateur</p>",
                callback: () => openSRD()
            },
            two: {
                icon: '<i class="fab fa-discord"style="font-size:24px"></i>',
                label: "<p>joindre le support du module sur discord</p>",
                callback: () => openSupport()
            },
            three: {
                icon: '<i class="fab fa-wikipedia-w"style="font-size:24px"></i>',
                label: "<p>accéder au wiki francophone dédié</p>",
                callback: () => openWiki()
            },

            four: {
                icon: '<i class="fas fa-bug" style="font-size:24px"></i>',
                label: "<p>signaler un bug ou proposer une amélioration</p>",
                callback: () => openIssue()
            }

        }
    }, {
        width: 600,
        height: 250,
        left: 100,
        top: 20
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
    logo.addEventListener("click", function() {
        liensExt.render(true);
    });

    //------------ajout bouton aide de regles
    if (game.settings.get('srd-heros-et-dragons', 'aideJeu')) {
        let zoneAide = document.createElement('div');
        renderTemplate("modules/srd-heros-et-dragons/templates/menuAide.html").then(html => {
            zoneAide.id = "openAide";
            zoneAide.innerHTML = html;
            document.body.append(zoneAide);
        });

        let aideApp = new aidejeu;
        zoneAide.addEventListener("click", function() {
            aideApp.render(true);
        });
    }


    //livre des monstres
    /*
    await createLDM();
    */



});

//-------------action sur feuille de perso---------
//-------------------------------------------------

Hooks.on("renderActorSheet5e", async function(app, html, data) {

    await redirectInIFrame(html)
        //---trie alphabétique
    trieAlphabFR();
    //bouton montée de niveau
    levelUp(html, data);
    // ressources de classes
    if (game.settings.get('srd-heros-et-dragons', 'ressourcesClass')) {
        showRessourcesClass(app, html, data);
    };
});
Hooks.on("renderItemSheet5e", async function(app, html, data) {
    await redirectInIFrame(html)

});