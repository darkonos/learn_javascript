 

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


//Action effectué sur id 'load'
 load.style.background = 'green';