let pack = [];
/*
Hooks.on("preCreateChatMessage", async function() {
    let order = "HDcreate";
    var log = document.getElementsByClassName("message-content");
    let mess = JSON.stringify(ChatMessage[ChatMessage.length - 1]);
    //mess = log[log.length - 1].innerText.split(" ")
    console.log(mess);
    
        let zoum = ChatMessage.export();
        console.log("------------------zoum--------" + zoum);

        if (mess[0] == order) {
            var name = mess[1];
            console.log("creer-----------" + name)



        } else {
            console.log("message brut_________________" + mess);
        }
        
});
*/
Hooks.once("init", async function() {
    $.getJSON("/modules/module-french-srd/creatures.json", function(bestiaire) {
        //const bestiaire = fetch("/modules/module-french-srd./creature.json").then(resp => resp.json());
        console.log(bestiaire)

        for (let creature of bestiaire) {

            setProperty(creature, "type", "npc");
            setProperty(creature, "name", creature.header.title);


            //-----------------------------------------abilities---------------------------------------------

            setProperty(creature, "data.abilities.str.value", parseInt(creature.header.monster.str));
            setProperty(creature, "data.abilities.dex.value", parseInt(creature.header.monster.dex));
            setProperty(creature, "data.abilities.con.value", parseInt(creature.header.monster.con));
            setProperty(creature, "data.abilities.int.value", parseInt(creature.header.monster.int));
            setProperty(creature, "data.abilities.wis.value", parseInt(creature.header.monster.wis));
            setProperty(creature, "data.abilities.cha.value", parseInt(creature.header.monster.cha));



            //------------------------abil_mod------------------
            setProperty(creature, "data.abilities.str.mod", creature.header.monster.str.split("(")[1]);
            setProperty(creature, "data.abilities.dex.mod", creature.header.monster.dex.split("(")[1]);
            setProperty(creature, "data.abilities.con.mod", creature.header.monster.con.split("(")[1]);
            setProperty(creature, "data.abilities.int.mod", creature.header.monster.int.split("(")[1]);
            setProperty(creature, "data.abilities.wis.mod", creature.header.monster.wis.split("(")[1]);
            setProperty(creature, "data.abilities.cha.mod", creature.header.monster.cha.split("(")[1]);
            creature.data.abilities.str.mod = creature.data.abilities.str.mod.substring(0, creature.data.abilities.str.mod.length - 1);
            creature.data.abilities.dex.mod = creature.data.abilities.dex.mod.substring(0, creature.data.abilities.dex.mod.length - 1);
            creature.data.abilities.con.mod = creature.data.abilities.con.mod.substring(0, creature.data.abilities.con.mod.length - 1);
            creature.data.abilities.int.mod = creature.data.abilities.int.mod.substring(0, creature.data.abilities.int.mod.length - 1);
            creature.data.abilities.wis.mod = creature.data.abilities.wis.mod.substring(0, creature.data.abilities.wis.mod.length - 1);
            creature.data.abilities.cha.mod = creature.data.abilities.cha.mod.substring(0, creature.data.abilities.cha.mod.length - 1);


            //--------------------------details---------------
            setProperty(creature, "data.details.cr", creature.header.monster.challenge);
            setProperty(creature, "data.details.alignment", creature.header.monster.alignment);
            setProperty(creature, "data.details.xp.value", creature.header.monster.px);
            setProperty(creature, "data.details.biography.value", creature.content);
            setProperty(creature, "data.details.type", creature.truetype);
            setProperty(creature, "data.details.environment", creature.environment);
            setProperty(creature, "data.details.source", creature.header.taxonomy.source);


            //----------------------attributes--------------
            setProperty(creature, "data.attributes.ac.value", parseInt(creature.header.monster.ac));
            setProperty(creature, "data.attributes.hp.value", parseInt(creature.header.monster.hp));
            setProperty(creature, "data.attributes.hp.max", parseInt(creature.header.monster.hp));
            setProperty(creature, "data.attributes.hp.formula", creature.header.monster.hp.split("(")[1]);
            creature.data.attributes.hp.formula = creature.data.attributes.hp.formula.substring(0, creature.data.attributes.hp.formula.length - 1);
            setProperty(creature, "data.attributes.speed", creature.header.monster.speed);

            //-------------------actor image--------------
            /*resultat aléatoire.... mais ça rempli quelques images tout de même
            path = 'https://raw.githubusercontent.com/Nioux/AideDeJeu/master/Data/Monsters/' + creature.name.toLowerCase() + '.jpg';
             setProperty(creature, "img", path);
            */



            //------------------------------traits----------------------
            setProperty(creature, "data.traits.languages.custom", creature.header.monster.languages);
            setProperty(creature, "data.traits.senses", creature.header.monster.senses);

            setProperty(creature, "data.traits.size", 0);
            switch (creature.header.monster.size) {
                case 'TP':
                    creature.data.traits.size = 'tiny'
                    break;
                case 'P':
                    creature.data.traits.size = 'sm'
                    break;
                case 'M':
                    creature.data.traits.size = 'med'
                    break;
                case 'G':
                    creature.data.traits.size = 'lg'
                    break;
                case 'TG':
                    creature.data.traits.size = 'huge'
                    break;
                case 'Gig':
                    creature.data.traits.size = 'grg'
                    break;
            };

            if (creature.header.monster.hasOwnProperty('immunities')) {
                setProperty(creature, "data.traits.di.custom", creature.header.monster.immunities);
            } else {
                setProperty(creature, "data.traits.di.custom", "none");
            }
            if (creature.header.monster.hasOwnProperty('resistances')) {
                setProperty(creature, "data.traits.dr.custom", creature.header.monster.resistances);
            } else {
                setProperty(creature, "data.traits.dr.custom", "none");
            }

            if (creature.header.monster.hasOwnProperty('vulnerabilities')) {
                setProperty(creature, "data.traits.dv.custom", creature.header.monster.vulnerabilities);
            } else {
                setProperty(creature, "data.traits.dv.custom", "none");
            }
            if (creature.header.monster.hasOwnProperty('immunities_debilities')) {
                setProperty(creature, "data.traits.ci.custom", creature.header.monster.immunities_debilities);
            } else {
                setProperty(creature, "data.traits.ci.custom", "none");
            }

            //--------------------SKILLS
            let skillData = creature.header.monster.skills;

            skillData = creature.header.monster.skills.split(",");



            for (i = 0; i < skillData.length; i++) {
                let skill = skillData[i]
                let skillName = skill.slice(0, -3);
                console.log(skillName);
                switch (skillName) {
                    case "Acrobatie":
                    case " Acrobatie":
                        setProperty(creature, "data.skills.acr.value", "1");
                        break;
                    case "Arcanes":
                    case " Arcanes":
                        setProperty(creature, "data.skills.arc.value", "1");
                        break;
                    case "Athl\u00e9tisme":
                    case " Athl\u00e9tisme":
                        setProperty(creature, "data.skills.ath.value", "1");
                        break;
                    case "Discr\u00e9tion":
                    case " Discr\u00e9tion":
                        setProperty(creature, "data.skills.ste.value", "1");
                        break;
                    case "Escamotage":
                    case " Escamotage":
                        setProperty(creature, "data.skills.slt.value", "1");
                        break;
                    case "Dressage":
                    case " Dressage":
                        setProperty(creature, "data.skills.acr.value", "1");
                        break;
                    case "Histoire":
                    case " Histoire":
                        setProperty(creature, "data.skills.his.value", "1");
                        break;
                    case "Intimidation":
                    case " Intimidation":
                        setProperty(creature, "data.skills.itm.value", "1");
                        break;
                    case "Investigation":
                    case " Investigation":
                        setProperty(creature, "data.skills.acr.value", "1");
                        break;
                    case "M\u00e9decine":
                    case " M\u00e9decine":
                        setProperty(creature, "data.skills.med.value", "1");
                        break;
                    case "Nature":
                    case " Nature":
                        setProperty(creature, "data.skills.nat.value", "1");
                        break;
                    case "Perception":
                    case " Perception":
                        setProperty(creature, "data.skills.prc.value", "1");
                        break;
                    case "Perspicacit\u00e9":
                    case " Perspicacit\u00e9":
                        setProperty(creature, "data.skills.ins.value", "1");
                        break;
                    case "Persuasion":
                    case " Persuasion":
                        setProperty(creature, "data.skills.per.value", "1");
                        break;
                    case "Religion":
                    case " Religion":
                        setProperty(creature, "data.skills.rel.value", "1");
                        break;
                    case "Repr\u00e9sentation":
                    case " Repr\u00e9sentation":
                        setProperty(creature, "data.skills.prf.value", "1");
                        break;
                    case "Supercherie":
                    case " Supercherie":
                        setProperty(creature, "data.skills.dec.value", "1");
                        break;
                    case "Survie":
                    case " Survie":
                        setProperty(creature, "data.skills.sur.value", "1");
                        break;


                }

            };

            console.log('----------------------' + creature.name + '------------------------------------------');
            console.log(creature);



            pack.push(creature);
        };






    });

});




