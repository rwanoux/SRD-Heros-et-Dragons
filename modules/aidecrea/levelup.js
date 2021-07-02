import {
  checkSubClass
} from './checkSubClass.js'

export  function levelUp(html, data) {

  //---recurpérer l'actor cible
  let targetActor = game.actors.getName(data.actor.name);

  //---création de l'élément button "monter un niveau"
  let ClassList = html.find("div.item-detail.player-class");
  let buttonUp = document.createElement("a");
  buttonUp.innerText = "monter un niveau";
  buttonUp.classList.add("item-control", "classUp");
  //------coller le bouton dans la ligne des items class
  for (let Class of ClassList) {
    let b = buttonUp.cloneNode(true);
    Class.parentNode.insertBefore(b, Class);

    //--récupérer nom de class et item class

    let clName = b.previousElementSibling.lastElementChild.innerText.replace(/\s/g, "");

    let targetClass = targetActor.data.items.find(cl => cl.name == clName);
    let newlvl = targetClass.data.data.levels + 1;


    //------dialog de valid

    let levelUpDialog = new Dialog({
      title: "monté de niveau",
      content: `voulez-vous monter ${targetClass.name} niveau ${newlvl}`,
      buttons: {
        one: {
          label: "monter de niveau",
          callback: (html) => {
            // preClassUp()
            classUp(targetActor, targetClass)

          }
        },
        two: {
          label: "fermer",
        }
      },
      default: "one",
      close: () => {}
    });

    //ajout du listener click
    b.addEventListener("click", (event) => {
      event.preventDefault();
      levelUpDialog.render(true);

    });
  };

  async function ApplyClassUp(targetActor, targetClass) {
    const update =  [{
      _id: targetClass.id,
      data: {
        levels: targetClass.data.data.levels + 1,

      },
    }];
    await targetActor.updateEmbeddedDocuments("Item", update);
    ui.notifications.info(targetActor.name + " passe au niveau " + update[0].data.levels + "  dans sa classe " + targetClass.name);
  }

  
  //-----update de l'item classe
  async function classUp(targetActor, targetClass) {
    //vérif sous classe ?
    let verif=await checkSubClass(targetActor, targetClass);
    if (verif==false) {
      ApplyClassUp(targetActor, targetClass)
    }else stop;

  }
}