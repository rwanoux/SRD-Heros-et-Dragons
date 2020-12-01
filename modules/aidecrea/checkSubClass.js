import {
    ClassFeaturesHD
} from "../classFeatures.js";

export async function checkSubClass(html, data) {

    //récupérer la classe et son niveau
    let targetActor = game.actors.get(data.actor._id);
    let classes = targetActor.items.filter(cl => cl.type === "class");

    
    let subClassChoix = false;

    for (let classe of classes) {
        let subClass = classe.data.data.subclass;
        
            
       
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
                if (classe.data.data.levels == 3  && classe.data.data.subclass === "") {
                    subClassChoix = true
                };
                break;
            case "druide":
            case "magicien":
                if (classe.data.data.levels == 2  && classe.data.data.subclass === "") {
                    subClassChoix = true
                };
                break;
            case "clerc":
            case "ensorceleur":
                if (classe.data.data.levels == 1  && classe.data.data.subclass === "") {
                    subClassChoix = true
                };
                break;

        }

        //--------si choix de sous-classe open dialog
        if (subClassChoix === true) {
            //----config du dialog
            let sbclCfg = {
                "targetActor": targetActor,
                "clName": clName,
                "scList": scList,
            };
            const sbclTempl = 'modules/srd-heros-et-dragons/templates/choixSubClass.html';
            //----rendu du dialog
            const cont = await renderTemplate(sbclTempl, sbclCfg)

            let subclassDialog = new Dialog({
                title: "monté de niveau",
                content: cont,
                buttons: {
                    one: {
                        label: "valider la sous-classe",
                        callback: cont => giveSubClass(cont[0].querySelector("select").value)
                    },
                    two: {
                        label: "fermer",
                    }
                },
                default: "one",
                close: () => {}
            }).render(true);

            async function giveSubClass(newsbcl) {
                //-----udater la classe avec la sous classe 
                const update = {
                    _id: classe._id,
                    data: {
                        subclass: newsbcl,
                        levels: classe.data.data.levels

                    },

                };
                targetActor.updateEmbeddedEntity("OwnedItem", update).then(cl => {
                    subClassChoix = false;
                    
                    //-------donner l'item feat de sous-classe
                    let packClass = game.packs.get("srd-heros-et-dragons.h-d-classes-et-specialisations");
                    let sbcItem = "[" + classe.name.toLowerCase().replace("'","") + "] " + newsbcl.toLowerCase();
                    console.log({sbcItem})
                    let subcl = packClass.index.find(sc => sc.name.toLowerCase() === sbcItem);
                    console.log(subcl);
                    packClass.getEntity(subcl._id).then(sbc => {
                        targetActor.createOwnedItem(sbc)
                    });
                    targetActor.setFlag("srd-heros-et-dragons", "subclasse.label", subcl.name);
                });
            };
        }


    }
}