Hooks.once("ready", async function() {

    /* for (let i = 0; i < pack.length; i++) {
         let actor = Actor.create(pack[i])
     };
    
     
    */
    const result = pack.filter(obj => {
        return obj.name === "Succube/Incube"
    });
    console.log(result);
    console.log(`--------Heros et Dragons SRD Ready`);
    console.log(`
       .......................................

       .....................:*=#=+-...........
       
       ..................-=##=-...............
       
       ................-=####*:*=#######*:....
       
       ...........-:..*#############*:........
       
       ..........=#####################=*-....
       
       .........*##########################=-.
       
       ........-########################*-::+-
       
       ...-...+###########=-..+##########=-...
       
       ..+#:+=#######:=##:.....-###########=..
       
       .-##########=-:##+......+########+.*#+.
       
       .+#####=+....-=#=......*########=....:.
       
       .:#=+-..-*##====:....+##########*......
       
       ..-..-++:-........-=###########=.......
       
       ...............-=#############=........
       
       .............-=#############*..........
       
       ............+##########=+-.............
       
       ............######=+-..................
       
       ............=##=:......................
       
       .............+.........................
       `);

    //--------------------------------change logo
    var logo = document.getElementById("logo");
    logo.setAttribute("src", "modules/module-french-srd/img/logoHD.png");
});