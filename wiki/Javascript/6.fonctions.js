/* 7.LES FONCTIONS
................

Bloc de code nommé et réutilisable et dont le but est d’effectuer une tâche précise.

Les fonctions prédéfinies(*méthodes) sont des fonctions du langage prêtes à l’emploi car il nous suffit de les appeler 
pour nous en servir.(Ex: random(), replace(), lenght()..)

Une méthode est le nom donné à une fonction définie au sein d’un objet. */

// 1. Création d'un fontion
function nomDeLaFontion(paramètre1, paramètre2) //On peut aussi mettre une valeur par défaut (parametre2 = 'valeur')
   /* Instruction  */
   return valeur;
}

nomDeLaFonction(Argument1, Argument2); //Appel de la fonction  

/* 1.1 Portée des variables

- Portée globale  : Définie en dehors de tous blocs et accessible partout dans le programme.
- Portée locale   : Accessible et utilisable que dans le bloc(fonction, boucle, condition) ou elle a été créé.

Les différences de portée entre les variables var et let
........................................................

  - let : la variable va avoir une portée dite « de bloc » Elle sera accessible dans le bloc dans lequel elle a été définie.
  - var : la variable aura une 'portée élargie' puisque cette variable sera alors accessible dans tous les blocs de la fonction. */

  // 1.2 L'pérateur ...
  
function message(message, ...names) //...names est un tableau qui va contenir tous les arguments 
{
    return `${message} ${names}`;
}

console.log(message('Bonjour', 'Anais', 'Georges', 'Jean'));

/* 1.3 Fonctions anonymes

Ce sont des fonctions qui ne posséde pas de nom. 
On peut les passer en paramètre à d'autres fonctions (fonction d'ordre supérieur)
Elle s'éxécute directement après qu'un évènement soit déclenché.  */

// setInterval(fonction, interval en m/s) : fonction qui permet d'éxécuter à interval régulier, le contenu d'une fonction qu'on aura passer en paramètre.

//Utilisation d'une fonction anonyme dans la fonction setInterval() qui est une fonction d'ordre supérieur
setInterval( function() {

    console.log('Hello');
}, 2000);


/* 1.4 Fonctions Arrow
Ce sont des fonctions anonyme avec une syntaxe post 2015 
- Elle n'a pas besoin d'avoir le mot clé function, il suffit de rajouter => après () */

setInterval( () => {

    console.log('Hello');
}, 2000);

/* Particularité de la fonction Arrow
 - Si la fonction anonyme possède aucun ou plusieurs paramètres, il faut laisser les ()
 - Si la fonction anonyme possède 1 seul paramètre, on indique le paramètre sans mettre de ()  voir les exemples :   */

 //code1 :
 setInterval( name => {  //un seul paramètre

  console.log('Hello');
}, 2000);

//code2 : 
setInterval( (name, lastname) => { //Plusieurs paramètres

  console.log('Hello');
}, 2000);

/* Si la fonction ne possède qu'une seule instruction, les {} peuvent être supprimées */

setInterval(  name => console.log('hello'), 2000);


/* Fonctions récursives
  ....................

  C'est une fonction qui va s’appeler elle-même au sein de son code.
  permettre d’exécuter une action en boucle et jusqu’à ce qu’une certaine condition de sortie soit vérifiée.