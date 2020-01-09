Hooks.once("ready", async function() {
    $.getJSON("/modules/SRD heros et dragons/creatures.json", function(bestiaire) {
        //const bestiaire = fetch("/modules/SRD heros et dragons./creature.json").then(resp => resp.json());
        console.log(bestiaire)
        let pack = [];
        for (let creature of bestiaire) {
            setProperty(creature, "name", creature.header.title);
            setProperty(creature, "data.abilities.dex.value", parseInt(creature.header.monster.dex));
            /*

                                creature.data.abilities.str.value = parseInt(creature.header.monster.str);
                                creature.data.abilities.dex.value = parseInt(creature.header.monster.dex);
                                creature.data.abilities.con.value = parseInt(creature.header.monster.con);
                                creature.data.abilities.int.value = parseInt(creature.header.monster.int);
                                creature.data.abilities.wis.value = parseInt(creature.header.monster.wis);
                                creature.data.abilities.cha.value = parseInt(creature.header.monster.cha);


                                creature.data.abilities.str.mod = creature.header.monster.str.split("(")[1];
                                creature.data.abilities.str.mod = creature.data.abilities.str.mod.substring(0, creature.data.abilities.str.mod.length - 1);

                                creature.data.abilities.dex.mod = creature.header.monster.dex.split("(")[1];
                                creature.data.abilities.dex.mod = creature.data.abilities.dex.mod.substring(0, creature.data.abilities.dex.mod.length - 1);

                                creature.data.abilities.con.mod = creature.header.monster.con.split("(")[1];
                                creature.data.abilities.con.mod = creature.data.abilities.con.mod.substring(0, creature.data.abilities.con.mod.length - 1);

                                creature.data.abilities.int.mod = creature.header.monster.int.split("(")[1];
                                creature.data.abilities.int.mod = creature.data.abilities.int.mod.substring(0, creature.data.abilities.int.mod.length - 1);

                                creature.data.abilities.wis.mod = creature.header.monster.wis.split("(")[1];
                                creature.data.abilities.wis.mod = creature.data.abilities.wis.mod.substring(0, creature.data.abilities.wis.mod.length - 1);

                                creature.data.abilities.cha.mod = creature.header.monster.cha.split("(")[1];
                                creature.data.abilities.cha.mod = creature.data.abilities.cha.mod.substring(0, creature.data.abilities.cha.mod.length - 1);


                                creature.data.details.cr = creature.header.monster.challenge;
                                creature.data.details.alignment = creature.header.monster.alignment;
                                creature.data.details.xp.value = creature.header.monster.px;
                                creature.data.details.biography.value = creature.content;
                                creature.data.details.type = creature.truetype;
                                creature.data.details.environment = creature.environment;
                                creature.data.details.source = creature.header.taxonomy.source;

                                creature.data.attributes.ac.value = parseInt(creature.header.monster.ac);
                                creature.data.attributes.hp.value = parseInt(creature.header.monster.hp);
                                creature.data.attributes.hp.max = creature.data.attributes.hp.value;
                                creature.data.attributes.hp.formula = creature.header.monster.hp.split("(")[1];
                                creature.data.attributes.hp.formula = "0";
                                creature.data.attributes.speed.value = creature.header.monster.speed;

                                //resultat aléatoire.... mais ça rempli quelques images tout de même
                                path = 'https://raw.githubusercontent.com/Nioux/AideDeJeu/master/Data/Monsters/' + creature.name.toLowerCase() + '.jpg';
                                creature.img = path;
                                creature.data.traits.languages.custom = creature.header.monster.languages;


                                creature.data.traits.senses = creature.header.monster.senses;

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
                                    creature.data.traits.di.custom = creature.header.monster.immunities;
                                } else {
                                    creature.data.traits.di.custom = "";
                                }
                                if (creature.header.monster.hasOwnProperty('resistances')) {
                                    creature.data.traits.dr.custom = creature.header.monster.resistances;
                                } else {
                                    creature.data.traits.dr.custom = "";
                                }

                                creature.data.traits.dv.custom = creature.header.monster.vulnerabilities;
                                if (creature.header.monster.hasOwnProperty('vulnerabilities')) {
                                    creature.data.traits.dv.custom = creature.header.monster.vulnerabilities;
                                } else {
                                    creature.data.traits.dv.custom = "";
                                }
                                if (creature.header.monster.hasOwnProperty('immunities_debilities')) {
                                    creature.data.traits.ci.custom = creature.header.monster.immunities_debilities;
                                } else {
                                    creature.data.traits.ci.custom = "";
                                }

                                console.log('----------------------' + creature.name + '------------------------------------------')
                                console.log(creature);
                                var delayInMilliseconds = 30;
                               

                        */
            pack.push(creature);
        };
        console.log(pack);
    });
});




Hooks.once("init", async function() {

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
    var logo = document.getcreatureById("logo");
    logo.setAttribute("src", "modules/SRD heros et dragons/img/logoHD.png");
});
Hooks.on("renderChatMessage", function() {

});