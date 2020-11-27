import {
    HDSRD
} from './getSRD.js';

export class creaPersoApp extends FormApplication {



    constructor(data, options = {}) {
        super(options);
        this.data = data;
        this.HDSRD = HDSRD;
        this.choix = {};
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['form', 'HDcrea'],
            popOut: true,
            closeOnSubmit: true,
            template: `modules/srd-heros-et-dragons/templates/appCrea.html`,
            id: 'creaPerso',
            title: 'création de personnage',
            width: 600,
            height: 900
        });
    }

    getData() {
        return {
            HDSRD: this.HDSRD,
            data: this.data,
        }

    }


    activateListeners(html) {
        let choix = this.choix;
        super.activateListeners(html);
        let target = game.actors.get(this.data.actor._id);

        //---------------pop-out pour valider le reset perso----------

        let initValid = new Dialog({
            title: "ré-initialiser ce personnage ?",
            content: "<p>ré-initialisé ce personnage remettra toutes ses caractéristiques à 0, et lui fera perdre tous ces item. </p><h2>ceci est irrémédiable</h2>",
            buttons: {

                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "re-initialiser",
                    callback: () => initPerso()
                },
                two: {
                    icon: '<i class="fas fa-uncheck"></i>',
                    label: "non merci",
                    callback: () => this.render(false)
                }

            }
        });
        //---------------fonction reset
        let reset = html.find('a.reset')[0];
        reset.addEventListener("click", () => {
            initValid.render(true)
        });

        function initPerso() {

            let abilities = duplicate(target.data.data.abilities);
            for (let ab in abilities) {
                abilities[ab].value = 8
            }

            let items = [];

            target.update({
                "data.abilities": abilities
            });
            target.update({
                "items": items
            });

        }

        //-------------modif race
        //----------------------------


        let raceEl = html.find('select.race')[0];
        raceEl.addEventListener("change", () => {
            changeRace()
        });


        function changeRace() {
            //let actualRace = target.data.items.type[];
            let racename = raceEl.value;
            //récupérer la race et donner l'item de race

            let packRace = game.packs.get("srd-heros-et-dragons.h-d-races");
            let packTrRaciaux = game.packs.get("srd-heros-et-dragons.h-d-traits-raciaux");
            let race = packRace.index.find(r => r.name == racename);
            packRace.getEntity(race._id).then(r =>
                target.createOwnedItem(r)
            );
            target.setFlag("srd-heros-et-dragons", "race", race.name);
            choix.race = {
                label: race.name
            };

            //récupérer et donner les traits raciaux
            let traitsRaciaux = [];
            let traitsRacOk = [];
            packTrRaciaux.getIndex().then(index => {
                traitsRaciaux = index;
                for (let trait of traitsRaciaux) {
                    console.log(trait);
                    let indexTrait = trait.name.indexOf(racename);
                    if (indexTrait !== -1) {
                        traitsRacOk.push(trait);
                        packTrRaciaux.getEntity(trait._id).then(trait => target.createOwnedItem(trait))
                    }
                    switch (racename) {
                        case "Elfe d'Aether":
                        case "Elfe de Fer":
                        case "Elfe des Sylves":
                            indexTrait = trait.name.indexOf("(Elfe)");
                            if (indexTrait !== -1) {
                                traitsRacOk.push(trait);
                                packTrRaciaux.getEntity(trait._id).then(trait => target.createOwnedItem(trait))
                            }
                            break;
                        case "Gnome des fées":
                        case "Gnome des lacs":
                        case "Gnome des roches":
                            indexTrait = trait.name.indexOf("(Gnome)");
                            if (indexTrait !== -1) {
                                traitsRacOk.push(trait);
                                packTrRaciaux.getEntity(trait._id).then(trait => target.createOwnedItem(trait))
                            }
                            break;
                        case "Halfelin Grand-sabot":
                        case "Halfelin Pied léger":
                            indexTrait = trait.name.indexOf("(Halfelin)");
                            if (indexTrait !== -1) {
                                traitsRacOk.push(trait);
                                packTrRaciaux.getEntity(trait._id).then(trait => target.createOwnedItem(trait))
                            }
                            break;
                        case "Nain des laves":
                        case "Nain des pierres":
                        case "Nain des tertres":
                            indexTrait = trait.name.indexOf("(Nain)");
                            if (indexTrait !== -1) {
                                traitsRacOk.push(trait);
                                packTrRaciaux.getEntity(trait._id).then(trait => target.createOwnedItem(trait))
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
                                packTrRaciaux.getEntity(trait._id).then(trait => target.createOwnedItem(trait))
                            }
                            break;
                    }

                }
                console.log(traitsRacOk);


            });


        }
        //-----------changement historique------------


        let histEl = html.find('select.historique')[0];
        histEl.addEventListener("change", () => {
            changeHistorique()
        });

        function changeHistorique() {
            let hist = histEl.value;
            //récupérer l'historique 

            let packHist = game.packs.get("srd-heros-et-dragons.h-d-historiques");
            let packAptHist = game.packs.get("srd-heros-et-dragons.h-d-aptitudes-historiques");
            let historique = packHist.index.find(h => h.name == hist);
            packHist.getEntity(historique._id).then(h =>
                target.createOwnedItem(h)
            );
            target.setFlag("srd-heros-et-dragons", "historique", historique.name);

            //récupérer et donner les aptitudes d'historique
            let aptHist = [];
            let aptHistOK = [];
            packAptHist.getIndex().then(index => {
                aptHist = index;
                for (let apt of aptHist) {
                    let indexApt = apt.name.indexOf(hist + ")");
                    if (indexApt !== -1) {
                        aptHistOK.push(apt);
                        packAptHist.getEntity(apt._id).then(apt => target.createOwnedItem(apt))
                    }
                }

            });



        }

        let classeEl = html.find('select.classe')[0];
        console.log(classeEl)
        classeEl.addEventListener("change", () => {
            changeClasse()
        });

        async function changeClasse() {
            let classeName = classeEl.value;
            let packClass = await game.packs.get("srd-heros-et-dragons.h-d-classes-et-specialisations");
            let cl = await packClass.index.find(c => c.name == classeName);
            const update = {
                    _id: "",
                    data: {
                        levels: ""
                    }
                };
                console.log(packClass);
            packClass.getEntity(cl._id).then(c =>{
                target.createOwnedItem(c);
                update._id=c._id;
                update.data.level=2;
               target.updateEmbeddedEntity("OwnedItem", update);
            });

            
            target.setFlag("srd-heros-et-dragons", "historique", classeName.name);
        }
    }
}