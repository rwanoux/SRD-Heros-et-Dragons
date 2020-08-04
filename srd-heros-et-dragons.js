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



/*
---------------une foi ready 
*/



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
Hooks.on("renderActorSheet5eCharacter", async function() {
    trieAlphabFR()
});
Hooks.on("renderActorSheet5eNPC", async function() {
    trieAlphabFR()
})