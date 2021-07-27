/*......LES EXCEPTIONS........

Quand dans le code JS, on aura un comportement ou une erreur inatendue qui va se produire, une exceptions va être relevé. Un message
va s'afficher dans la console du site. On doit gérer cette erreur exception afin de résoudre comment le script doit se dérouler. */

/* 1. Le mode strict 

Mode qui 'soppose au mode par défaut du langage JS qui est le mode non-strict. Quand le code JS est en mode non-strict, il est beaucoup
plus permissif et le code est interprétré moins rapidement par le moteur JS.

Les intérêts du mode strict :
    - Remplacer les erreurs qui sont habituellement silencieuse (qui sont invisibles, le navigateur ne les traite pas comme des erreurs)
      dans le navigateur et qui vont devenir des exceptions et quand on active le mode strict des erreurs qui n'éxistaient pas à la 
      base vont disparaitre.
    - Permettre au moteur JS de faire des optimisations et permettre au code d'être éxécuté plus rapidement par le moteur JS.

/* 1.1 Utilisation du mode strict */

//On inscrit en première ligne du fichier JS 'use strict' et tout le code du fichier sera interprété en mode strict
'use strict'

//On peut l'utiliser à l'intérieur et en première ligne d'une fonction 
function hello() {
    'use strict'
}

/* 1.2 Intercepter les exceptions et les traiter (video 72)

Quand les erreurs ne sont pas généré par le JS, c'est à nous de lancer les erreurs
Pour intercepter et traiter les erreurs par soit même, on entoure le code par un bloc 'try catch' */

try {
    const div = document.createElement() //si le code code contient une erreur, l'erreur sera interprétrer dans le catch{}
    //Lance une erreur de "typeError"
} catch (e) { //Objet (ici e) représentant l'erreur, on lui injecte l'erreur contenu dans le try{}
    console.error(e); //Généralement, on utilise 2 propriétés dessus l'objet e (e.message qui correspond au message d'erreur et e.name le  nom de l'erreur)
    //On pourra ensuite afficher sur un élément html qu'il y à eu une erreur lors de l'exécution du script
}