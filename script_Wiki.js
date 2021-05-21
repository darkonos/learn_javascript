/*
• Le JavaScript est un langage dynamique (Permet de générer du contenu dynamique pour nos pages web)
• Le JavaScript est un langage (principalement) côté client et aussi coté serveur avec Node.js;
• Le JavaScript est un langage interprété (Tous les navigateurs connus possèdent leur interpréteur JavaScript);
• Le JavaScript est un langage orienté objet.
*/

//Placer le code JavaScript dans un fichier séparé
<script src="monScript.js" async></script>

/* 1.LES VARIABLES */
.....................

var //ancienne version
let //Nouvelle version

/*  il existe 7 types de valeurs différents : 
     ......................................

  String ou « chaine de caractères » en français ;
• Number (nombre entier, réel..)
• Boolean (true, fasle)
• Null (absence de valeur connue)
• Undefined (Variable à laquelle on à pas affecté de valeur)
• Symbol ()
• Object (structures complexes qui vont pouvoir stocker plusieurs valeurs en même temps)

Pour connaitre le type on utilise la fonction typeof(la variable);

/* CONCATENATION (A savoir) 
   ........................

lorsqu’on utilise le signe +, le JavaScript va considérer tout ce qui se situe après une chaine de caractères comme des
chaines de caractères. Ainsi, si on écrit 'un' + 2 + 4 , le JavaScript concaténera
en 'un24' tandis que si on écrit 2 + 4 + 'un', la valeur finale sera '6un'. */


/* Les littéraux de gabarits
   .........................

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
                     

/* LES CONDITIONS (les structures de contrôle conditionnelles )
   ............................................................
Les conditions vont nous permettre d’exécuter un certain nombre d’instructions si et
seulement si une certaine condition est vérifiée.

Exemple d'utilisation : on va pouvoir utiliser les conditions pour cacher un élément sur notre site si celui-ci est affiché 
ou pour l’afficher si celui-ci est caché.

  La condition if (si) ;
• La condition if… else (si… sinon) ;
• La condition if… elseif… else (si… sinon si… sinon)

*le code placé dans une condition n’est exécuté que si le résultat de la comparaison est true.

*dans une condition de plusieurs else if, c’est la première comparaison rencontrée validée qui va être retenue et les autres 
tests en dessous vont être ignorés.

//Les opérateurs de comparaison
  .............................

== Permet de tester l’égalité sur les valeurs
=== Permet de tester l’égalité en termes de valeurs et de types
!= Permet de tester la différence en valeurs
<> Permet également de tester la différence en valeurs
!== Permet de tester la différence en valeurs ou en types
< Permet de tester si une valeur est strictement inférieure à une autre
> Permet de tester si une valeur est strictement supérieure à une autre
<= Permet de tester si une valeur est inférieure ou égale à une autre
>= Permet de tester si une valeur est supérieure ou égale à une autre

*le JavaScript va automatiquement comparer la valeur à gauche de l’opérateur à celle à droite selon
l’opérateur de comparaison fourni et renvoyer le booléen true si la comparaison est
validée ou false si elle ne l’est pas.

//Les opérateurs logique
  ......................
AND (&&), OR(||), NO(!)

//L'opérateur ternaire
......................
Permet d'utiliser une syntaxe trsè codensée et accélérer la vitesse d’exécution du code.

 test ? code à exécuter si true : code à exécuter si false

 //L'instruction switch
 ......................
l’instruction switch représente une alternative à l’utilisation d’un if…else if…else.


/* LES BOUCLES (Les structures répétitives)
   ........................................
   Nous disposons de six boucles différentes en JavaScript :
• La boucle while (« tant que ») ;
• La boucle do… while (« faire… tant que ») ;
• La boucle for (« pour ») ;
• La boucle for… in (« pour… dans») ;
• La boucle for… of (« pour… parmi ») ;
• La boucle for await… of (« pour -en attente-… parmi »)

//Les opérateurs d’incrémentation et de décrémentation
  ....................................................
  ++x Pré-incrémentation : incrémente la valeur contenue dans la variable x, puis retourne la valeur incrémentée
  x++ Post-incrémentation : retourne la valeur contenue dans x avant incrémentation, puis incrémente la valeur de x
  --x Pré-décrémentation : décrémente la valeur contenue dans la variable x, puis retourne la valeur décrémentée
  x-- Post-décrémentation : retourne la valeur contenue dans x avant décrémentation, puis décrémente la valeur de x

  //La boucle while
   .................
  Permet de répéter une série d’instructions tant qu’une condition donnée est vraie.
  
  //La boucle do..while
    ...................
  La condition de sortie n’est évaluée qu’en fin de boucle, après le passage dans la boucle. Le code de la boucle sera donc
exécuté au moins une fois.

 //La boucle for
   .............
Contient trois « phases » à l’intérieur du couple de parenthèses : une phase d’initialisation, une phase de test (condition de sortie)
 et une phase d’itération (généralement une incrémentation). 

//L'instruction continue
  ......................
  Permet de sauter une itération de boucle et passer directement à la suivante.
  
let nombre = [12, 3, 4, 8, 9, 14];

for(i=0; i<nombre.length; i++) {

    if(nombre[i] % 2 != 0){
        continue;
    }

    console.log('les nombres pairs sont : ' +nombre[i]);
}

//L'instruction break
.....................
Permet de stopper l’exécution d’une boucle et sortir à un moment donné.

//Les boucles for… in, for… of et for await…of
..............................................
Elles sont utilisées pour parcourir des objets.

/*....LES FONCTIONS................
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
Ce sont des fonctions qui ne vont pas posséder de nom. Pour appeler une fonction qui n’a pas de nom, on va enfermer le code de notre 
fonction dans une 'variable' et utiliser la variable comme une fonction. 

//Fonctions récursives
  ....................
  C'est une fonction qui va s’appeler elle-même au sein de son code.
  permettre d’exécuter une action en boucle et jusqu’à ce qu’une certaine condition de sortie soit vérifiée.


/*......LES OBJETS........
Un objet est donc un conteneur qui va posséder un ensemble de propriétés(variables) et
de méthodes(fonctions) qu’il est cohérent de regrouper.

Chaque membre d’un objet est toujours composé d’un nom et d’une valeur qui sont séparées par :

Avantages de l'orienté objet: Permet d'otenir des scripts mieux organisés, meilleurs lisibilité et maintenabilité.

This : fait référence à l’objet et va permettre de définir et d’initialiser les propriétés et méthodes de l'objet créé..

Constructeur : C'est une fonction qui permet de créer des objets semblables avec le mot clé 'new'
lorsqu’on définit un constructeur, on utilise par convention une majuscule au début du nom de la fonction


/*......Les class........*/   

