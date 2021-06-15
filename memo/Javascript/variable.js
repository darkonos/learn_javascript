/* 1.LES VARIABLES 
.....................

- var : ancienne version
- let : nouvelle version
- const : constante

/*  il existe 7 types de valeurs différents : 
     ......................................

  String ou « chaine de caractères » en français ;
• Number (nombre entier, réel..)
• Boolean (true, fasle)
• Null (absence de valeur connue)
• Undefined (Variable à laquelle on à pas affecté de valeur)
• Symbol ()
• Object (structures complexes qui vont pouvoir stocker plusieurs valeurs en même temps)

Pour connaitre le type d'une variable, on utilise la fonction typeof(la variable);

2.Strings
.............

- "Guillemets double" : 
- 'Guillemets simple' : A utiliser quand il n'y a pas de paramètre variable ou expressions à l'intérieur
- `Templates litterals` (Littéraux de gabarits) : Le retour à la ligne et expressions seront prise en compte. ex : ${name} 
   A utiliser, au lieu de la concaténation. (donne plus de visibilité au code)

 On peut manipuler les strings avec des propriétés (.length) et méthodes (toUpperCase)

 3.Booleans
..............

- False : si une variable contient : 0, chaîne vide, null, undefined, NaN
- true : tout le reste est considéré comme vrai 

4.CONCATENATION (A savoir) 
   ........................

lorsqu’on utilise le signe +, le JavaScript va considérer tout ce qui se situe après une chaine de caractères comme des
chaines de caractères. Ainsi, si on écrit 'un' + 2 + 4 , le JavaScript concaténera
en 'un24' tandis que si on écrit 2 + 4 + 'un', la valeur finale sera '6un'. */

/* typeof
..........

C'est un opérateur unaire(besoin d'une seul expression pour fonctionner) qui permet de récupérer le type d'une valeur qu'on lui passe en 
paramètre.

Très utile pour s'assurer dans un script du type de la valeur afin d'éviter des erreurs.
Attention car typeof considére les Arrays comme des Objets ! il faudra utiliser  une autre méthode.


5.Les littéraux de gabarits
...........................

Il existe en fait une troisième manière introduite récemment d’entourer des chaines de
caractères en JavaScript qui va utiliser des accents graves ` 
Cela signifie notamment qu’on va pouvoir placer du texte et des variables ensemble sans
avoir besoin d’utiliser d’opérateur de concaténation puisque les variables vont être
interprétées, c’est-à-dire remplacées par leur valeur. exemple : */

let x = 5;
let y = 6;

alert(`x contient ${x}
       y contient ${y}
       Leur somme vaut : ${x + y}`);
                     
