export function calcCA(app, html, data) {
    console.log("--------calcul ca");
    console.log(data);
    let equipement = data.items.filter(eq => eq.type == "equipment");
    let armures = equipement.filter(arm => arm.data.armor.type != "shield");
    let boucliers = equipement.filter(arm => arm.data.armor.type == "shield")

    let equipedArmures = armures.filter(arm => arm.data.equipped == true);
    if (equipedArmures.length > 1) {
        ui.notifications.error("vous portez plusieurs armures");
        return
    };
    let equipedArm = equipedArmures[0];
    console.log(equipedArm);
    let dexMod = data.data.abilities.dex.mod;

    let newCA = 0;

    if (equipedArmures.length < 1) {
        newCA = dexMod + 10
    } else {
        let armor = equipedArm.data.armor.value;
        let maxDex = equipedArm.data.armor.dex;
        if (equipedArm.data.strength > data.data.abilities.str.value) {
            ui.notifications.error("vous score de force ne vous permet pas de porter cette armure");
            return

        }

        if (equipedArm.data.armor.type != "heavy") {
            if (dexMod > maxDex) {
                newCA = maxDex + armor
            } else {
                newCA = dexMod + armor
            }
        } else {
            newCA = armor
        }
    };
    console.log(newCA)
    if (boucliers.length > 0) {

        let equippedBouclier = boucliers.filter(b => b.data.equipped == true);
        console.log(equippedBouclier)
        if (equippedBouclier.length > 0) {
            if (equippedBouclier.length > 1) {
                ui.notifications.warn("vous avez plusieurs boucliers équippés");
            } else if (equippedBouclier.length = 1) {
                newCA += 2;
            };
        };
    }
    console.log(newCA)
    let target = game.actors.get(data.actor._id);
    console.log("--------")
    target.update({
        "data.attributes.ac.value": newCA
    })
    console.log({
        target
    })

}