Création d'une class nommée "episode"

class episode {
    constructor(title, episode, hasBeenWatched) {   //Appel de la fonction 'constructor' qui devra accepter trois arguments

        this.title = title;  //Le mot clé 'this' fait référence à episode
        this.episode = episode; 
        this.hasBeenWatched = hasBeenWatched;
    }
}

//Création de 3 instances à partir de la class episode à l'aide du mot clé 'new'

let myEpisode = new episode(firstEpisode, secondEpisode, thirdEpisode);


/*......Les Arrays........*/

let episodes = ["firtsEpisode", "secondEpisode", "thirdEpisode"];

let howManyEpisode = episodes.length;

console.log(howManyEpisode);

/*........Les conditions...........*/

let isUserLoggedIn = false;

if(isUserLoggedIn) {

    console.log("User connected ! ");
}else {
    console.log("User no connected !");
}

/*.......Les boucles...............*/

/*exemple 1........................*/

const numberOfPassagers = 10;

for (let i = 0; i < numberOfPassagers; i++) {

    console.log("Passagé embarqué ! ");
}

console.log("Tous les passagers sont embarqués ! ");

Exemple 2  avec for in..........................

const passagers = [
    "Will Alexander",
    "Sarah Kate",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passagers) {
    console.log("Embarquement passagé" +" " +passagers[i] +" ! ");
    
}

let myBook = {

       title: "L'Histoire de Tao",
    
       author: "Will Alexander",
    
       numberOfPages: 250,
    
       isAvailable: true
    
    };
    
    let propertyToAccess = "title"
    
    let bookTitle = myBook[propertyToAccess];  // "L'Histoire de Tao"

    console.log(bookTitle);


/*.........Tableau d'objets.........................*/

    const passengers = [
        {
           name: "Will Alexander",
           ticketNumber: 209542 
        },
        
        {
            name: "Sarah Kate",
            ticketNumber: 169336
        },
        
        {
             name: "Audrey Simon",
             ticketNumber: 779042
        },
         
        {
             name: "Tao Perkington",
            ticketNumber: 703911
        }
    
     ]
        
        for (let passenger of passengers) {

           console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
        }


   /*...........Les fonctions..............*/

   function calculMoyenne(sommeNote, totalNotes) { //Ici on délare 2 paramètres dans la fonction

         let moyenneNotes =  (sommeNote / totalNotes);
         console.log(moyenneNotes);
   }

   /*Test perso sur un arrays */
   
   let notes = [12, 13, 8, 16, 17, 11];

   let somme = 0;
   let longTab = notes.length;
   
   for(let i = 0; i < notes.length; i++) {
   
       somme += notes[i];  
   }
   
   let moyenne = (somme / longTab);
   
   console.log(moyenne);

   /* Plus simple avec in */

   let notes = [19, 13, 14, 16, 13, 18];

   let somme = 0; 
   
   for(let i in notes) {
   
       somme += notes[i];  
   }
   
   console.log(somme / notes.length);


