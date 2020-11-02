export class aidejeu extends Application {
    constructor(data, options = {}) {
        super(options);

    }
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["Application"],
            resizable: true,
            popOut: true,
            width: 1310,
            height: 980,
            left: 100,
            template: "modules/srd-heros-et-dragons/templates/aidejeu.html",
            id: "aide de jeu",
            title: "aide de jeu",

        });

    };
    async activateListeners(html) {
        super.activateListeners(html);
    };
}