export var itemsPack = [];
export const prepareItemsData = async function() {

    $.getJSON("/modules/srd-heros-et-dragons/liste-objets-magiques.json", function(liste) {
        for (let objMag of liste) {


            itemsPack.push(objMag);
        }
    })
}