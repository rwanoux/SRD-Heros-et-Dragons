import {
    ClassFeaturesHD
} from "../classFeatures.js";
import {
    levelUp
} from "./levelup.js";

export async function checkSubClass(html, data, targetClass) {
        //récupérer la classe et son niveau
        console.log({
            targetClass
        })
        let targetActor = game.actors.get(data.actor._id);


        let subClassChoix = false;

        let clName = targetClass.name.toLowerCase();
        let scList = ClassFeaturesHD[clName].subclasses;
        let newlvl = targetClass.data.levels + 1;
        //enclencher le choix de sous-classe selon classe et niveau

        switch (clName) {
            case "barbare":
            case "barde":
            case "guerrier":
            case "moine":
            case "paladin":
            case "rôdeur":
            case "roublard":
            case "sorcier":
                if (newlvl == 3 && targetClass.data.subclass === "") {
                    subClassChoix = true
                };
                break;
            case "druide":
            case "magicien":
                if (newlvl == 2 && targetClass.data.subclass === "") {
                    subClassChoix = true
                };
                break;
            case "clerc":
            case "ensorceleur":
                if (newlvl == 1 && targetClass.data.subclass === "") {
                    subClassChoix = true
                };
                break;

        }

        //--------si choix de sous-classe open dialog
        if (subClassChoix === true) {
            subClassChoix = false;
            //----config du dialog
            let sbclCfg = {
                "targetActor": targetActor,
                "clName": clName,
                "scList": scList,
            };
            const sbclTempl = 'modules/srd-heros-et-dragons/templates/choixSubClass.html';

            renderTemplate(sbclTempl, sbclCfg).then(c => {
                    //----rendu du dialog
                    let subclassDialog = new Dialog({
                            title: "monté de niveau",
                            content: c,
                            buttons: {
                                one: {
                                    label: "valider la sous-classe",
                                    callback: c => {
                                        giveSubClass(c[0].querySelector("select").value);
                                        levelUp(html, data)
                                    }
                                },
                                    two: {
                                        label: "fermer"
                                    }
                                },
                                default: "one",
                                close: () => {}
                            }).render(true);
                    }); async function giveSubClass(newsbcl) {
                    //-----udater la classe avec la sous classe 
                    console.log({
                        targetClass
                    })
                    const update = {
                        _id: targetClass._id,
                        name: targetClass.name,
                        data: {
                            subclass: newsbcl
                        }
                    };

                    await targetActor.updateEmbeddedEntity("OwnedItem", update);


                    //-------donner l'item feat de sous-classe
                    let packClass = game.packs.get("srd-heros-et-dragons.h-d-classes-et-specialisations");
                    let sbcItem = "[" + targetClass.name.toLowerCase().replace("'", "") + "] " + newsbcl.toLowerCase();
                    let subcl = packClass.index.find(sc => sc.name.toLowerCase() === sbcItem);
                    await packClass.getEntity(subcl._id).then(sbc => {
                        targetActor.createOwnedItem(sbc);
                    });
                    //--------mettre le flag de sous-classe
                    await targetActor.setFlag("srd-heros-et-dragons", "subclasse.label", subcl.name);

                    //---------récupérer la config de sous-classe
                    let subConfig = CONFIG.DND5E.classFeatures[targetClass.name.toLowerCase()].subclasses;
                    let newFeats = [];
                    for (let [sub, subData] of Object.entries(subConfig)) {

                        if (subData.label == newsbcl) {
                            console.log(subData.features);
                        }
                    }
                };
            }
            return subClassChoix
        }