/* 1. JAVASCRIPT 

Création : 1995 par Brendan Eich qui participera également à la création de la fondation Mozilla.
Standartisation : 1997 sous le nom ECMAScript


- Langage de programmation sous forme de scripts, c’est-à-dire sans phase de compilation du code source vers un langage de plus bas niveau.
  L’exécution du script sefait directement par le navigateur à partir du code écrit par le développeur.
- Langage interprété (Tous les navigateurs connus possèdent leur interpréteur JavaScript)
- Langage événementiel, à l’écoute de tous les événements qui peuvent se produire, comme un clic ou une minuterie. À chaque événement 
  intercepté, une action peut être déclenchée.
- langage orienté objet. Il utilise la notation pointée pour accéder aux propriétés et fonctionnalités. Chaque élément de la page est un
  objet de l’arborescence de l’objet maître window.
- Langage dynamique (Permet de générer du contenu dynamique pour nos pages web)
- Langage (principalement) côté client et aussi coté serveur avec Node.js

*/

/* 2. LES POSSIBILITÉS DU JAVASCRIPT 

2.1 Utilisation coté client et exécuté par le navigateur dans une page web est parfaitement adapté pour les traitements suivants :

Assistance de saisie des formulaires
 - Contrôle et validation de saisie
 - Affichage de messages d’aide à la saisie
 - Éditeur de texte enrichi

Sauvegarde de données sur le poste local :
 - Via les cookies
 - Via une zone disque dédiée
 
Gestion des nombres, dates et heures :
 - Calculs mathématiques
 - Calculs sur les dates
 - Affichage dans le format du pays de l’utilisateur

Animations graphiques :
 - Menus et éléments de navigation
 - Animations esthétiques
 - Défilements, diaporamas, zooms
 - Graphiques animés et interactifs
 - Cartographies
 - Jeux

Appels asynchrones vers le serveur pour actualiser la page
 - Cours de Bourse
 - Chat de messagerie
 - Alerte en direct
 - Sauvegarde de saisie automatique en temps réel
 - Affichage de services externes
 - Liste des posts d’un réseau social
 - Mesure d’audience
 - Campagne publicitaire

/* 2.2 utilisé côté serveur

 Il est capable de remplir l’ensemble des fonctionnalités d’un langage serveur classique comme PHP, ASP, Python, C, Java…

 - Forums, 
 - outils de statistiques, 
 - interfaces d’administration…

/* 2.3 LIMITES ET SÉCURITÉS DU JAVASCRIPT

Coté client :

Etant exécuté localement à l’intérieur d’un navigateur qui sécurise son usage, a de nombreuses limites fonctionnelles.
- La sécurité du JavaScript et des navigateurs est garantie uniquement en l’absence d’action volontaire de l’utilisateur (Virus, ransomware..)
- Il n’est donc pas possible de cacher son code source au monde extérieur. Le navigateur en a besoin pour l’exécuter, comme il a besoin
  du code HTML pour interpréter et afficher la page.

Coté serveur :
- le code JavaScript côté serveur n’est pas du tout visible par le monde extérieur. Il s’exécute sur le serveur et retourne du code HTML 
  ou des données, le plus souvent au format JSON.


/* 3. INTEGRATION D'UN SCRIPT AU SEIN DU DOCUMENT HTML */

<script defer src="monScript.js"></script>

/* Attributs à intégé dans le script
....................................

Par défaut, quand le navigateur charge le contenu d'une page HTML et qu'il rencontre un fichier Javascript, il va le télécharger ou
le charger(si déja présent dans le cache du navigateur) et ensuite il va l'éxécuter. Cela bloque le rendu de la page du visiteur et
le script risque de ne pas fonctionner correctement. 
 

- Attribut defer (A privilégié) : permet de charger ou télécharger le script en parralèle de l'analyse de la page HTML. Le script est
  éxécuté à la fin de l'analyse de la page.
- Attribut async : permet de charger ou télécharger le script en parralèle de l'analyse de la page HTML. Le soucis c'est que si le 
  script est chargé, il sera éxécuté et va bloquer l'analyse de la page sans attendre la fin de l'analyse.
