import {
    ClassFeaturesHD
} from "../classFeatures.js";

export async function checkSubClass(html, data) {

    //récupérer la classe et son niveau
    let targetActor = game.actors.get(data.actor._id);
    let classes = targetActor.items.filter(cl => cl.type === "class");

    let subClass = [];
    for (let cl of classes) {
        subClass.push(cl.data.data.subclass)
    }
    console.log(targetActor);
    console.log(classes);
    console.log(subClass)

    let subClassChoix = false;

    for (let classe of classes) {

        let clName = classe.name.toLowerCase();
        let scList = ClassFeaturesHD[clName].subclasses;

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
                if (classe.data.data.levels == 3) {
                    subClassChoix = true
                };
                break;
            case "druide":
            case "magicien":
                if (classe.data.data.levels == 2) {
                    subClassChoix = true
                };
                break;
            case "clerc":
            case "ensorceleur":
                if (classe.data.data.levels == 1) {
                    subClassChoix = true
                };
                break;

        }

        //--------si choix de sous-classe open dialog
        if (subClassChoix === true && classe.data.data.subclass==="") {
            //----config du dialog
            let sbclCfg = {
                "targetActor": targetActor,
                "clName": clName,
                "scList": scList,
            };
            const sbclTempl = 'modules/srd-heros-et-dragons/templates/choixSubClass.html';
            //----rendu du dialog
            const cont=await renderTemplate(sbclTempl, sbclCfg)

                let subclassDialog = new Dialog({
                    title: "monté de niveau",
                    content: cont,
                    buttons: {
                        one: {
                            label: "monter de niveau",
                            callback: cont => giveSubClass(cont[0].querySelector("select").value)
                        },
                        two: {
                            label: "fermer",
                        }
                    },
                    default: "one",
                    close: () => {}
                }).render(true);
                //-----udater la classe avec la sous classe
                function giveSubClass(newsbcl) {
                    const update = {
                        _id: classe._id,
                        data: {
                          subclass: newsbcl,
                  
                        },
                      };
                      targetActor.updateEmbeddedEntity("OwnedItem", update);


                }
            

        }
    }
}