/* Tableaux
..........

On peut utiliser des propriétés et méthodes qui sont propres aux Arrays.

/* 1. Les propriétés : 

- .lenght() : affiche le nombre d'élément du tableau

/* 2. Les méthodes souvent utilisées :

- .push()    : ajoute une nouvelle valeur en fin de tableau
- .unshift() : ajoute une nouvelle valeur en début de tableau
- .pop()     : supprime un élément en fin de tableau
- .shift()   : supprime un élément en début de tableau

*/

/* 2.1 Méthodes de boucle pour remplacer les boucles classique et optimiser le code */

/*Ici la méthode classique pour boucler sur un tableau */
const tasks = ['tourner des tutos', 'Faire du sport']

for(let i=0; i < tasks.length; i++) {
    console.log(tasks[i])
}

/* 2.2 Méthode foreach
Permet d'itérer uniquement sur chaque élément d'un tableau */

tasks.forEach(task => console.log(task)) //On renseigne l'élément qui sera transmis et une fonction pour les actions à effectuer

/*  2.3 Méthode for of
Permet de faire un listing de tous les interfaces itérables (un tableau ou un objet qui liste les éléments) */

for(let task of tasks) { //On crée une variable (ici task) qui va récupérer un élément à chaque itération dans l'objet itérable(tasks)
    console.log(task)
}

/*On peux utiliser 'for of' sur des objets qui liste des éléments et du coup itérer sur chacune des valeurs .
exemple sur la méthode getElementsByTagName() */

const boutons = document.getElementsByTagName('button');

for(let bouton of boutons) {
  bouton.addEventListener('click', e => console.log(`${e.target.textContent} cliqué ! `)) //On récupère la cible qui a été cliqué, On ajout un évènement les uns à la suite des autres 
}

/* 2.4  Méthode pour créer un tableau à partir d'un tableau éxistant */

const tasks = ['tourner des tutos', 'Faire du sport'];

//Utilisation d'une méthode pour pré-fixé chaque élément du tableau
/* INFOS : Les méthodes utilisées sur les tableaux ne permettent pas de modifier le tableau lui même mais une copie créé de ce tableau. */
//La méthode map permet de créer un nouveau tableau qui contiendra les valeurs qui seront retournés par la fonction qu'on mettra en argument

const prefix = tasks.map(task => `tâches : ${task}`) //On pré-fixe chaque élément task avec 'tâches :'

console.log(prefix)

/* 2.5 Méthode filter 
Permet de filter un tableau */

const tasks = ['tourner des tutos', 'Faire du sport', 'Dormir']; 

const filter = tasks.filter(task => task.length > 6) //La fonction doit retourner un booleen (true) pour que les valeurs du tableau soit copiées dans le nouveau tableau 'filter'
console.log(filter); //Seul les deux premières valeurs du tableau seront affichés, car 'dormir' contient moins de 6 caractères


/* 2.6 La décomposition
Permet de récupérer facilement des valeurs précise se trouvant dans une structure (tableau, littéral d'objet) afin de les stocker
dans des variables qu'on aura définies. */

const tab = [22, 44, 56, 58, 99];

//Ce qu'on fait habituellement
// const a  = tab[0];
// const b = tab[1];

//Avec la décomposition on crée une structure qui soit équivalente à l'objet(ici tab) qu'on souhaite décomposé
const [a, b] = tab; // correspond à ce qu'on fait habituellement mais sur une ligne
console.log(a, b);

//On peut aussi stocker la première valeur dans une variable (c) et le reste des valeurs dans un autre tableau (...d) avec l'opérateur ...points

const [c, ...d] = tab;
console.log(c, d);

//Avec les objets
const person = {
    name: 'steven',
    age: 27,
    mail: 'info@gmail.com'
};

const {name, mail} = person;
//const {name, ...reste} == person //On peut aussi stocker la première valeur dans une variable (name) et le reste des valeurs dans un autre tableau (...reste) avec l'opérateur ...points
console.log(name, mail);

