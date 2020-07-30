/*
_________________création des objets javascript une fois intit
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

    let d = new Dialog({
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
    logo.setAttribute("title", "acceder au srd en ligne");
    logo.addEventListener("click", function() {

        d.render(true);

    });





});