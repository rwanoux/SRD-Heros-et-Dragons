//---------------------compendium color---visibité des compendium H&D 
export function compendiumColor() {

    var comps = document.getElementsByClassName("pack-title");
    for (let comp of comps) {
        let indexHD = comp.innerText.indexOf("H&D");
        let indexDND = comp.innerText.indexOf("SRD");
        if (indexHD !== -1) {
            comp.style.color = "LightGreen";
        }
        if (indexDND !== -1) {
            comp.style.color = "IndianRed";
        }
    }
};

//---------------------masquer les compendiums DD5

export function hideDD5Compendium() {

    var comps = document.getElementsByClassName("pack-title");
    for (let comp of comps) {
        let indexDND = comp.innerText.indexOf("SRD");

        if (indexDND !== -1) {
            comp.parentElement.style.display = "none";
        }
    }
}