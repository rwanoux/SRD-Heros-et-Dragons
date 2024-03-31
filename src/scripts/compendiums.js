import { MODULE_ID } from "../module";

//---------------------compendium color---visibité des compendium H&D
export function compendiumColor() {
    /*
    var comps = document.getElementsByClassName("pack-title");
    for (let comp of comps) {
        let indexHD = comp.innerText.indexOf("HnD");
        let indexDND = comp.innerText.indexOf("SRD");
        if (indexHD !== -1) {
            comp.style.color = "LightGreen";
        }
        if (indexDND !== -1) {
            comp.style.color = "IndianRed";
        }
    }
    */
    if (game.modules.get("compendium-themer")?.active) {
        game.modules.get("compendium-themer").api.addModule(MODULE_ID, [
            // {
            //     dataPack: `${MODULE_ID}.monsters`,
            //     colorText: `#90EE90`,
            //     iconText: `fa-solid fa-helmet-battle`,
            //     bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
            //     backgroundColorText: `#CD5C5C`,
            // },
            // <i class="fa-solid fa-pen-ruler"></i>
        ]);
    }
}
