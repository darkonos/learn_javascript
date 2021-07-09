 

// Notre application


//DOM selection des id dans le html

const list = document.getElementById('list');
const input = document.getElementById('input');
const add = document.getElementById('add');;
const clear = document.getElementById('clear');
const url = document.getElementById('url');
const load = document.getElementById('load');

//On récupère le tableau des tâches deja existantes
const tasks = ['Salle de sport', 'Tourner des tutos'];

//On ajoute chaque tâches à la liste à puces
for(let i=0; i < tasks.length; i++) 
{
    //On vérifie si on a une chaine de caractère non-vide dans tasks
    if(typeof === 'string' && tasks[i])
    {
        const li = document.createElement('li');
    }

}


