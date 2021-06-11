/*
• Le JavaScript est un langage dynamique (Permet de générer du contenu dynamique pour nos pages web)
• Le JavaScript est un langage (principalement) côté client et aussi coté serveur avec Node.js;
• Le JavaScript est un langage interprété (Tous les navigateurs connus possèdent leur interpréteur JavaScript);
• Le JavaScript est un langage orienté objet.
. Le Javascript sert à créer de l'intéractivité entre la page et l'utilisateur
*/

//Le Javascript est facile à apprendre mais difficile à maitriser

//Intégré un script au sein d'un document HTML

<script defer src="monScript.js"></script>

/* Attributs à intégé dans le script
....................................

Par défaut, quand le navigateur charge le contenu d'une page HTML et qu'il rencontre un fichier Javascript, il va le télécharger ou
le charger(si déja présent dans le cache du navigateur) et ensuite il va l'éxécuter. Cela bloque le rendu de la page du visiteur et
le script risque de ne pas fonctionner correctement. 
 

- Attribut defer (A privilégié) : permet de charger ou télécharger le script en parralèle de l'analyse de la page HTML. Le script est éxécuté à la 
fin de l'analyse de la page.
- Attribut async : permet de charger ou télécharger le script en parralèle de l'analyse de la page HTML. Le soucis c'est que si le 
  script est chargé, il sera éxécuté et va bloquer l'analyse de la page sans attendre la fin de l'analyse.
