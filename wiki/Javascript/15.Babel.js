
/* BABEL 

Utiliser pour transformer un code moderne en un code compatible par tous les navigateurs.

1. Installation de nodeJS 

NodeJS embarque un gestionnaire de dépendances (npm) qui permet d'installer babel au niveau du projet.

    *Installation de Node JS en admin
     > choco install nodejs -y
     > fermer la console et la réouvrir en admin

    *connaitre la version de nodeJS et npm
    > node -v 
    > npm -v

    *Babel
    - Se rendre sur babeljs.io puis setup et choisir CLI

    *Ouvrir un CLI (admin) et se placer dans le répertoire du projet
    > npm init -y //Va créer un fichier package.json

    *Installation des dépendances (copié à partir du site babel)
    > npm install --save-dev @babel/core @babel/cli 
    
     - @babel/core : le coeur de babel pour son fonctionement
     - @babel/cli  : pour utiliser babel en CLI
     - @babel/preset-env : permet de compiler le code JS en code compatible avec les anciens navigateur (norme EMASCRIPT post 2015)
     - babel-preset-minify : permet d'optimiser le code, utile sur un serveur de production.

     *les dépendances seront ajoutées au fichier package.json

     *Créer un nouveau dossier js dans le projet pour compiler le code
      On indique une commande dans le fichier package.json après scripts: {
      "build": "babel src/js -d js" //src/js = dosier source et js dosier contenant les fichiers compilés
     
    *Dans le CLI on compile 
     > npm run build
     
     - Un nouveau dossier js sera créé avec une copie des fichiers sans aucune modification
     - Il faudra indiqué à babel comment on veut compilé les fichiers
     - On cré un fichier .babelrc à la racine du projet et on entre les informations
    {
    "presets": ["@babel/preset-env"]
    }
    
    *On compile
    > npm run build
    - Le code est maintenant compilé pour les anciens navigateurs

    *On optimise maintenant le code avec minify
    {
    "presets": ["@babel/preset-env", "minify"]
    }

    *On compile
    > npm run build
    - Le code est compressé, illisible mais le téléchargement sera plus rapide et optimisé sur un serveur en production.