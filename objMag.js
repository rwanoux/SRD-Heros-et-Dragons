Hooks.once("ready", async function() {



    /* var packObj = [];
    var objType = [];

    const pack = game.packs.get("world.handd-objets-magiques");

    let prepareObjData = function() {


        $.getJSON("/modules/srd-heros-et-dragons/liste-objets-magiques.json", function(liste) {

            for (let obj of liste) {

                //nom
                console.log(obj)
                setProperty(obj, "name", obj.title);
                setProperty(obj, "_id", obj.title);

                //type
                if (objType.indexOf(obj.type) == -1) {
                    objType.push(obj.type)
                };

                switch (obj.type) {
                    case "Objet merveilleux":
                        obj.type = "loot";
                        break;

                    case "Anneau":
                        obj.type = "loot";
                        break;
                    case "Arme":
                        obj.type = "weapon";
                        break;
                    case "Armure":
                        obj.type = "equipement";
                        break;
                    case "Baguette":
                        obj.type = "consumable";
                        break;
                    case "Bâton":
                        obj.type = "loot";
                        break;
                    case "Potion":
                        obj.type = "consumable";
                        break;
                    case "Parchemin":
                        obj.type = "consumable";
                        break;
                    case "Sceptre":
                        obj.type = "loot";
                        break;
                };
                // description
                setProperty(obj, "data", {});
                setProperty(obj.data, "description", {});
                setProperty(obj.data.description, "value");
                obj.data.description.value = obj.content;

                packObj.push(obj)

            };

            for (let i of packObj) {
                const items = Item.create(i, { temporary: true });
                pack.importEntity(items);
                console.log(`Imported Item ${i.name} into Compendium pack ${pack.collection}`);

            };








        });
    }
})
*/
})