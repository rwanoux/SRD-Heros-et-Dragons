
export async function createLDM() {

  const pack = [];


  $.getJSON("/modules/srd-heros-et-dragons/monstresLDM.json", function (bestiaire) {

    for (let creature of bestiaire) {

      //-----------fonction de parse spécifiques

      let regCarac = /[()]/;
       


      function parseCarac(carac) {
        return parseInt(creature.header.monster[carac].split(regCarac)[0])
      };

      function parseSave(text, carac) {

        if (text && text.indexOf(carac) > -1) {
          return 1
        } else {
          return 0
        }
      }

      function parseSpeed(speed) {
        let mov = {
          "burrow": parseInt(speed.split("fouissement", 3)[1]),
          "climb": parseInt(speed.split("escalade", 3)[1]),
          "fly": parseInt(speed.split("vol", 3)[1]),
          "swim": parseInt(speed.split("nage", 3)[1]),
          "walk": speed.split(" ")[0],
          "units": "m",
          "hover": false
        };
        for (let t in mov) {
          if (t == null) {
            t = 0
          }
        }
        return mov
      };

      function parseSkill(skills) {
        let skillsToCreate = {
          "acr": {
            "value": 0,
            "ability": "dex"
          },
          "ani": {
            "value": 0,
            "ability": "wis"
          },
          "arc": {
            "value": 0,
            "ability": "int"
          },
          "ath": {
            "value": 0,
            "ability": "str"
          },
          "dec": {
            "value": 0,
            "ability": "cha"
          },
          "his": {
            "value": 0,
            "ability": "int"
          },
          "ins": {
            "value": 0,
            "ability": "wis"
          },
          "itm": {
            "value": 0,
            "ability": "cha"
          },
          "inv": {
            "value": 0,
            "ability": "int"
          },
          "med": {
            "value": 0,
            "ability": "wis"
          },
          "nat": {
            "value": 0,
            "ability": "int"
          },
          "prc": {
            "value": 0,
            "ability": "wis"
          },
          "prf": {
            "value": 0,
            "ability": "cha"
          },
          "per": {
            "value": 0,
            "ability": "cha"
          },
          "rel": {
            "value": 0,
            "ability": "int"
          },
          "slt": {
            "value": 0,
            "ability": "dex"
          },
          "ste": {
            "value": 0,
            "ability": "dex"
          },
          "sur": {
            "value": 0,
            "ability": "wis"
          }
        };
        let skilList = {
          "Acrobaties": "acr",
          "Arcanes": "arc",
          "Athl\u00e9tisme": "ath",
          "Discr\u00e9tion": "ste",
          "Dressage": "ani",
          "Escamotage": "slt",
          "Histoire": "his",
          "Intimidation": "itm",
          "Investigation": "inv",
          "M\u00e9decine": "med",
          "Nature": "nat",
          "Perception": "prc",
          "Persuasion": "per",
          "Religion": "rel",
          "Repr\u00e9sentation": "prf",
          "Survie": "sur",
          "Tromperie": "dec"
        };
        for (let [skLabel, skKey] of Object.entries(skilList)) {
          if (skills && skills.indexOf(skLabel) > -1) {
            let bonus = parseInt(skills.split(skLabel)[1].split(",")[0]);
            //--------plantage...prendre en compte le bonus de maitrise
            function mod(b, carac) {
              let reg = /[()]/;
              let val = parseInt(creature.header.monster[carac].split(" ")[1].replace(reg, ""));
              let mod = 0

              if (b == val) {
                mod = 0
              }
              if (b > val && b == val * 2) {
                mod = 1
              }
              if (b == val * 3 || b > val * 3) {
                mod = 2
              }
              if (b == val * 0.5) {
                mod = 0.5
              }
              return mod
            }
            switch (skLabel) {
              case "Acrobaties":
                skillsToCreate[skKey].value = mod(bonus, "dex")
                break;
              case "Athl\u00e9tisme":
                skillsToCreate[skKey].value = mod(bonus, "str")
                break;
              case "Discr\u00e9tion":
                skillsToCreate[skKey].value = mod(bonus, "dex")
                break;
              case "Dressage":
                skillsToCreate[skKey].value = mod(bonus, "wis")
                break;
              case "Escamotage":
                skillsToCreate[skKey].value = mod(bonus, "dex")
                break;
              case "Histoire":
                skillsToCreate[skKey].value = mod(bonus, "int")
                break;
              case "Intimidation":
                skillsToCreate[skKey].value = mod(bonus, "cha")
                break;

              case "Investigation":
                skillsToCreate[skKey].value = mod(bonus, "int")
                break;

              case "M\u00e9decine":
                skillsToCreate[skKey].value = mod(bonus, "int")
                break;
              case "Nature":
                skillsToCreate[skKey].value = mod(bonus, "int")
                break;
              case "Perception":
                skillsToCreate[skKey].value = mod(bonus, "wis")
                break;
              case "Persuasion":
                skillsToCreate[skKey].value = mod(bonus, "cha")
                break;
              case "Religion":
                skillsToCreate[skKey].value = mod(bonus, "int")
                break;
              case "Repr\u00e9sentation":
                skillsToCreate[skKey].value = mod(bonus, "cha")
                break;
              case "Survie":
                skillsToCreate[skKey].value = mod(bonus, "wis")
                break;
              case "Tromperie":
                skillsToCreate[skKey].value = mod(bonus, "cha")
                break;
            }



          };
        }
        return skillsToCreate
      }

      function parseSense(senses) {
        let sensToCreate = {
          "darkvision": 0,
          "blindsight": 0,
          "tremorsense": 0,
          "truesight": 0,
          "units": "m",
          "special": ""
        };
        let sensConf = {
          "vision dans le noir": "darkvision",
          "vision aveugle": "blindsight",
          "Perception des vibrations": "tremorsense",
          "Vision véritable": "truesight",

        };
        for (let [slabel, skey] of Object.entries(sensConf)) {
          let sensList = senses.split(", ")
          for (let s of sensList) {
            if (s.indexOf(slabel) > -1) {
              sensToCreate[skey] = parseInt(s.split(slabel)[1])
            };
          }
        }
        return sensToCreate
      }

      function parseLang(langages) {
        let langtoCreate = {
          "value": [],
          "custom": ""
        };
        let langConf = {
          "common": "commun",
          "aarakocra": "aarakocra",
          "abyssal": "abyssal",
          "aquan": "aquatique",
          "auran": "a\u00e9rien",
          "celestial": "DND5E.c\u00e9leste",
          "deep": "profond",
          "draconic": "draconique",
          "druidic": "DND5E.LanguagesDruidic",
          "dwarvish": "nain",
          "elvish": "elfique",
          "giant": "g\u00e9ant",
          "gith": "gith",
          "gnomish": "gnome",
          "goblin": "gobelin",
          "gnoll": "gnoll",
          "halfling": "halfelin",
          "ignan": "ign\u00e9",
          "infernal": "infernal",
          "orc": "orc",
          "primordial": "primordial",
          "sylvan": "sylvestre",
          "terran": "terran",
          "cant": "argot des voleurs",
          "undercommon": "commun des profondeurs"

        };
        if (langages.split(", ")) {
          let reg = /[,;]/;
          let space = /[\s]/
          for (let lang of langages.split(reg)) {
            for (let [key, label] of Object.entries(langConf)) {
              if (lang.replace(space, "") == label) {
                langtoCreate.value.push(key);
              } else if (lang.replace(space, "") != label && langtoCreate.custom.indexOf(lang) < 0) {
                langtoCreate.custom = langtoCreate.custom + lang + ";"
              }
            }
          }
        }
        return langtoCreate
      };

      function parseSize(size) {
        switch (size) {
          case "M":
            return "med";
            break;
          case "G":
            return "lg";
            break;
          case "TG":
            return "huge"
            break;
          case "P":
            return "sm"
            break;
          case "Gig":
            return "grg"
            break;
          case "TP":
            return "tiny"
            break;
        };

      }

      function parseDgt(dgtText) {
        if (dgtText) {
          let dgt = {
            "value": [],
            "custom": ""
          };
          let reg = /et|,/;
          let DamageType = {
            "acid": "d'acide",
            "bludgeoning": "contondants",
            "cold": "de froid",
            "fire": "de feu",
            "force": "de force",
            "lightning": "de foudre",
            "necrotic": "n\u00e9crotiques",
            "piercing": "perforants",
            "poison": "de poison",
            "psychic": "psychiques",
            "radiant": "radiants",
            "slashing": "tranchants",
            "thunder": "de tonnerre"
          };
          if (dgtText.split(";")[1]) {
            dgt.custom = dgtText.split(";")[1]
          }
          let regularDgt = dgtText.split(";")[0];
          for (let l of regularDgt.split(reg)) {
            for (let [key, label] of Object.entries(DamageType)) {
              if (l == label) {
                dgt.value.push(key)
              }
            }
          }
          return dgt
        }
      };

      function parseEtats(etats) {
        if (etats) {
          let etat = {
            "value": [],
            "custom": ""
          }
          let etatConf = {
            "blinded": "aveugl\u00e9",
            "charmed": "charm\u00e9",
            "deafened": "assourdi",
            "diseased": "malade",
            "exhaustion": "\u00e9puis\u00e9",
            "frightened": "terroris\u00e9",
            "grappled": "Agripp\u00e9",
            "incapacitated": "Incapable d'agir",
            "invisible": "invisible",
            "paralyzed": "paralys\u00e9",
            "petrified": "p\u00e9trifi\u00e9",
            "poisoned": "empoisonn\u00e9",
            "prone": "\u00e0 terre",
            "restrained": "entrav\u00e9",
            "stunned": "\u00e9tourdi",
            "unconscious": "inconscient"
          };

          for (let e of etats) {
            for (let [key, label] of Object.entries(etatConf)) {
              if (e == label) {
                etat.value.push(key)
              }
            }
          }
          return etat
        }

      };

      //----------modèle à créé-----------
      let monsterToCreate = {
        "_id": "",
        "name": creature.header.title,
        "type": "npc",
        "data": {
          "abilities": {
            "str": {
              "value": parseCarac("str"),
              "proficient": parseSave(creature.header.monster.saves, "For")
            },
            "dex": {
              "value": parseCarac("dex"),
              "proficient": parseSave(creature.header.monster.saves, "Dex")
            },
            "con": {
              "value": parseCarac("con"),
              "proficient": parseSave(creature.header.monster.saves, "Con")
            },
            "int": {
              "value": parseCarac("int"),
              "proficient": parseSave(creature.header.monster.saves, "Int")
            },
            "wis": {
              "value": parseCarac("wis"),
              "proficient": parseSave(creature.header.monster.saves, "Sag")
            },
            "cha": {
              "value": parseCarac("cha"),
              "proficient": parseSave(creature.header.monster.saves, "Cha")
            }
          },
          "attributes": {
            "ac": {
              "value": parseCarac("ac")
            },
            "hp": {
              "value": parseCarac("hp"),
              "min": 0,
              "max": parseCarac("hp"),
              "temp": 0,
              "tempmax": 0,
              "formula": creature.header.monster.hp.split(regCarac)[1],
            },
            "init": {
              "value": 0,
              "bonus": 0
            },
            "movement": parseSpeed(creature.header.monster.speed),
            "senses": parseSense(creature.header.monster.senses),
            "spellcasting": "int"
          },
          "details": {
            "biography": {
              "value": creature.content,
              "public": ""
            },
            "alignment": creature.header.monster.alignment,
            "race": creature.header.monster.subtype,
            "type": creature.header.taxonomy.monster_type,
            "environment": creature.header.taxonomy.monster_environnement,
            "cr": creature.header.taxonomy.monster_challenge,
            "spellLevel": 0,
            "xp": {
              "value": creature.header.taxonomy.monster_challenge
            },
            "source": creature.header.taxonomy.source[0] + " page " + creature.header.source_page
          },
          "traits": {
            "size": parseSize(creature.header.monster.size),
            "di": parseDgt(creature.header.monster.immunities),
            "dr": parseDgt(creature.header.monster.resistances),
            "dv": parseDgt(creature.header.monster.vulnerabilities),
            "ci": parseEtats(creature.header.monster.immunities_debilities),
            "languages": parseLang(creature.header.monster.languages),

            "currency": {
              "pp": 0,
              "gp": 0,
              "ep": 0,
              "sp": 0,
              "cp": 0
            }
          },
          "skills": parseSkill(creature.header.monster.skills),
          "spells": {},
          "bonuses": {
            "mwak": {
              "attack": "",
              "damage": ""
            },
            "rwak": {
              "attack": "",
              "damage": ""
            },
            "msak": {
              "attack": "",
              "damage": ""
            },
            "rsak": {
              "attack": "",
              "damage": ""
            },
            "abilities": {
              "check": "",
              "save": "",
              "skill": ""
            },
            "spell": {
              "dc": ""
            }
          },
          "resources": {
            "legact": {
              "value": 0,
              "max": 0
            },
            "legres": {
              "value": 0,
              "max": 0
            },
            "lair": {
              "value": 0,
              "initiative": 0
            }
          }
        },
        "sort": 100001,
        "flags": {

        },
        "items": [],
        "effects": [],
      }

      //-------------parser feats; items ; spells
      //let items = [];
      /*
      var stringToSplit = creature.content.replace(/[.*+?^${}()|[]\]/g, "");
      var splitList = ["## Capacités", "## Action", "## Réactions", "## Actions légendaires"];
      let feats = {};
      for (let spltWord of splitList) {
        let startIndex, stopIndex;
        let parts;
        switch (spltWord) {
          case "## Capacit\u00e9s":
            startIndex = stringToSplit.indexOf("## Capacités");
            stopIndex = stringToSplit.indexOf("## Action");
            break;
          case "## Action":
            startIndex = stringToSplit.indexOf("## Actions");
            stopIndex = stringToSplit.indexOf("## Actions légendaire");
            break;
          case "## Actions l\u00e9gendaires":
            startIndex = stringToSplit.indexOf("## Actions légendaire");
            stopIndex = stringToSplit.length;
            break;
          case "## R\u00e9actions":
            startIndex = stringToSplit.indexOf("## R\u00e9actions");
            stopIndex = stringToSplit.indexOf("## Action légendaire") || stringToSplit.length
            break;
        }
        parts = stringToSplit.slice(startIndex, stopIndex);

        console.log(
          parts.split("***")
        );

        for (let subParts of parts.split("***")) {
         
          if (parts.indexOf(subParts) % 2 != 0 && parts.indexOf(subParts)!=0) {
            let item = {
              name:subParts,
              data:{
                description:{
                  value:parts[parts.indexOf(subParts) + 1]
                }
              }
            };
            item.name = subParts;
            item.data.description = parts[parts.indexOf(subParts) + 1];
            items.push(item)
          }
          
        };


          console.log(items)
      }
      */




      console.log('----------------------' + monsterToCreate.name + '------------------------------------------');
      console.log(monsterToCreate);
      


      pack.push(monsterToCreate);


    };
    

  /*
    let randomMonster = pack[Math.floor(Math.random() * pack.length)];
    Actor.create(randomMonster)

   
    const comp =  game.packs.get("world.livre-des-monstres");
*/
  for (let entity of pack){
   
    let cr=  Actor.create(entity);
    
  }  
  });

}