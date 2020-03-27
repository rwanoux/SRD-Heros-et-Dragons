export var packSpells = [];
export const prepareSpellData = async function() {

    $.getJSON("/modules/srd-heros-et-dragons/grimoire.json", function(grimoire) {
        for (let spell of grimoire) {

            setProperty(spell, "collection", "spell");
            setProperty(spell, "type", "spell");
            setProperty(spell, "name", spell.header.title);
            setProperty(spell, "data.description.value", spell.content);

            setProperty(spell, "data.source", spell.header.taxonomy.source);
            setProperty(spell, "data.activation.type", spell.header.spell.casting_time.split(" ")[1]);


            /* "inst": "DND5E.TimeInst",
  "turn": "DND5E.TimeTurn",
  "round": "DND5E.TimeRound",
  "minute": "DND5E.TimeMinute",
  "hour": "DND5E.TimeHour",
  "day": "DND5E.TimeDay",
  "month": "DND5E.TimeMonth",
  "year": "DND5E.TimeYear",
  "perm": "DND5E.TimePerm",
  "spec": "DND5E.Special"*/


            let dur = spell.header.spell.duration;
            if (dur == "instantan\u00e9e") {
                setProperty(spell, "data.duration.units", "inst");
            } else if (dur == "sp\u00e9ciale") {
                setProperty(spell, "data.duration.units", "spec");
            } else {
                var duration = dur.split(" ");
                for (var w of duration) {
                    if (w == "heures" || w == "heure") {
                        setProperty(spell, "data.duration.units", "hour");
                        setProperty(spell, "data.duration.value", duration[duration.indexOf(w) - 1]);
                    } else if (w == "minutes" || w == "minute") {
                        setProperty(spell, "data.duration.units", "minute");
                        setProperty(spell, "data.duration.value", duration[duration.indexOf(w) - 1]);
                    } else if (w == "jour" || w == "jours") {
                        setProperty(spell, "data.duration.units", "day");
                        setProperty(spell, "data.duration.value", duration[duration.indexOf(w) - 1]);
                    }
                }
            }
            setProperty(spell, "data.activation.cost", spell.header.spell.casting_time.split(" ")[0]);
            setProperty(spell, "data.target.range.value", spell.header.spell.range.split(" ")[0]);
            setProperty(spell, "data.target.range.unit", spell.header.spell.range.split(" ")[1]);
            setProperty(spell, "data.preparation.prepared", false);

            setProperty(spell, "data.level", spell.header.taxonomy.spell_level[0]);

            if (spell.header.taxonomy.spell_school[0] == "Abjuration") {
                setProperty(spell, "data.school", "abj");
            } else if (spell.header.taxonomy.spell_school[0] == "Invocation") {
                setProperty(spell, "data.school", "con");
            } else if (spell.header.taxonomy.spell_school[0] == "Divination") {
                setProperty(spell, "data.school", "div");
            } else if (spell.header.taxonomy.spell_school[0] == "Enchantement") {
                setProperty(spell, "data.school", "enc");
            } else if (spell.header.taxonomy.spell_school[0] == "\u00c9vocation") {
                setProperty(spell, "data.school", "evo");
            } else if (spell.header.taxonomy.spell_school[0] == "Illusion") {
                setProperty(spell, "data.school", "ill");
            } else if (spell.header.taxonomy.spell_school[0] == "N\u00e9cromancie") {
                setProperty(spell, "data.school", "nec");
            } else if (spell.header.taxonomy.spell_school[0] == "Transmutation") {
                setProperty(spell, "data.school", "trs");
            }


            let comps = spell.header.spell.components.split("");
            for (var comp of comps) {
                if (comp === "V") {
                    setProperty(spell, "data.components.vocal", true);
                } else if (comp === "S") {
                    setProperty(spell, "data.components.somatic", true);
                } else if (comp === "M") {
                    setProperty(spell, "data.components.material", true);
                }
            }
            var mat = spell.header.spell.components.split("(")[1];

            if (mat == null) {} else {
                mat = mat.substring(0, mat.length - 1);
                setProperty(spell, "data.materials.value", mat);
            }
            //-----------------pas fonctionnel tant que toutes les bonnes propriétés ne sont pas créées


            //console.log(spell);
            packSpells.push(spell);





        };
        console.log("________________liste de sort H&D___________________");
        console.log(packSpells);
    });

}