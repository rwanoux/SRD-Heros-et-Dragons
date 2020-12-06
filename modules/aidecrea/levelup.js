

export async function levelUp(html, data) {
 

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
    
    let clName = b.previousElementSibling.lastElementChild.innerText.replace(/\s/g,""); 
    console.log({clName});

    let targetClass=data.actor.items.find(cl=>cl.name==clName);
    let newlvl=targetClass.data.levels+1;
   

//------dialog de valid
    let levelUpDialog = new Dialog({
      title: "monté de niveau",
      content: "voulez-vous monter " + targetClass.name + " niveau " + newlvl,
      buttons: {
        one: {
          label: "monter de niveau",
          callback: (html) => classUp(targetActor, targetClass)
        },
        two: {
          label: "fermer",
        }
      },
      default: "one",
      close: () => { }
    });
   

    //ajout du listener click
    b.addEventListener("click", (event) => {
      event.preventDefault();
      levelUpDialog.render(true);
    
    });
  };

 

//-----update de l'item classe
  function classUp(targetActor, targetClass) {
    const update = {
      _id: targetClass._id,
      data: {
        levels: targetClass.data.levels+1,

      },
    };
    targetActor.updateEmbeddedEntity("OwnedItem", update);
    ui.notifications.info(targetActor.name + " passe au niveau "+update.data.levels+"  dans sa classe " + targetClass.name);
  }
}