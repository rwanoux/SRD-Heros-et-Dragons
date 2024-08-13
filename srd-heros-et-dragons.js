//Hook couleur compendium

<<<<<<< HEAD
import { compendiumColor } from "./scripts/compendiums.js";

export const MODULE_ID = "srd-heros-et-dragons";
=======
import {
    compendiumColor
} from './modules/compendiums.js';
>>>>>>> 85d2656 (Revert "Merge pull request #8 from p4535992/main")

/*-- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -
 ----------------INIT--------------------
 -- -- -- -- -- --- -- -- --- -- -- -- -- -- -- -*/
<<<<<<< HEAD
Hooks.once("init", function () {
    // createLDM(); // .........en attente ....

    //---------déclaration des settings
    game.settings.register("srd-heros-et-dragons", "HDcompendiumColor", {
=======
Hooks.once("init", function() {
    // createLDM(); // .........en attente ....

    //---------déclaration des settings
    game.settings.register('srd-heros-et-dragons', 'HDcompendiumColor', {
>>>>>>> 85d2656 (Revert "Merge pull request #8 from p4535992/main")
        name: "couleur des compendium H&D et DD5",
        hint: "affiche les compendium H&D en vert, DD5 en rouge",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
<<<<<<< HEAD
        onChange: () => window.location.reload(),
=======
        onChange: () => window.location.reload()
>>>>>>> 85d2656 (Revert "Merge pull request #8 from p4535992/main")
    });
});

//--------------------------------------
//----setting compendiums
//--------------------------------------
<<<<<<< HEAD
// Hooks.on("renderSidebarTab", function() {
//     if (game.settings.get('srd-heros-et-dragons', 'HDcompendiumColor')) {
//         compendiumColor();
//     }
// });

Hooks.once("ready", async () => {
    if (game.settings.get("srd-heros-et-dragons", "HDcompendiumColor")) {
        compendiumColor();
    }
});
=======
Hooks.on("renderSidebarTab", function() {
    if (game.settings.get('srd-heros-et-dragons', 'HDcompendiumColor')) {
        compendiumColor();
    }
});

>>>>>>> 85d2656 (Revert "Merge pull request #8 from p4535992/main")
