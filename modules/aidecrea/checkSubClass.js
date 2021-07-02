import {
    ClassFeaturesHD
} from "../classFeatures.js";
export async function checkSubClass(targetActor, targetClass) {
    //récupérer la classe et son niveau
    console.log({
        targetClass
    })



    let subClassChoix = false;

    let clName = targetClass.name.toLowerCase();
    let scList = ClassFeaturesHD[clName].subclasses;
    let newlvl = targetClass.data.data.levels + 1;
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
            if (newlvl == 3 && targetClass.data.data.subclass === "") {
                subClassChoix = true
            };
            break;
        case "druide":
        case "magicien":
            if (newlvl == 2 && targetClass.data.data.subclass === "") {
                subClassChoix = true
            };
            break;
        case "clerc":
        case "ensorceleur":
            if (targetClass.data.data.levels == 1 && targetClass.data.data.subclass === "") {
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
                newsbcl
            })
            const update = [{
                _id: targetClass.id,
                name: targetClass.name,
                data: {
                    subclass: newsbcl
                }
            }];

            await targetActor.updateEmbeddedDocuments("Item", update);


            //-------donner l'item feat de sous-classe
            let packClass = game.packs.get("srd-heros-et-dragons.h-d-classes-et-specialisations");
            let sbcItem = "[" + targetClass.name.toLowerCase().replace("'", "") + "] " + newsbcl;
            let subcl = packClass.index.find(sc => sc.name.slugify() === sbcItem.slugify());
            let subclDocument = await  packClass.getDocument(subcl._id);
            await  targetActor.createEmbeddedDocuments("Item", [subclDocument.data]);
            //--------mettre le flag de sous-classe
            await targetActor.setFlag("srd-heros-et-dragons", "subclasse.label", subcl.name);

            /*
            //---------récupérer la config de sous-classe
            let subConfig = ClassFeaturesHD[targetClass.name.toLowerCase()].subclasses[newsbcl.slugify()];
            let ids = [];

            for (let [l, f] of Object.entries(subConfig.features || {})) {
                l = parseInt(l);
                if (l== newlvl) {
                    ids=f;
                }
            }

           
            for (let id of ids){
              
                let mod=id.split(".")[1];
                let pckName=id.split(".")[1]+"."+id.split(".")[2];
                let idF=id.split(".")[3];

                let packfeat = game.packs.get(pckName);
                let featDocument = await packfeat.getDocument(idF)
                await targetActor.createEmbeddedDocuments('Item', [featDocument.data])
            }*/
        };
    }

    return subClassChoix
}