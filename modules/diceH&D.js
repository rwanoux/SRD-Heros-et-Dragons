export function diceHD (dice3d){
    
    dice3d.addSystem({
        id: "heros et dragons",
        name: "heros et dragons"
    }, true);

    dice3d.addTexture("heros et dragons", {
            name: "heros et dragons",
            composite: "source-over",
            source: "modules/srd-heros-et-dragons/img/dice/texture_transp.png",
            bump: "modules/srd-heros-et-dragons/img/dice/dice_bump.png"

        })
        .then(() => {
            dice3d.addColorset({
                name: 'heros-et-dragons-mauve',
                description: "h&d-mauve",
                category: "heros-et-dragons",
                foreground: 'black',
                background: " #7858cd ",
                texture: 'heros et dragons',
                outline: "black",
                edge: '#a198b9',
                material: 'wood',
                font:'Agincourt Std Regular',
                fontScale: {
                    "d4": 1.5,
                    "d6": 1.5,
                    "d8": 1,
                    "d10": 1,
                    "d100": 1,
                    "d12": 1.3,
                    "d20": 1,
                    "df": 2.5,
                }
            });
            dice3d.addColorset({
                name: 'heros-et-dragons-rouge',
                description: "h&d-rouge",
                category: "heros-et-dragons",
                foreground: 'black',
                background: "#bb2a2a",
                texture: 'heros et dragons',
                outline: "#d16134",
                edge: '#c9a949',
                material: 'wood',
                font:'Agincourt Std Regular',
                fontScale: {
                    "d4": 1.5,
                    "d6": 1.5,
                    "d8": 1,
                    "d10": 1,
                    "d100": 1,
                    "d12": 1,
                    "d20": 1,
                    "df": 2.5,
                }
            });
            dice3d.addColorset({
                name: 'heros-et-dragons-bleu',
                description: "h&d-bleu",
                category: "heros-et-dragons",
                foreground: 'black',
                background: "#1225e4",
                texture: 'heros et dragons',
                outline: "#184d5c",
                edge: '#34afd1',
                material: 'wood',
                font:'Agincourt Std Regular',
                fontScale: {
                    "d4": 1.5,
                    "d6": 1.5,
                    "d8": 1,
                    "d10": 1,
                    "d100": 1,
                    "d12": 1,
                    "d20": 1,
                    "df": 2.5,
                }
            });
            dice3d.addColorset({
                name: 'heros-et-dragons-vert',
                description: "h&d-vert",
                category: "heros-et-dragons",
                foreground: 'black',
                background: "#25e412",
                texture: 'heros et dragons',
                outline: "#70c47d",
                edge: '#a198b9',
                material: 'wood',
                font:'Agincourt Std Regular',
                fontScale: {
                    "d4": 1.5,
                    "d6": 1.5,
                    "d8": 1,
                    "d10": 1,
                    "d100": 1,
                    "d12": 1,
                    "d20": 1,
                    "df": 2.5,
                }
            });
            dice3d.addColorset({
                name: 'heros-et-dragons-cyan',
                description: "h&d-cyan",
                category: "heros-et-dragons",
                foreground: 'black',
                background: "#12e4c1",
                texture: 'heros et dragons',
                outline: "#1e3c4a",
                edge: '#69c0ff',
                material: 'wood',
                font:'Agincourt Std Regular',
                fontScale: {
                    "d4": 1.5,
                    "d6": 1.5,
                    "d8": 1,
                    "d10": 1,
                    "d100": 1,
                    "d12": 1,
                    "d20": 1,
                    "df": 2.5,
                }
            });
            dice3d.addColorset({
                name: 'heros-et-dragons-magenta',
                description: "h&d-magenta",
                category: "heros-et-dragons",
                foreground: 'black',
                background: "#8112e4",
                texture: 'heros et dragons',
                outline: "#e869ff",
                edge: '#e869ff9',
                material: 'wood',
                font:'Agincourt Std Regular',
                fontScale: {
                    "d4": 1.5,
                    "d6": 1.5,
                    "d8": 1,
                    "d10": 1,
                    "d100": 1,
                    "d12": 1,
                    "d20": 1,
                    "df": 2.5,
                }
            });
            dice3d.addColorset({
                name: 'heros-et-dragons-jaune',
                description: "h&d-jaune",
                category: "heros-et-dragons",
                foreground: 'black',
                background: "#e4d712",
                texture: 'heros et dragons',
                outline: "#4d4c29",
                edge: '#fcfa83',
                material: 'wood',
                font:'Agincourt Std Regular',
                fontScale: {
                    "d4": 1.5,
                    "d6": 1.5,
                    "d8": 1,
                    "d10": 1,
                    "d100": 1,
                    "d12": 1,
                    "d20": 1,
                    "df": 2.5,
                }
            });
        });


    dice3d.addDicePreset({
    // modelFile: "modules/srd-heros-et-dragons/d20.glb",
        type: "d20",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20"
        ],
        bumpMaps: [
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
        ],
        system: "heros et dragons",

    });

    dice3d.addDicePreset({
        type: "d4",
        labels: [
            "1", "2", "3", "4"

        ],
        bumpMaps: [
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png"

        ],
        system: "heros et dragons"
    });

    dice3d.addDicePreset({
        type: "d6",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"

        ],
        bumpMaps: [

            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png"

        ],
        system: "heros et dragons"
    });

    dice3d.addDicePreset({
        type: "d8",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8"

        ],
        bumpMaps: [

            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png"

        ],
        system: "heros et dragons"
    });

    dice3d.addDicePreset({
        type: "d10",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0"

        ],
        bumpMaps: [

            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png"

        ],
        system: "heros et dragons"
    });
    dice3d.addDicePreset({
        type: "d100",
        labels: [
            "10",
            "20",
            "30",
            "40",
            "50",
            "60",
            "70",
            "80",
            "90",
            "0"

        ],
        bumpMaps: [

            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png"

        ],
        system: "heros et dragons"
    });


    dice3d.addDicePreset({
        type: "d12",
        labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"

        ],
        bumpMaps: [

            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png",
            "modules/srd-heros-et-dragons/img/dice/dice_bump.png"

        ],
        system: "heros et dragons"
    });


}
