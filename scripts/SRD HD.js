let pack = [];

Hooks.once("init", async function() {

    $.getJSON("/modules/srd-heros-et-dragons/creatures.json", function(bestiaire) {
        console.log(bestiaire);
        for (let creature of bestiaire) {


            setProperty(creature, "type", "npc");
            setProperty(creature, "name", creature.header.title);
            setProperty(creature, "data.attributes.init", {});
            setProperty(creature, "data.attributes.init.mod", "0");

            console.log('-------initialize---------------' + creature.name + '------------------------------------------');
            console.log(creature);
            //----------------------init skills-----------------------------------


            setProperty(creature, "data.skills.acr.value", 0);
            setProperty(creature, "data.skills.ani.value", 0);
            setProperty(creature, "data.skills.arc.value", 0);
            setProperty(creature, "data.skills.ath.value", 0);
            setProperty(creature, "data.skills.dec.value", 0);
            setProperty(creature, "data.skills.his.value", 0);
            setProperty(creature, "data.skills.ins.value", 0);
            setProperty(creature, "data.skills.itm.value", 0);
            setProperty(creature, "data.skills.inv.value", 0);
            setProperty(creature, "data.skills.med.value", 0);
            setProperty(creature, "data.skills.nat.value", 0);
            setProperty(creature, "data.skills.prc.value", 0);
            setProperty(creature, "data.skills.prf.value", 0);
            setProperty(creature, "data.skills.per.value", 0);
            setProperty(creature, "data.skills.rel.value", 0);
            setProperty(creature, "data.skills.slt.value", 0);
            setProperty(creature, "data.skills.ste.value", 0);
            setProperty(creature, "data.skills.sur.value", 0);

            setProperty(creature, "data.skills.acr.mod", 0);
            setProperty(creature, "data.skills.ani.mod", 0);
            setProperty(creature, "data.skills.arc.mod", 0);
            setProperty(creature, "data.skills.ath.mod", 0);
            setProperty(creature, "data.skills.dec.mod", 0);
            setProperty(creature, "data.skills.his.mod", 0);
            setProperty(creature, "data.skills.ins.mod", 0);
            setProperty(creature, "data.skills.itm.mod", 0);
            setProperty(creature, "data.skills.inv.mod", 0);
            setProperty(creature, "data.skills.med.mod", 0);
            setProperty(creature, "data.skills.nat.mod", 0);
            setProperty(creature, "data.skills.prc.mod", 0);
            setProperty(creature, "data.skills.prf.mod", 0);
            setProperty(creature, "data.skills.per.mod", 0);
            setProperty(creature, "data.skills.rel.mod", 0);
            setProperty(creature, "data.skills.slt.mod", 0);
            setProperty(creature, "data.skills.ste.mod", 0);
            setProperty(creature, "data.skills.sur.mod", 0);

            setProperty(creature, "data.skills.acr.label", " ");
            setProperty(creature, "data.skills.ani.label", " ");
            setProperty(creature, "data.skills.arc.label", " ");
            setProperty(creature, "data.skills.ath.label", " ");
            setProperty(creature, "data.skills.dec.label", " ");
            setProperty(creature, "data.skills.his.label", " ");
            setProperty(creature, "data.skills.ins.label", " ");
            setProperty(creature, "data.skills.itm.label", " ");
            setProperty(creature, "data.skills.inv.label", " ");
            setProperty(creature, "data.skills.med.label", " ");
            setProperty(creature, "data.skills.nat.label", " ");
            setProperty(creature, "data.skills.prc.label", " ");
            setProperty(creature, "data.skills.prf.label", " ");
            setProperty(creature, "data.skills.per.label", " ");
            setProperty(creature, "data.skills.rel.label", " ");
            setProperty(creature, "data.skills.slt.label", " ");
            setProperty(creature, "data.skills.ste.label", " ");
            setProperty(creature, "data.skills.sur.label", " ");

            setProperty(creature, "data.skills.acr.ability", "dex");
            setProperty(creature, "data.skills.ani.ability", "wis");
            setProperty(creature, "data.skills.arc.ability", "int");
            setProperty(creature, "data.skills.ath.ability", "str");
            setProperty(creature, "data.skills.dec.ability", "cha");
            setProperty(creature, "data.skills.his.ability", "int");
            setProperty(creature, "data.skills.ins.ability", "wis");
            setProperty(creature, "data.skills.itm.ability", "cha");
            setProperty(creature, "data.skills.inv.ability", "int");
            setProperty(creature, "data.skills.med.ability", "wis");
            setProperty(creature, "data.skills.nat.ability", "int");
            setProperty(creature, "data.skills.prc.ability", "wis");
            setProperty(creature, "data.skills.prf.ability", "cha");
            setProperty(creature, "data.skills.per.ability", "cha");
            setProperty(creature, "data.skills.rel.ability", "int");
            setProperty(creature, "data.skills.slt.ability", "dex");
            setProperty(creature, "data.skills.ste.ability", "dex");
            setProperty(creature, "data.skills.sur.ability", "wis");


            //-----------------------------------------abilities---------------------------------------------

            setProperty(creature, "data.abilities.str.value", parseInt(creature.header.monster.str));
            setProperty(creature, "data.abilities.dex.value", parseInt(creature.header.monster.dex));
            setProperty(creature, "data.abilities.con.value", parseInt(creature.header.monster.con));
            setProperty(creature, "data.abilities.int.value", parseInt(creature.header.monster.int));
            setProperty(creature, "data.abilities.wis.value", parseInt(creature.header.monster.wis));
            setProperty(creature, "data.abilities.cha.value", parseInt(creature.header.monster.cha));

            setProperty(creature, "data.abilities.str.label", "strength");
            setProperty(creature, "data.abilities.dex.label", "dexterity");
            setProperty(creature, "data.abilities.con.label", "constitution");
            setProperty(creature, "data.abilities.int.label", "inteligence");
            setProperty(creature, "data.abilities.wis.label", "wisdom");
            setProperty(creature, "data.abilities.cha.label", "charisme");


            //-----------abil_prof-----------------------
            setProperty(creature, "data.abilities.str.proficient", 0);
            setProperty(creature, "data.abilities.dex.proficient", 0);
            setProperty(creature, "data.abilities.con.proficient", 0);
            setProperty(creature, "data.abilities.int.proficient", 0);
            setProperty(creature, "data.abilities.wis.proficient", 0);
            setProperty(creature, "data.abilities.cha.proficient", 0);

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
            setProperty(creature, "data.attributes.speed.value", creature.header.monster.speed);

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
                setProperty(creature, "data.traits.di.custom", creature.header.monster.immunities + ";  ");
            }

            if (creature.header.monster.hasOwnProperty('resistances')) {
                setProperty(creature, "data.traits.dr.custom", creature.header.monster.resistances + ";  ");
            }


            if (creature.header.monster.hasOwnProperty('vulnerabilities')) {
                setProperty(creature, "data.traits.dv.custom", creature.header.monster.vulnerabilities + ";  ");
            }
            if (creature.header.monster.hasOwnProperty('immunities_debilities')) {
                setProperty(creature, "data.traits.ci.custom", creature.header.monster.immunities_debilities + ";  ");
            }


            //--------------------abilities saves profecience-----------------------

            let saveData = creature.header.monster.saves.split(",");
            for (let save of saveData) {
                save = save.substring(0, 4);
                console.log("maitrise de sauvegarde = " + save)
                switch (save) {
                    case "For ":
                    case " For":
                        creature.data.abilities.str.proficient = 1;
                        break;
                    case "Dex ":
                    case " Dex":
                        creature.data.abilities.dex.proficient = 1;
                        break;
                    case "Con ":
                    case " Con":
                        creature.data.abilities.con.proficient = 1;
                        break;
                    case "Int ":
                    case " Int":
                        creature.data.abilities.int.proficient = 1;
                        break;
                    case "Sag ":
                    case " Sag":
                        creature.data.abilities.wis.proficient = 1;
                        break;
                    case "Cha ":
                    case " Cha":
                        creature.data.abilities.cha.proficient = 1;
                        break;


                }
            }

            //--------------------SKILLS
            let skillData = creature.header.monster.skills.split(",");
            for (skill of skillData) {
                let skillName = skill.slice(0, -3);
                let skillMod = parseInt(skill.slice(-2).replace('+', ''));
                let skillAbil = 0;
                let prof = Math.floor((Math.max(creature.data.details.cr, 1) + 7) / 4);
                console.log("- maitrise en - " + skillName + "----" + skillMod);
                switch (skillName) {
                    case "Acrobatie":
                    case " Acrobatie":
                        skillAbil = parseInt(creature.data.abilities.dex.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.acr.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.acr.value = 2; }
                        break;
                    case "Arcanes":
                    case " Arcanes":
                        skillAbil = parseInt(creature.data.abilities.int.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.arc.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.arc.value = 2; }

                        break;
                    case "Athl\u00e9tisme":
                    case " Athl\u00e9tisme":
                        skillAbil = parseInt(creature.data.abilities.str.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.ath.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.ath.value = 2; }

                        break;
                    case "Discr\u00e9tion":
                    case " Discr\u00e9tion":
                        skillAbil = parseInt(creature.data.abilities.dex.mod);
                        console.log(skillAbil);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.ste.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.ste.value = 2; }

                        break;
                    case "Escamotage":
                    case " Escamotage":
                        skillAbil = parseInt(creature.data.abilities.dex.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.slt.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.slt.value = 2; }

                        break;
                    case "Dressage":
                    case " Dressage":
                        skillAbil = parseInt(creature.data.abilities.dex.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.ani.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.ani.value = 2; }

                        break;
                    case "Histoire":
                    case " Histoire":
                        skillAbil = parseInt(creature.data.abilities.int.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.his.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.his.value = 2; }

                        break;
                    case "Intimidation":
                    case " Intimidation":
                        skillAbil = parseInt(creature.data.abilities.cha.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.itm.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.itm.value = 2; }

                        break;
                    case "Investigation":
                    case " Investigation":
                        skillAbil = parseInt(creature.data.abilities.int.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.inv.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.inv.value = 2; }

                        break;
                    case "M\u00e9decine":
                    case " M\u00e9decine":
                        skillAbil = parseInt(creature.data.abilities.wis.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.med.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.med.value = 2; }

                        break;
                    case "Nature":
                    case " Nature":
                        skillAbil = parseInt(creature.data.abilities.int.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.nat.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.nat.value = 2; }

                        break;
                    case "Perception":
                    case " Perception":
                        skillAbil = parseInt(creature.data.abilities.wis.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.prc.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.prc.value = 2; }
                        break;
                    case "Perspicacit\u00e9":
                    case " Perspicacit\u00e9":
                        skillAbil = parseInt(creature.data.abilities.wis.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.ins.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.ins.value = 2; }

                        break;
                    case "Persuasion":
                    case " Persuasion":
                        skillAbil = parseInt(creature.data.abilities.cha.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.per.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.per.value = 2; }

                        break;
                    case "Religion":
                    case " Religion":
                        skillAbil = parseInt(creature.data.abilities.int.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.rel.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.rel.value = 2; }
                        break;
                    case "Repr\u00e9sentation":
                    case " Repr\u00e9sentation":
                        skillAbil = parseInt(creature.data.abilities.cha.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.prf.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.prf.value = 2; }

                        break;
                    case "Supercherie":
                    case " Supercherie":
                        skillAbil = parseInt(creature.data.abilities.cha.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.dec.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.dec.value = 2; }

                        break;
                    case "Survie":
                    case " Survie":
                        skillAbil = parseInt(creature.data.abilities.wis.mod);

                        if (skillMod == skillAbil + prof) {
                            creature.data.skills.sur.value = 1;
                        } else if (skillMod >= skillAbil + (prof * 2)) { creature.data.skills.sur.value = 2; }

                        break;


                }

            };


            console.log(creature);



            pack.push(creature);
        };






    });

    console.log(pack);
});





Hooks.once("ready", async function() {
    //CONFIG.debug.hooks = true;

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

    var logo = document.getElementById("logo");
    logo.setAttribute("src", "modules/srd-heros-et-dragons/img/logoHD.png");
    logo.setAttribute("title", "clickez pour créer les compendiums");
    logo.addEventListener("click", comp);

});



async function comp() {
    let srdMonst = await Compendium.create({ entity: "Actor", label: "choum" });
    console.log(srdMonst)
    for (creature of pack) {
        let actor = Actor.create(creature, { displaySheet: false, temporary: true }).then((actor) => {
            srdMonst.createEntity(actor);

            console.log(actor);
        });
    };
};