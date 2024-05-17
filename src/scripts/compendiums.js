import { MODULE_ID } from "../module";

//---------------------compendium color---visibite des compendium H&D
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
            // ACTOR
            {
                dataPack: `${MODULE_ID}.HnD-dons`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-helmet-battle`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-capacites-de-classes`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-helmet-battle`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-grimoire`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-helmet-battle`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-races`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-helmet-battle`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-traits-raciaux`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-helmet-battle`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-equipement-aventurier`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-helmet-battle`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-historiques`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-helmet-battle`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-Classes-specialisations`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-helmet-battle`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-aptitudes-historiques`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-helmet-battle`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            // ITEM
            {
                dataPack: `${MODULE_ID}.HnD-objets-magiques-et-tresors`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-sword`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-poisons-et-maladies`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-sword`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            // RULES
            {
                dataPack: `${MODULE_ID}.HnD-tables-de-tresors`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-pen-ruler`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-conditions`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-pen-ruler`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-bestaire`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-pen-ruler`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-capacites-du-bestiaire`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-pen-ruler`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-tables-de-rencontres-aleatoires`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-pen-ruler`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-tables-d_evenements-aleatoires`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-pen-ruler`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-folies`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-pen-ruler`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
            {
                dataPack: `${MODULE_ID}.HnD-pieges`,
                colorText: `#90EE90`,
                iconText: `fa-solid fa-pen-ruler`,
                bannerImage: `modules/${MODULE_ID}/assets/images/banner.webp`,
                backgroundColorText: ``,
            },
        ]);
    }
}
