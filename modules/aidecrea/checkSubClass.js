export async function checkSubClass(html, data) {/*
        //récupérer la classe et son niveau
        let targetActor=game.actors.get(data.actor._id);
        let targetClass = targetActor.items.find(i => i.name === clName);
        let newlvl = targetClass.data.data.levels + 1;
        let subClass = targetClass.data.data.subclass;

        //--modèle d'update
        const update = {
            _id: targetClass._id,
            data: {
                levels: newlvl,

            },
        };

        let cl = targetClass.name.toLowerCase();
        let scList = ClassFeaturesHD[cl].subclasses;

        console.log(targetClass.name, newlvl, subClass)
        //enclencher le choix de sous-classe selon classe et niveau
        let subClassChoix = false;
        switch (targetClass.name) {
            case "Barbare":
            case "Barde":
            case "Guerrier":
            case "Moine":
            case "Paladin":
            case "Rôdeur":
            case "Roublard":
            case "Sorcier":
                if (newlvl == 3) {
                    subClassChoix = true
                };
                break;
            case "Druide":
            case "Magicien":
                if (newlvl == 2) {
                    subClassChoix = true
                };
                break;
            case "Clerc":
            case "Ensorceleur":
                if (newlvl == 1) {
                    subClassChoix = true
                };
                break;

        }*/
    }