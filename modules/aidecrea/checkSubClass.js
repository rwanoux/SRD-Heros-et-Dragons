import {
    ClassFeaturesHD
} from "../classFeatures.js";
import {
    levelUp
} from "./levelup.js";

export async function checkSubClass(targetActor, targetClass) {
    //récupérer la classe et son niveau
    console.log({
        targetClass
    })



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
            if (targetClass.data.levels == 1 && targetClass.data.subclass === "") {
                newlvl=1;
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

                        }
                    },
                    two: {
                        label: "fermer"
                    }
                },
                default: "one",
                close: () => {}
            }).render(true);
        });


        async function giveSubClass(newsbcl) {
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
            
            console.log(newsbcl.slugify())

            let subConfig = CONFIG.DND5E.classFeatures[targetClass.name.toLowerCase()].subclasses[newsbcl.slugify()];
            let ids = [];

            console.log({
                subConfig
            })

            for (let [l, f] of Object.entries(subConfig.features || {})) {
                console.log(newlvl);
                l = parseInt(l);
                if (l== newlvl) {
                    ids=f;
                }
            }
           // const features = await Promise.all(ids.map(id => fromUuid(id)));

            console.log(
                ids
            )
            for (let id of ids){
              
                let mod=id.split(".")[1];
                let pckName=id.split(".")[1]+"."+id.split(".")[2];
                let idF=id.split(".")[3];
                console.log(pckName)

                let packfeat = game.packs.get(pckName);
                let feat = packfeat.index.find(f => f._id == idF);
                packfeat.getEntity(idF).then(f =>
                    targetActor.createOwnedItem(f)
                );
              

            }
        };
    }
    console.log({
        subClassChoix
    })
    return subClassChoix
}