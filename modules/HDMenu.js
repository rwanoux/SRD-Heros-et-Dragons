import { packMonsters } from './monsters.js';

import { prepareCreatureData } from './monsters.js';
import { packSpells } from './spells.js';
import { prepareSpellData } from './spells.js';
import { menuHD } from '../srd-heros-et-dragons.js';



export class HDMenu extends FormApplication {


    constructor(...args) {
        super(...args);
    }


    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
                id: "HDMenu",
                classes: ["dnd5e"],
                title: "SRD Héros et Dragons",
                template: "modules/srd-heros-et-dragons/templates/HDMenu.html",
                width: 900,
                height: 700,
                rezisable: true
            }

        );
    }




    getData() {
        let data = {
            monsterType: ["truc", "machin"],
            packMonsters: packMonsters,
            packSpells: packSpells,
            shownSpells: [],
            shownMonsters: [],
            spellFilters: {
                schoolFilters: [],
                classFilters: [],
                levelFilters: [],
                conc: false,
                rit: false,
                nameFilter: []
            },

            monsterFilter: {

            }
        };
        return data
    };
    activateListeners(html) {
        super.activateListeners(html);
        let data = this.getData();

        /*---------filters tags for spells*/
        let schfil = document.getElementsByClassName("schoolFilters");
        for (let e of schfil) {
            e.addEventListener("change", function() {
                let SC = data.spellFilters.schoolFilters;
                if (e.checked == true) {
                    SC.push(e.name);

                } else {
                    SC.splice(SC.indexOf(e.name), 1)
                }
                setProperty(data.spellFilters, "schoolFilters", SC);
                console.log(data.spellFilters);
                updateShownSpells();
                return data
            });

        };
        let clflt = document.getElementsByClassName("classFilters");
        for (let e of clflt) {
            e.addEventListener("change", function() {
                let SC = data.spellFilters.classFilters;
                if (e.checked == true) {
                    SC.push(e.name);
                    setProperty(data.spellFilters, "classFilters", SC);
                } else {
                    SC.splice(SC.indexOf(e.name), 1);
                    setProperty(data.spellFilters, "classFilters", SC);

                    for (let spell of data.shownSpells) {
                        console.log(spell);
                    }
                }
                console.log(data.spellFilters);
                updateShownSpells();
            });

        }
        let lvlflt = document.getElementsByClassName("levelFilters");
        for (let e of lvlflt) {
            e.addEventListener("change", function() {
                let SC = data.spellFilters.levelFilters;
                if (e.checked == true) {
                    SC.push(e.name);
                    setProperty(data.spellFilters, "levelFilters", SC);

                } else {
                    SC.splice(SC.indexOf(e.name), 1)
                }
                return data.spellFilters
            });
            console.log(data.spellFilters);
            updateShownSpells();
        }
        let concflt = document.getElementsByClassName("concFilter")[0];
        concflt.addEventListener("change", function() {
            if (concflt.checked == true) {
                setProperty(data.spellFilters, "conc", true);
            } else {
                setProperty(data.spellFilters, "conc", false);
            }
            console.log(data.spellFilters);
            updateShownSpells();

        })
        let ritflt = document.getElementsByClassName("ritFilter")[0];
        ritflt.addEventListener("change", function() {
            if (ritflt.checked == true) {
                setProperty(data.spellFilters, "rit", true);
            } else {
                setProperty(data.spellFilters, "rit", false);
            }
            console.log(data.spellFilters);
            updateShownSpells();
        });
        let namefltr = document.getElementsByClassName("filtres-sort-nom")[0];
        namefltr.addEventListener("change", function() {
            setProperty(data.spellFilters, "nameFilter", namefltr.value.split(" "));
            console.log(data.spellFilters.nameFilter)
        });

        async function updateShownSpells() {
            for (let spl of packSpells) {
                let search = data.spellFilters.nameFilter;
                for (let n of search) {
                    if (spl.name.split(" ").indexOf(n) !== -1) {
                        return
                    } else {
                        data.shownSpells.push(spl)
                    }
                }
            };
            console.log(data.shownSpells);
            return data

        }

    }
    _updateObject(event, formData) {
        let data = this.getData();
        this.render(true);
        return data

    }

}