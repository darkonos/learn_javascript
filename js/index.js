 

// Notre application TODO LIST


// 1. DOM selection des id dans le html

const list = document.getElementById('list');
const input = document.getElementById('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const url = document.getElementById('url');
const load = document.getElementById('load');

// 0. On récupère le tableau des tâches deja existantes
const tasks = ['Salle de sport', 'Tourner des tutos'];

// 3. Fonction qui ajoute les tâches au DOM avec un boutton de suppression auquel on attache un évènement
function taskToDOM(task) {
 
     //On vérifie si on a une chaine de caractère non-vide dans task
     if(typeof task === 'string' && task)
     {
         //Création des éléments html pour les ajouter dans notre ul (id= list)
         const li = document.createElement('li'); //Création d'un élément de liste
         const remove = document.createElement('button'); //Création d'un button pour supprimer la tâche créé
 
         li.textContent = task;  //Ajout du texte à li
         remove.textContent = 'REMOVE'; //On nomme le button

         //Ajout d'un évènement au bouton remove
         remove.addEventListener('click', () => {
            list.removeChild(remove.parentNode); //On supprime l'élément parent de remove (li)
         });
 
         li.appendChild(remove); //Ajout de remove en tant enfant à li
         list.insertBefore(li, list.firstChild); //Ajout de li devant le premier enfant de list
     }
}

// 2. On ajoute chaque tâches à la liste à puces
for(let i = 0; i < tasks.length; i++) 
{
   taskToDOM(tasks[i]); //Envoi comme argument tasks[i] en paramètre à la fonction taskToDOM()

}

// 4. Gestion des évènements pour ajouter une nouvelle tâche à l'aide du bouton ADD

//Fonction qui gère l'ajout de tâche avec le bouton ADD et la touche 'Enter'
function newTask() {
    input.focus(); //La méthode focus() permet à un élément de prendre le focus et le garder
}

//4.1 Ajout d'un évènement pour ajouter une tâche à l'aide du bouton ADD
add.addEventListener('click', newTask)
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        newTask();
    }
})

