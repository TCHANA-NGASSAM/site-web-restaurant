# Documentation du projet

Ce projet est un site web composé de plusieurs pages, chacune ayant un but spécifique. Voici un aperçu des fichiers et de leur fonction :

## Pages HTML

- **index.html** : Page d'accueil du site.
- **about.html** : Page présentant des informations sur le site ou l'entreprise.
- **services.html** : Page décrivant les services offerts.
- **contact.html** : Page contenant des informations de contact.

## Assets

### Sass

Le dossier `assets/sass/` contient tout le code source Sass, organisé comme suit :

- **abstracts/** : Contient des fichiers pour les variables, mixins, fonctions et placeholders.
  - `_variables.scss` : Variables Sass utilisées dans le projet.
  - `_mixins.scss` : Mixins réutilisables.
  - `_functions.scss` : Fonctions Sass personnalisées.
  - `_placeholders.scss` : Placeholders pour des styles réutilisables.

- **base/** : Styles généraux du site.
  - `_reset.scss` : Réinitialisation des styles par défaut du navigateur.
  - `_base.scss` : Styles de base pour le site.
  - `_typography.scss` : Styles typographiques.
  - `_utilities.scss` : Classes utilitaires.
  - `_responsive.scss` : Media queries pour rendre le site responsive.

- **layout/** : Structure globale du site.
  - `_header.scss` : Styles pour l'en-tête.
  - `_footer.scss` : Styles pour le pied de page.
  - `_navigation.scss` : Styles pour la navigation.
  - `_grid.scss` : Styles pour la grille de mise en page.

- **components/** : Éléments réutilisables.
  - `_buttons.scss` : Styles pour les boutons.
  - `_cards.scss` : Styles pour les cartes d'information.
  - `_forms.scss` : Styles pour les formulaires.
  - `_modal.scss` : Styles pour les modales.

- **pages/** : Styles spécifiques à chaque page.
  - `_home.scss` : Styles pour la page d'accueil.
  - `_about.scss` : Styles pour la page "À propos".
  - `_services.scss` : Styles pour la page des services.
  - `_contact.scss` : Styles pour la page de contact.

- **main.scss** : Point d'entrée pour importer tous les fichiers Sass.

### CSS

- **css/** : Contient les fichiers CSS compilés.
  - `main.css` : Fichier CSS compilé à partir des fichiers Sass.
  - `main.css.map` : Fichier de carte source pour le CSS compilé.

### JavaScript

Le dossier `assets/js/` contient les scripts JavaScript :

- **main.js** : Script JavaScript global pour le site.
- **pages/** : Scripts spécifiques à chaque page.
  - `about.js` : Script pour la page "À propos".
  - `services.js` : Script pour la page des services.
  - `contact.js` : Script pour la page de contact.

### Images

- **images/** : Contient les visuels du site.
  - `logo.svg` : Logo du site.
  - `hero.jpg` : Image principale du site.
  - **icons/** : Dossier contenant des icônes utilisées sur le site.

### Fonts

- **fonts/** : Dossier pour les typographies utilisées.

### Data

- **data/** : Dossier facultatif pour des fichiers JSON ou autres données.

## Configuration

- **.vscode/settings.json** : Fichier de configuration pour l'éditeur, notamment pour le compilateur Sass.

## Gestion de version

- **.gitignore** : Fichier spécifiant les fichiers et dossiers à ignorer par Git.

## Installation

Pour installer ce projet, clonez le dépôt et ouvrez-le dans votre éditeur de code. Assurez-vous d'avoir les dépendances nécessaires pour compiler le Sass et exécuter le JavaScript.

## Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage pour toute modification ou ajout.