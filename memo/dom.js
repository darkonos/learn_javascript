
/*.........DOM............

 Le DOM est une interface de programmation pour des documents HTML ou XML qui représente le document (la page web actuelle) 
 sous une forme qui permet aux langages JavaScript d’y accéder et d’en manipuler le contenu et les styles.

Pour accéder à l'API (Application Programming Interface) du DOM, il suffit d'utiliser l'objet 'document' associé à des 'méthodes'
pour sélectionner un ou des éléments de la page HTML pour faire différentes actions dessus.

/* 1. Les méthodes pour sélectionner un élément HTML
................................................... */

/*La méthode getElemmentById('id') , doit être utilisé impérativement avec l'objet 'document' , les autres peuvent être utilisés 
  avec un élément HTML selectionner précédement.é
  Pour les utiliser, on les stock dans une variable */

//Sélectionner un élément HTML Par son ID
const articleID = document.getElementById('mon-article');
articleID.style.border = '10px solid black'; //Actions effectué dessus

//Selectionner un élément CSS
const p = querySelector('p');



/* 1.1 Les méthodes pour sélectionner plusieurs éléments HTML 
.............................................................*/

//Pour récupérer l'ensemble d'une balise (ex: article, h1, etc..), l'indice permet de récupérer une balise précise
articleTagName = document.getElementsByTagName('article')[1]; //ici l'indice indique le 2e article
articleTagName.style.border = '8px solid red'; //Action effectué

//Par sa  classe
const title = document.getElementsByClassName('title')[0]; 
title.style.background = 'grey';  //Action effectué

//récupérer le paragraphe en passant par un élément HTML sélectionner précédement (mon-article dans articleID)
const p = articleID.querySelector('p');
p.style.background = 'blue'; //Action effectué 

//selectionner tous les liens
const a = document.querySelectorAll('a'); //on peut aussi mettre un indice 

a[1].style.fontSize = '25px'; //indice pour le 2e lien


/* 2. Raccourci pour sélectionner l'élément body
...................................... */

const body = document.body;
body.style.background = 'grey'; //action effectué


/* 3. La Propriété style
......................*/

//On indique le nom d'une constante d'une variable qui sélectionne déja un élément HTML (ici la const title en haut)

title[0].style.color = 'blue';

/* 4. Méthodes pour sélectionner un élément par rapport à un autre élément
............................................................ */

//La propriété children permet de selectionner les enfants d'un élément qui est déja sélectionner (ici les enfants de article)

//code HTML
<article id="mon-article" data-id="25">
        <h1 class="title">Mon titre</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, <a href="">blablabla</a></p>
        <a href="">Mon lien</a>
    </article>


const article = document.getElementById('mon-article');

//Selection de l'élément enfant depuis l'élément parent
const p = article.children[1] //la const p récupère un tableau avec les 3 enfants de article(h1, p, a), ici on selectionne le 2e enfant
p.style.background = 'red'; //Action effectué

//Sélectionner directement le 1er enfant du parent
const h1 = article.firstElementChild //Appel de la propriété firstElementChild

//Sélectionner le dernier enfant du parent 
const a = article

//Sélection par rapport aux éléments voisins
const h1 = p.previousElementSibling //sélection de l'élément 'h1' précédent l'élément 'p'

const h1 = a.nextElementSibling //Sélection de l'élément 'a' situé après l'élément 'p'

//Sélectionner un élément parent depuis un élément enfant
const h1parent = h1.parentNode;

/* 5.Les propriétés utiles 
...........................
Ses propriétés sont disponibles en lecture et écriture */

const h1 = document.getElementsByTagName('h1')[0];

//Récupérer la classe de l'élément HTML et la modifier
console.log(h1.className);

h1.className = 'test'; Modification
 













