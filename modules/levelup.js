import { ClassFeaturesHD } from "./classFeatures.js";

export async function levelUp(html, data) {
  //---recurpérer l'actor cible
  let targetActor = game.actors.getName(data.actor.name);

  //---création de l'élément button "monter un niveau"
  let subClassList = html.find("div.item-detail.player-class");

  let buttonUp = document.createElement("a");
  buttonUp.innerText = "monter un niveau";
  buttonUp.classList.add("item-control", "classUp");

  //------coller le bouton dans la ligne des items class
  for (let subClass of subClassList) {
    let b = buttonUp.cloneNode(true);
    subClass.parentNode.insertBefore(b, subClass);
    let clName = b.previousElementSibling.lastElementChild.innerText;
    //ajout du listener click
    b.addEventListener("click", () => { classUpCheck(targetActor, clName) });
  };


  async function classUpCheck(targetActor, clName) {
    //récupérer la classe et son niveau
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

console.log(targetClass.name,newlvl,subClass)
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
        if ( newlvl == 3) {
          subClassChoix= true
        };
        break;
      case "Druide":
      case "Magicien":
        if ( newlvl == 2) {
          subClassChoix = true
        };
        break;
      case "Clerc":
      case "Ensorceleur":
        if (newlvl==1) {
          subClassChoix = true
        };
        break;

    }

    async function giveSubClass() {

      console.log("-------------choix sous-classe------------")

      //-----le dialog de choix de sous classe
      const choixSubClassPath = 'modules/srd-heros-et-dragons/templates/choixSubClass.html';
      const choixSubClassContent = await renderTemplate(choixSubClassPath, { actor: targetActor, clName: cl, scList: scList });
      let subClassDialog = new Dialog({
        title: "choisissez une spécialisation de Classe ",
        content: choixSubClassContent,
        buttons: {
          one: {
            label: "validez",
            callback: (html) => {

              //---retrouve la sous classe séléctionnée et l'id de son item
              let selectedSubClass = html.find("select.subClassSelect")[0].value;
              let itemId = "";
              console.log(selectedSubClass);
              for (let sc in scList) {
                console.log(ClassFeaturesHD[cl].subclasses[sc].label);
                if (ClassFeaturesHD[cl].subclasses[sc].label == selectedSubClass) {
                  itemId = ClassFeaturesHD[cl].subclasses[sc].itemId.value
                }
              };
              //donne l'item sous-classe depuis le compendium
              let pack = game.packs.get("srd-heros-et-dragons.h-d-classes-et-spécialisations");
              pack.getEntity(itemId).then(s => targetActor.createOwnedItem(s));
              //update l'item de classe
              update.data.subclass = selectedSubClass;
              targetActor.updateEmbeddedEntity("OwnedItem", update);


            }
          },
          two: {
            label: "fermer",
          }
        },
        default: "one",
        close: () => {
        }
      });
      subClassDialog.render(true);
    }



    // si sous classe à choisir
    if (subClassChoix===true) {
      update.data.subclass = "";
      giveSubClass()
    }
    //----------sinon
    else {
      let levelUpDialog = new Dialog({
        title: "monté de niveau",
        content: "voulez-vous monter " + targetClass.name + " niveau " + newlvl,
        buttons: {
          one: {
            label: "monter de niveau",
            callback: (html) => classUp(targetActor, targetClass, update, newlvl)
          },
          two: {
            label: "fermer",
          }
        },
        default: "one",
        close: () => { }
      });
      levelUpDialog.render(true);
    }
  }
}

function classUp(targetActor, targetClass, update, newlvl) {
  targetActor.updateEmbeddedEntity("OwnedItem", update);
  ui.notifications.info(targetActor.name + " passe niveau " + newlvl + " dans sa classe " + targetClass.name);
}





