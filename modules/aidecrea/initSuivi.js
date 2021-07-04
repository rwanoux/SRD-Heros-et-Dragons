import {
    creaPersoApp
} from './appCrea.js';



Hooks.on("renderActorSheet5e", (app, html, data) => {

    if (!game.settings.get('srd-heros-et-dragons', 'boutonCrea')) return;
    //-----crée l'app de suivi en fonction des data de la fiche de perso: 
    let crea = new creaPersoApp(data)
    console.log(data);
    if (game.user.isGM && data.isCharacter) {
        if (document.getElementById('HDcrea') === null) {
            //création du bouton
            let bar = html[0].firstElementChild;
            let butonCrea = document.createElement("a")
            butonCrea.innerHTML = '<i class="fas fa-cog"></i>aide créa';
            butonCrea.id = "HDcrea";
            butonCrea.style.marginRight="20px";
        
            //
            butonCrea.addEventListener("click", () => {
                crea.render(true);
            }, false);
            //----ajout du bouton pour ouvrir le suivi

            bar.prepend(butonCrea);

        }
    }
});