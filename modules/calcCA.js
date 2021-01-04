export function calcCA(app, html, data) {
    let equipement = data.items.filter(eq => eq.type == "equipment");
    let armures = equipement.filter(arm => arm.data.armor.type == "light" ||arm.data.armor.type == "medium" ||arm.data.armor.type == "heavy" );
    let boucliers = equipement.filter(arm => arm.data.armor.type == "shield");
    let bab = equipement.filter(arm => arm.data.armor.type == "trinket");

    let equippedBab = bab.filter(arm => arm.data.equipped == true);
    let equippedBouclier = boucliers.filter(b => b.data.equipped == true);
    let equipedArmures = armures.filter(arm => arm.data.equipped == true);
    if (equipedArmures.length > 1) {
        ui.notifications.error("vous portez plusieurs armures");
        return
    };
    let equipedArm = equipedArmures[0];
    let dexMod = data.data.abilities.dex.mod;
    let conMod = data.data.abilities.con.mod;
    let sagMod=data.data.abilities.wis.mod;
    let newCA = 0;

    if (equipedArmures.length < 1) {
        if (data.items.find(i=>i.name=="Défense sans armure [Barbare]")&& equippedBouclier.length<1){
            newCA = dexMod + 10 + conMod;
        }
        else if(data.items.find(i=>i.name=="Défense sans Armure [Moine]")&& equippedBouclier.length<1){
            newCA = dexMod + 10 + sagMod;
        }
        else{
        newCA = dexMod + 10
        }
    } else {
        let armor = equipedArm.data.armor.value;
        let maxDex = equipedArm.data.armor.dex;
        if (equipedArm.data.strength > data.data.abilities.str.value) {
            ui.notifications.error("vous score de force ne vous permet pas de porter cette armure");
            return

        }

        if (equipedArm.data.armor.type != "heavy") {
            if ((equipedArm.data.armor.type == "medium") && (dexMod > maxDex)) {                newCA = maxDex + armor
            } else {
                newCA = dexMod + armor
            }
        } else {
            newCA = armor
        }
    };
    if (boucliers.length > 0) {
        if (equippedBouclier.length > 0) {
            if (equippedBouclier.length > 1) {
                ui.notifications.warn("vous avez plusieurs boucliers équippés");
            } else if (equippedBouclier.length = 1) {
                newCA += 2;
            };
        };
    }
    if (equippedBab.length>0){
        for (let b of equippedBab){
            if (b.data.armor.value>0){
                newCA+=b.data.armor.value
            }
        }
    }
    let target = game.actors.get(data.actor._id);
    target.update({
        "data.attributes.ac.value": newCA
    })

}