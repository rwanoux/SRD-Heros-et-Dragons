# SRD pour héros et dragon

## que propose ce module

le module srd-heros et dragons s'utilise sur le logiciel FoundryVTT, avec le system DnD5e.
il propose :

* des compendiums : toutes les données techniques figurant dans le srd, monstres, sorts, aptitudes, etc ... 17 compendiums au total.
* une légère modification graphique pour coller à la charte graphique de Héros et Dragons
* une modification du system dnd5 pour permettre le gain automatique de capacité en fonction du niveau et de la classe des personnages.

## pour jouer entièrement dans la langue de Patrick Sébastien

vous pouvez installer la liste de module suivant :

* fr-FR : permet la trazduction des interfaces de foundryVTT
* dnd5e_fr-FR : permet la traduction du system dnd5e
* babele permet la traduction des compendiums du systeme DnD5e

### soyez vigilant

pensez à vérifier les caracs des monstres, on fait du mieux qu'on peut mais on trouve toujours des petites boulettes
 les valeurs des compétences dues aux maitrises ne sont pas toujours respectées pour les monstres....

### voilà

**vous pouvez retrouver les contributeurs et remonter les erreurs/bugs/propositions sur le [discord francophone de foundryVTT](https://discord.gg/pPSDNJk)**
***Rwanoux, Rodskin, Elfenduil, Hara aka la machine à faire des compendiums, Cimeryl, et toute la team Héros et Dragons du discord***

# Build

## Install all packages

```bash
npm install
```

### dev

`dev` will let you develop you own code with hot reloading on the browser

```bash
npm run dev
```

### build

`build` will build and set up a symlink between `dist` and your `dataPath`.

```bash
npm run build
```

### build:watch

`build:watch` will build and watch for changes, rebuilding automatically.

```bash
npm run build:watch
```

### prettier-format

`prettier-format` launch the prettier plugin based on the configuration [here](./.prettierrc)

```bash
npm run-script prettier-format
```

### lint

`lint` launch the eslint process based on the configuration [here](./.eslintrc.json)

```bash
npm run-script lint
```

### lint:fix

`lint:fix` launch the eslint process with the fix argument

```bash
npm run-script lint:fix
```

### build:json

`build:json` unpack LevelDB pack on `src/packs` to the json db sources in `src/packs/_source`very useful for backup your items and manually fix some hard issue with some text editor

```bash
npm run-script build:json
```

### build:db

`build:db` packs the json db sources in `src/packs/_source` to LevelDB pack on `src/packs` with the new jsons. NOTE: usually this command is launched after the command `build:json` and after make some modifications on the json source files with some text editor

```bash
npm run-script build:db
```

## [Changelog](./CHANGELOG.md)

## Issues

Any issues, bugs, or feature requests are always welcome to be reported directly to the [Issue Tracker](https://github.com/rwanoux/SRD-Heros-et-Dragons/issues ), or using the [Bug Reporter Module](https://foundryvtt.com/packages/bug-reporter/).

## License

This package is under an [Foundry Virtual Tabletop Limited License Agreement for module development](https://foundryvtt.com/article/license/).

