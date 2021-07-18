/* Tableaux
..........

On peut utiliser des propriétés et méthodes qui sont propres aux Arrays.

Les propriétés : 

- .lenght() : affiche le nombre d'élément du tableau

Les méthodes :

- .push()    : ajoute une nouvelle valeur en fin de tableau
- .unshift() : ajoute une nouvelle valeur en début de tableau
- .pop()     : supprime un élément en fin de tableau
- .shift()   : supprime un élément en début de tableau

*/

/* 1. Méthodes de boucle pour remplacer les boucles classique et optimiser le code */


const tasks = ['tourner des tutos ', 'Faire du sport']

for(let i=0; i < tasks.length; i++) {
    console.log(tasks[i])
}

//Méthode foreach
//Permet d'itérer uniquement des éléments d'un tableau
tasks.forEach(tasks => console.log(tasks)) //On renseigne le nom du tableau et les actions à effectuer

//Méthode for of
//Permet de faire un listing de tous les éléments itérables (un tableau ou un objet qui liste les éléments)

for(let task of tasks) { //On cré une variable (ici task) qui va récupérer un élément à chaque itération, et on renseigne l'objet itérable(tasks)
    console.log(task)
}

/*On peux utiliser 'for of' sur des objets qui liste des éléments et du coup itérer chacune des valeurs .
exemple sur la méthode getElementsByTagName() */

const boutons = document.getElementsByTagName('button')

for(let bouton of boutons) {
  bouton.addEventListener('click', e => console.log(`${e.target.textContent} cliqué ! `)) //On récupère la cible qui a été cliqué, On ajout un évènement les uns à la suite des autres 
}

/* 2. Méthode pour créer un tableau à partir d'un tableau éxistant */

const tasks = ['tourner des tutos ', 'Faire du sport']

//Utilisation d'une méthode pour pré-fixé chaque élément du tableau
/* INFOS : Les méthodes utilisées sur les tableaux ne permettent pas de modifier le tableau lui même mais une copies de ce tableau. */

const prefix = tasks.map(task => `tâches : ${task}`) //La méthode map permet de créer un nouveau tableau avec les résultats qui seront retournés par la fonction mis en argument

console.log(prefix)