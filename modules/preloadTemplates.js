export const preloadTemplates = async function() {
    const templatePaths = [
        // Add paths to "modules/essai/templates"
        "modules/srd-heros-et-dragons/templates/srdHDMenu.html"
    ];

    return loadTemplates(templatePaths);
}