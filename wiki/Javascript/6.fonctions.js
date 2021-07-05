/* 7.LES FONCTIONS
................

Bloc de code nommé et réutilisable et dont le but est d’effectuer une tâche précise.

Les fonctions prédéfinies(*méthodes) sont des fonctions du langage fonctions prêtes à l’emploi car il nous suffit de les appeler 
pour nous en servir.(Ex: random(), replace(), lenght()..)

Une méthode est le nom donné à une fonction définie au sein d’un objet.

//Fonction personnalisée
  ......................

  function nomDeLaFonction(Argument1, Argument2...)

//Les différences de portée entre les variables var et let
  ........................................................

  - let : la variable va avoir une portée dite « de bloc » Elle sera accessible dans le bloc dans lequel elle a été définie et 
  dans les blocs que le bloc contient.
  - var : la variable aura une 'portée élargie' puisque cette variable sera alors accessible dans tous les blocs de la fonction.

//Fonctions anonymes
  ..................

Ce sont des fonctions qui ne vont pas posséder de nom. 
Une fonction anonyme s'éxécute directement après que l'évenement (ex : onclik) soit déclenché.

//Fonctions récursives
  ....................

  C'est une fonction qui va s’appeler elle-même au sein de son code.
  permettre d’exécuter une action en boucle et jusqu’à ce qu’une certaine condition de sortie soit vérifiée.