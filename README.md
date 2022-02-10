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

## release 3.3
* Ajout des images sur les tokens
* Ajustement de la CA des creatures
* Ajustement de la perception passive des creatures
* Ajustement des deplacement des creatures

## release 3.2
* Module is now compatible with v9.

## release 3.1.9
### Objets magiques et trésors
* Mise à jour des types d'objets magiques
* Mise à jour des harmonisations
* Mise à jour de la rareté
* Suppression de quelques doublons
* Modification des noms d'objets "à 2 mains" en "à deux mains"
* Correction de quelques tailles/poids de certains conteneurs
### Équipement d'aventurier
* Mise à jour des types d'arme
* Mise à jour des types d'armure
* Mise à jour des types d'outil (avec la nomenclature D&D car la nomenclature H&D n'est pas disponible)
* Rajout des dégâts et de la propriété "Polyvalente (1d8)" sur tous les bâtons (même les focalisateurs)
* Toutes les munitions ont maintenant une portée de 1.5 mètres (car c'est l'arme qui gère la portée) et retrait des dégâts (l'arme de base qui gère cela également)
* Mise à jour de quelques portées qui étaient restées en pieds
* Mise à jour de la vitesse des véhicules
* Traduction de quelques textes restés en anglais
### Bestiaire 
* Mise a jour du type de créatures.
* Mise a jour des sens. 


## release 3.1.8
* Ajout des classes de pangée
* Ajout des races de pangée. 

## release 3.1.7
* Correction de la feuille d'objet concernant la consommation des ressources quand les "ressources de classes" sont activés.
* Suppression de l'option du calcul auto de la CA et de l'option de l'ajout auto des compétences ( ces deux options sont à présent gérées par le module Dnd5e)

## release 3.1.6
* Ajout des spécialisation de classes venant des gazettes : 
* Magicien - maître d'étude, 
* Barde - Collège des Taromanciens, 
* Guerrier - Officier, 
* Barbare - Voie des steppes

## release 3.1.5
* Changement des unité de mesure ft => m,  mi => km

## release 3.1.4
* Ajout de la compatibilité 0.8.X de foundry
* Ajout d'un parametre afin d'activer ou non l'aide de jeu
* Ajout d'un parametre afin d'activer ou non l'aide a la creation
* L'ajout des competence est as present gerer par le module dnd5e.



## release 3.1.3

correction d'un import inutile et bloquant sur forge-vtt.com

## release 3.1.2

ajout des dons issus de Pangée 2, l'âge du changement (merci Angor de Redjak)

## release 3.1.0

ajout de feats "listes de sorts", par classe et niveau, disponibles dans le compendium "grimoire"
ajout de la sous-classe Passeur pour les rôdeurs (avec les aptitudes auto à la montée de niveau)
ajout d'historiques

les liens externes sont maintenant ouvert depuis foundry et non plus un nouvel onglet de navigateur (quand cela est possible)

tous les liens de "points de règles" issus d'une fiche et pointant vers le site 5e DRS français sont ouvert en petite fenetre dans le coin de foundry

## release 3.0.4

correction numero de version pour avoir le bon dépot sur Forge

## release 3.0.3

correction des compendiums classes, et capa de classes.
correction du level up qui pouvait redonner des feats des compendiums dnd5 au lieu des compendiums H&D
correction en lot de tous les liens pointant vers heros-et-dragons.fr

## release 3.0.2

ajout du Collège des Rêves de Pangé dans les compendiums classes et capacitées de classes. (merci Angor de Redjak)

## release 3.0.1

ajout sur l'app de créa :
-des boutons pour valider les choix
-le calcul de caractéristiques

## release 2.0.9

les babioles équippées qui ont un score en ca donne automatiquement leur bonus;
prise en compte nouvelle version tidy sheet
ajout de la sous classe druide cercle des chatiments
complément de l'équipement d'aventurier

## release 2.0.7

correction calcul de la CA;
lien vers le tipee

## release 2.0.6

correction à l'aide à la création : les capacité de classe niv1 sont données;
prise en compte de capacité défense sans armure des barbares et moines pour le calcul de CA

## release 2.0.5

correction calcul de CA

## release 2.0.4

nouvelle option de calcul de la CA
l'aide à la création n'est accessible qu'aux GMs

## release 2.0.3

correction bug dice so nice : le D4 était foireux

## release 2.0.2

débug
ajout des historiques manquants

## release 2.0.1

débug pour les montées de niveaux avec ajout de capacitées automatiques;
ajout de la lignée protéenne et des ses capacitées
ajout des variantes Homme serpent Kubea ghinduk, et Homme serpent Kubea ssyere et leurs capacitées

## release 1.9.9

débug pour compatibilité Libwrapper
l'affichage des ressources spécifique aux classes dépend maintenant d'une option du module
les ressources spéciales ne sont plus sous-lignées

## release 1.9.8

intégrations des sous-classes de la Gazette
intégration de l'aide à la création de personnage

## release 1.8.7

normalisation des labels des compendiums

## release 1.8.5

corrections pour foundry 0.7.6 et system dnd5 1.1.1

## release 1.8.2+1.8.3

débug des affichages de ressources +compatibilité tidysheet

## release 1.8.1

le fait d'attribuer une classe à un personnage lui fait apparaitre les ressources specifique à sa classe.(point de ki, de sorcellerie, formes sauvages etc...)
un nouveau bouton apparait en clickant sur le logo pour acceder au wiki du module**vous êtes encouragés à le compléter**

## release 1.7.3

correction du compendium classe et spécialisation, les spécialisations sont bien de type "feat" et les classes de type "class"

## release 1.7.2

correction graphique, la couleur des inputs dans les form-group redevient lisible

## release 1.7

ajout d'un raccourci in-game pour un résumeé des règles de combat

## release V1.6.7

nouvelles options du module : afficher les compendiums en couleur, masquer les compendium dd5
corrections des tables de rencontres aléatoire

## release V1.6.6

ajustement du compendium de capacité de classe par Cimeryl, [les détails de son travail](https://gitlab.com/lemaire.erw/srd-heros-et-dragons/-/blob/master/avanceCapaClasse.md)

## release V1.6.4

ajout du compendium des capacitées de classes.
ajout d'une option pour activer le debugage console.
ajout graphique : les compendium H&D s'affiche en vert ; le srd DND5e en rouge.
correction du trie des compétences par ordre alphabétique : avant cela ne s'appliquait qu'à la première fiche de perso ouverte, maintenant cela s'effectue même si plusieurs fiches sont ouvertes.

## release V1.6

la surcharge du css (style graphique) est optionnel. c'est activable depuis "gérer le options/modules"

## release V1.5.8

refonte du compendium classe et spécialisation
compatibilité pour les fiches Obsidain, la barre de scroll redevient visible.

## release V1.5.7

nouveau compendium : aptitudes d'historique

correction compendium : historiques. dans la description des historiques les aptitudes d'historiques sont en liens avec le compendium

corrections d'affichages

compatibilité pour midi QOL, les boutons d'actions rapide deviennent lisible.

## release V1.5

corrections d'affichages

compatibilité pour les fiches tidy5e, et better npc sheet

## release V1.2 à 1.4

habillage graphique

correction de la disparition de la classe et du niveau au dessus de l'expérience

## release V1.1

habillage graphique

## release V1

correction du compendium de table de folies,

correction du compendium bestiaire,

## nouveautés V0.9.9

ajouts de compendiums, folies, poisons et maladies, pièges,

les compétences apparaissent maintenant par ordre alphabétique fr,

### les pièges sont créés comme des actors afin de pouvoir les glisser déposer sur les cartes, leurs effets sont dans leurs aptitudes**

## nouveautés V0.9.8

modif d'apparence des bouttons de maps

 modif de la font pour afficher le personnage s'exprimant dans le chat

## nouveautés V0.9.7

correction compendium de traits raciaux

## nouveautés V0.9.6

ajout compendium de tables aléatoire : les rencontres,  

ajout compendium de tables aléatoire : les évènements,  

## nouveautés V0.9.5

ajout compendium de spécialisation de classe,  

ajout compendium de objets magiques et trésors,

complément compendium équippement d'aventurier  

## nouveautés V0.9.4

ajout compendium d'équipement d'aventurier

## nouveautés V0.9.3

corrections css : les images des joueurs sont entièrement visible dans la fiche de perso

ajout d'une police de caractère qui reconnait les accents

## nouveautés V0.9.2

amélioration de compendiums ;

 grimoire et capacités du bestiaire

## nouveautés V0.9

ajout compendium capacité du bestiaire

## nouveautés V0.8

correction CSS pour compatibilité avec system DnD5 v0.93

## nouveautés V0.7

 ajout du compendium des traits raciaux

 compendiums races modifié pour pointer vers les traits raciaux

## nouveautés V0.6

 ajout du compendium des races

## nouveautés V0.5

 les compendiums sont automatiquement créés,

ajout du compendium des dons
