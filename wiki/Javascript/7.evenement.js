/* 10. Les évenements (voir MDN)
.....................

Permet d'associer des évènements(scripts) aux éléments html qu'on a sélectionné avec le DOM dans le but de déclencher une fonction
au moment ou l'évènement se produira sur l'élément sélectionner par l'utilisateur.


Les évenements basique
......................

- Clique sur un objet (boutton ou image)
- chargement de la page ou d'une image
- survole d'un objet quelconque
- redimmentionement du navigateur, etc..

Evenements à la souris (voir MDN) :

- onclick     : quand l'utilisateur clique sur l'objet
- onchange    : quand la valeur d'un élément change (ex: quand la valeur d'une liste déroulante se modifie ou une checkbox)
- onDblClick  : double clique sur l'objet
- onMouseOver : au survol d'un objet
- onMouseOut  : quand on quitte le survol de l'objet

ex : <input type="button" value="button" onclick="le code ou une fonction" />

Evenements au clavier :

- onKeyUp     : quand la touche du clavier est relevée
- onFocus     : détecte si un champ est activé pour l'écriture


/* 1. Associer un évènement à un bouton */
const bouton = document.getElementsByTagName('button')[0];

bouton.addEventListener('click', () => {  //Appel de la méthode addventListener qui prend 2 paramètres, l'événement click et une fonction Arrow
    if (document.body.style.backgroundColor === 'purple') {
        document.body.style.backgroundColor = 'grey';
    } 
    else {
        document.body.style.backgroundColor = 'purple';
    }
    
})

/* 1.2 Annuler l'action par défaut d'un élément html */
//exemple avec un lien :

const lien = document.getElementById('lien');

lien.addEventListener('click', () => console.log('Salut'));

lien.addEventListener('click', e => {  //On injecte l'objet event(nom à choisir, ici 'e') qui permet de récupérer des infos sur l'évènement 'click' qui vient de se produire
    console.log('Salut');
    e.preventDefault() //La méthode preventDefault() permet d'annuler l'action par défaut d'un élément html(ici lien)
});

/* 1.3 Les événements standards (voir MDN)

- KeyboardEvent.key : Permet de récupérer la valeur de la touche qui est pressée. */

const input = document.getElementById('input');

input.addEventListener('keydown', e => {  //Utilisation de l'évènement keydown appartenant à KeyboardEvent.key
    if(e.key === 'Enter') { //Si l'évenment est = touche entrée préssée
        console.log('Touche enter pressée !'); 
    }
   
});

/* 1.4 La propagation
Lorsqu'un évenement se produit sur un élément html, cet évenement va remonter vers les différents éléments parents du document et 
jusqu'au body.
