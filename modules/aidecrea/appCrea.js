import {
    ClassFeaturesHD
} from '../classFeatures.js';
import {
    HDSRD
} from './getSRD.js';
//----WIP---
export class creaPersoApp extends FormApplication {



    constructor(data, html, options = {}) {
        super(options);
        this.data = data;
        this.HDSRD = HDSRD;
        this.choix = {};
        this.html = html
        this.actor = game.actors.get(this.data.actor._id);
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['form', 'HDcrea'],
            popOut: true,
            closeOnSubmit: true,
            template: `modules/srd-heros-et-dragons/templates/appCrea.html`,
            id: 'creaPerso',
            title: 'aide à la création',
            width: 400,
            height: 600,
            left: 3,
            top: 20
        });
    }

    getData() {
        super.getData();
        return {
            HDSRD: this.HDSRD,
            data: this.data,
            html: this.html
        }

    }

    //---------------pop-out pour valider le reset perso----------
    ReinitailizeDialog = new Dialog({
        title: "ré-initialiser ce personnage ?",
        content: "<p>ré-initialisé ce personnage remettra toutes ses caractéristiques à 0, et lui fera perdre tous ses items. </p><h2 style='text-align:right'>ceci est irrémédiable</h2>",
        buttons: {

            one: {
                icon: '<i class="fas fa-check"></i>',
                label: "re-initialiser",
                callback: () => this.ResetPerso(this.actor)
            },
            two: {
                icon: '<i class="fas fa-uncheck"></i>',
                label: "non merci",
                callback: () => this.render(false)
            }

        }
    });

    async ResetPerso()
    {
        let abilities = duplicate(this.actor.data.data.abilities);
        for (let ab in abilities) {
            abilities[ab].value = 0
        }
        let items = [];
        await this.actor.update({
            "data.abilities": abilities,
            "items": items
        });
        await this.actor.setFlag("srd-heros-et-dragons", "race", '');
        await this.actor.setFlag("srd-heros-et-dragons", "historique", '');
        await this.actor.setFlag("srd-heros-et-dragons", "classe", '');
        await this.actor.setFlag("srd-heros-et-dragons", "sous-classe", '');
        await this.actor.setFlag("srd-heros-et-dragons", "choix-sous-classe", '');
    }

    async changeRace(racename) {
        //récupérer la race et donner l'item de race

        let packRace = game.packs.get("srd-heros-et-dragons.h-d-races");
        let packTrRaciaux = game.packs.get("srd-heros-et-dragons.h-d-traits-raciaux");
        let race = packRace.index.find(r => r.name == racename);
        let raceDocument =  await packRace.getDocument(race._id)
        await this.actor.createEmbeddedDocuments("Item", [raceDocument.data])
        await this.actor.setFlag("srd-heros-et-dragons", "race", race.name);
        this.choix.race = {
            label: race.name
        };

        //récupérer et donner les traits raciaux
        let traitsRacOk = [];
        let traitsRaciaux = await packTrRaciaux.getIndex()
            for (let trait of traitsRaciaux) {
                let indexTrait = trait.name.indexOf(racename);
                if (indexTrait !== -1) {
                    traitsRacOk.push(trait);
                    let documentTrait = await  packTrRaciaux.getDocument(trait._id)
                    await this.actor.createEmbeddedDocuments("Item", [documentTrait.data]);
                }
                switch (racename) {
                    case "Homme serpent Kubea ghinduk":
                    case "Homme serpent Kubea ssyere":

                        indexTrait = trait.name.indexOf("(Homme serpent)");
                        if (indexTrait !== -1) {
                            traitsRacOk.push(trait);
                            let documentTrait = await packTrRaciaux.getDocument(trait._id)
                            await this.actor.createEmbeddedDocuments("Item", [documentTrait.data]);
                        }
                        break;
                    case "Elfe d'Aether":
                    case "Elfe de Fer":
                    case "Elfe des Sylves":
                        indexTrait = trait.name.indexOf("(Elfe)");
                        if (indexTrait !== -1) {
                            traitsRacOk.push(trait);
                            let documentTrait = await packTrRaciaux.getDocument(trait._id)
                            await this.actor.createEmbeddedDocuments("Item", [documentTrait.data]);
                        }
                        break;
                    case "Gnome des fées":
                    case "Gnome des lacs":
                    case "Gnome des roches":
                        indexTrait = trait.name.indexOf("(Gnome)");
                        if (indexTrait !== -1) {
                            traitsRacOk.push(trait);
                            let documentTrait = await packTrRaciaux.getDocument(trait._id)
                            await this.actor.createEmbeddedDocuments("Item", [documentTrait.data]);
                        }
                        break;
                    case "Halfelin Grand-sabot":
                    case "Halfelin Pied léger":
                        indexTrait = trait.name.indexOf("(Halfelin)");
                        if (indexTrait !== -1) {
                            traitsRacOk.push(trait);
                            let documentTrait = await packTrRaciaux.getDocument(trait._id)
                            await this.actor.createEmbeddedDocuments("Item", [documentTrait.data]);
                        }
                        break;
                    case "Nain des laves":
                    case "Nain des pierres":
                    case "Nain des tertres":
                        indexTrait = trait.name.indexOf("(Nain)");
                        if (indexTrait !== -1) {
                            traitsRacOk.push(trait);
                            let documentTrait = await packTrRaciaux.getDocument(trait._id)
                            await this.actor.createEmbeddedDocuments("Item", [documentTrait.data]);
                        }
                        break;
                    case "Sangdragon Airain":
                    case "Sangdragon Argent":
                    case "Sangdragon Blanc":
                    case "Sangdragon Bleu":
                    case "Sangdragon Bronze":
                    case "Sangdragon Cuivre":
                    case "Sangdragon Noir":
                    case "Sangdragon Or":
                    case "Sangdragon Rouge":
                    case "Sangdragon Vert":
                        indexTrait = trait.name.indexOf("(Sangdragon)");
                        if (indexTrait !== -1) {
                            traitsRacOk.push(trait);
                            let documentTrait = await packTrRaciaux.getDocument(trait._id)
                            await this.actor.createEmbeddedDocuments("Item", [documentTrait.data]);
                        }
                        break;
                }

            }
            let flagsTraitsRac = []
            for (let t of traitsRacOk) {
                flagsTraitsRac.push(t.name)
            }
            await this.actor.setFlag("srd-heros-et-dragons", "race.traits", flagsTraitsRac);



    }


    async changeHistorique(historiqueName) {


        let packHist = game.packs.get("srd-heros-et-dragons.h-d-historiques");
        let packAptHist = game.packs.get("srd-heros-et-dragons.h-d-aptitudes-historiques");
        let historique = packHist.index.find(h => h.name == historiqueName);
        let historiqueDocument = await packHist.getDocument(historique._id)
        await this.actor.createEmbeddedDocuments( "Item", [historiqueDocument.data])

        await this.actor.setFlag("srd-heros-et-dragons", "historique.label", historique.name);

        //récupérer et donner les aptitudes d'historique
        let aptHist = [];
        let aptHistOK = [];
        let index = await packAptHist.getIndex()
        aptHist = index;
        for (let apt of aptHist) {
               let indexApt = apt.name.includes("(" +  historiqueName + ")" );
               if (indexApt) {
                   aptHistOK.push(apt);
                let histDocument =  await packAptHist.getDocument(apt._id)
                await this.actor.createEmbeddedDocuments( "Item", [histDocument.data]);
               }
           }
           let flagsAptHist = [];
           for (let a of aptHistOK) {
               flagsAptHist.push(a.name)
           }
          await this.actor.setFlag("srd-heros-et-dragons", "historique.aptitudes", flagsAptHist);
    }

    async changeClasse(classeName) {

        let classConfig = ClassFeaturesHD[classeName.toLowerCase()];
        let ids = [];
        for (let [l, f] of Object.entries(classConfig.features || {})) {
            l = parseInt(l);
            if (l == 1) {
                ids = f;
            }
        }
        for (let id of ids) {

            let pckName = id.split(".")[1] + "." + id.split(".")[2];
            let idF = id.split(".")[3];
            let packfeat = game.packs.get(pckName);
            let feat = await packfeat.getDocument(idF);
            await this.actor.createEmbeddedDocuments("Item", [feat.data])
        }

        const packClass = game.packs.get("srd-heros-et-dragons.h-d-classes-et-specialisations")
        const packClassArray = packClass.index || await packClass.getIndex()
        let cl = packClassArray.find(c => c.name === classeName);
        let classDocument = await packClass.getDocument(cl._id)
        //await this.actor.sheet._onDropItemCreate(classDocument.data);
        await this.actor.createEmbeddedDocuments("Item",  [classDocument.data]);
        await this.actor.setFlag("srd-heros-et-dragons", "classe", classDocument.name);
        await this.actor.setFlag("srd-heros-et-dragons", "sous-classe", classDocument.data.subclass);

    };


    async validCarac(caract) {

        let selectedCarac = [];
        let valuesCarac=[];
       
        for (let c of caract) {
            selectedCarac.push(c.value) ;
            valuesCarac.push(c.previousElementSibling.value);
        };

        for (let ab in CONFIG.DND5E.abilities) {
            let arr = selectedCarac.filter(c => c == ab);
            if (arr.length > 1) {
                ui.notifications.error(`${CONFIG.DND5E.abilities[ab]} a été selectionné plusieurs fois`);
            }

        };
        
        
        let update = {
            "data": {
                "abilities": {
                    "str": {
                        "value": 0
                    },
                    "dex": {
                        "value": 0
                    },
                    "con": {
                        "value": 0
                    },
                    "int": {
                        "value": 0
                    },
                    "wis": {
                        "value": 0
                    },
                    "cha": {
                        "value": 0
                    }
                }

            }

        };
        for (let c of selectedCarac){
            let val=valuesCarac[selectedCarac.indexOf(c)];
            update.data.abilities[c].value=val;
        };
        await this.actor.update(update)
    }


    activateListeners(html) {

        let choix = this.choix;
        super.activateListeners(html);


        //---------------fonction reset
        let reset = html.find('a.reset')[0];
        reset.addEventListener("click", () => {
            this.ReinitailizeDialog.render(true)
        });

   

        //-------------modif race
        //----------------------------
        let raceEl = html.find('select.race')[0];
        let valRace = html.find('a.validRace')[0];
        valRace.addEventListener("click", async () => {
           await this.changeRace(raceEl.value)
        });


       
        //-----------changement historique------------


        let histEl = html.find('select.historique')[0];
        let valHist = html.find('a.validHist')[0];

        valHist.addEventListener("click", async () => {
            await this.changeHistorique(histEl.value)
        });


        //-------selecteur de classe------------------

        let classeEl = html.find('select.classe')[0];
        let valClass = html.find('a.validClass')[0];

        valClass.addEventListener("click", () => {
            this.changeClasse(classeEl.value)
        });
        //--------------change classe-------------
       

        //select carac
        let caracMet = html.find('select.carac_methode')[0];
        let caracNiv = html.find('select.carac_niveau')[0];


        caracMet.addEventListener("change", () => {
            calculScore()
        });
        caracNiv.addEventListener("change", () => {
            calculScore()
        });

        function calculScore() {

            let scores = [];
            let methodeRep = false;
            let points = 0;
            switch (caracMet.value) {
                case "none":
                    scores = [15, 14, 13, 12, 10, 8];
                    break;
                case "fixe":
                    while (caracNiv.nextElementSibling) {
                        caracNiv.parentElement.removeChild(caracNiv.parentElement.lastChild)
                    };
                    switch (caracNiv.value) {
                        case "none":
                            scores = [0, 0, 0, 0, 0, 0];

                            break;
                        case "Courageux":
                            scores = [14, 12, 12, 10, 10, 8];
                            break;
                        case "Héroïque":
                            scores = [15, 14, 13, 12, 10, 8];
                            break;
                        case "Légendaire":
                            scores = [16, 15, 13, 12, 12, 10];
                            break;
                    };
                    createScores(scores)

                    break;
                case "aléatoire":
                    //créa d'un bouton jet de des
                    while (caracNiv.nextElementSibling) {
                        caracNiv.parentElement.removeChild(caracNiv.parentElement.lastChild)
                    }
                    let but = document.createElement("a");
                    but.innerText = "jeter les dés";
                    but.addEventListener("click", rollCarac);
                    caracNiv.insertAdjacentElement("afterend", but);
                    let dice = "4d6dl";
                    let bonus = ""
                    switch (caracNiv.value) {
                        case "none":
                            bonus = ""
                            break;
                        case "Courageux":
                            bonus = "-1"
                            break;
                        case "Héroïque":
                            bonus = "+0"
                            break;
                        case "Légendaire":
                            bonus = "+1"
                            break;
                    };
                    let formule = dice + bonus;

                    function rollCarac() {
                        for (let ab in CONFIG.DND5E.abilities) {
                            let r = new Roll(formule);
                            r.roll();
                            r.toMessage();
                            scores.push(r.total);
                        }
                        createScores(scores)

                    };

                    break;
                case "répartition":
                while (caracNiv.nextElementSibling) {
                    caracNiv.parentElement.removeChild(caracNiv.parentElement.lastChild)
                }
                    scores = [8, 8, 8, 8, 8, 8];
                    switch (caracNiv.value) {
                        case "none":
                            break;
                        case "Courageux":
                            points = 19;
                            break;
                        case "Héroïque":
                            points = 27;
                            break;
                        case "Légendaire":
                            points = 36;
                            break;
                    }
                    methodeRep = true;
                    createScores(scores);
                    break;

            };

            function createScores(scores) {
                let casesScore = html.find("p.carac_scores")[0];
                while (casesScore.firstChild) {
                    casesScore.removeChild(casesScore.firstChild)
                }
                if (methodeRep) {
                    let decompte = document.createElement("p");
                    decompte.innerText = " points à répartir"
                    let spanPoint = document.createElement("span");
                    spanPoint.id = "pointsRep"
                    spanPoint.innerText = points;
                    decompte.prepend(spanPoint);
                    casesScore.prepend(decompte);
                }
                for (let s of scores) {
                    let par = document.createElement("p");
                    //creation input numbers
                    let carNumb = document.createElement("input");
                    carNumb.type = "number";
                    carNumb.style = "background-color:white;max-width:25px";
                    carNumb.readOnly = true;
                    carNumb.value = parseInt(s);
                    par.append(carNumb);

                    //création select

                    let carSelect = document.createElement("select");
                    carSelect.className = "caracSelect";
                    for (let ab in CONFIG.DND5E.abilities) {
                        carSelect.innerHTML = carSelect.innerHTML + `<option value=${ab}>${CONFIG.DND5E.abilities[ab]}</option>`
                    }
                    carNumb.insertAdjacentElement("afterend", carSelect);
                    if (methodeRep) {
                        let plus = document.createElement("a");
                        plus.className = "caracPlus";
                        plus.innerHTML = '<i class="fas fa-plus-circle"></i>';
                        let moins = document.createElement("a");
                        moins.className = "caracMoins";
                        moins.innerHTML = '<i class="fas fa-minus-circle"></i>';

                        plus.addEventListener("click", decompte);
                        moins.addEventListener("click", decompte);
                        par.prepend(plus);
                        par.prepend(moins)

                    }

                    casesScore.append(par);
                    //si méthode répartion création compte de pointerEvents: 


                }

                function decompte(event) {
                    let pointsRep = document.getElementById('pointsRep');
                    if (event.currentTarget.className == "caracPlus") {
                        event.currentTarget.nextElementSibling.value++;
                        pointsRep.innerText = parseInt(pointsRep.innerText) - 1;
                    }
                    if (event.currentTarget.className == "caracMoins") {
                        event.currentTarget.nextElementSibling.nextElementSibling.value--;
                        pointsRep.innerText = parseInt(pointsRep.innerText) + 1;
                    }
                }
            }
        }
        // valide les carac
        let valCarac = html.find('a.validCarac')[0];
        var _this = this;
        valCarac.addEventListener("click", function() { _this.validCarac(html.find('select.caracSelect'))}, false);

    }

}