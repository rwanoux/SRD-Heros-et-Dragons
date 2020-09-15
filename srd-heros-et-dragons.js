/*
-----------les liens externes
*/




async function openSRD() {
    ui.notifications.info("votre navigateur va ouvrir le site du SRD");
    var windowObjectReference = window.open("https://heros-et-dragons.fr/", "_blank");


};
async function openSupport() {
    ui.notifications.info("votre navigateur va ouvrir le discord francophone de foundryVTT, vous y trouverez un salon Héros et dragons (hnd)");
    var windowObjectReference = window.open("https://discord.gg/8Az2uUu", "_blank");

};

/*-- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -
 ----------------INIT--------------------
 -- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -*/


/*-------------appliquer le css-----------------*/

Hooks.once("init", async function() {
    game.settings.register('srd-heros-et-dragons', 'HDstyle', {
        name: "appliquer le style",
        hint: "applique une surchouche graphique au jeu",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        onChange: x => window.location.reload()
    });


    console.log(game.settings.get('srd-heros-et-dragons', 'HDstyle'))
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
});




Hooks.once("ready", async function() {


    //----------le menu liens externes


    let liensExt = new Dialog({
        title: "acceder au SRD ?",
        content: "<p>que voulez-vous faire</p>",
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
            }

        }
    });


    //----------console debug

    CONFIG.debug.hooks = true;


    //------------message et logo dans console 


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



    //----logo image
    var logo = document.getElementById("logo");
    logo.setAttribute("src", "modules/srd-heros-et-dragons/img/logoHD.png");


    //--------------ouvrir le menu lien sur click logo

    logo.setAttribute("title", "liens externes");
    logo.addEventListener("click", function() {
        liensExt.render(true);
    });



});

//------------remettre les compétence en ordre alphabétique fr------------- 


async function trieAlphabFR() {
    const list = document.getElementsByClassName("skills-list")[0];
    const competences = list.childNodes;
    let complist = [];
    for (let sk of competences) {
        if (sk.innerText) {
            complist.push(sk);
        }
    }
    complist.sort(function(a, b) {
        return (a.innerText > b.innerText) ? 1 : -1;
    });
    for (let sk of complist) {
        list.appendChild(sk)
    }
}


Hooks.on("renderActorSheet", async function() {
    trieAlphabFR();

});
/*


Hooks.on("renderActorSheet5eCharacter", async function() {
    trieAlphabFR();

});
Hooks.on("renderActorSheet5eNPC", async function() {
    trieAlphabFR();

});
Hooks.on("renderedTidy5eSheet", async function() {
    trieAlphabFR();

});
Hooks.on("renderTidy5eNPC", async function() {
    trieAlphabFR();
})
*/