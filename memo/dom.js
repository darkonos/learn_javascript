
/*.........DOM............

 Le DOM est une interface de programmation pour des documents HTML ou XML qui représente le document (la page web actuelle) 
 sous une forme qui permet aux langages JavaScript d’y accéder et d’en manipuler le contenu et les styles mais aussi pour:
 - Ajouter, modifier, supprimer des éléments dans le document HTML.

API (Application Programming Interface) : interface (ensemble de code), grâce à laquelle un logiciel fournit des services à des clients.

Les API Javascript sont classés en deux catégories :

Les API intégrées aux navigateurs web qui sont rassemblées dans le BOM (Browser Object Model) fournit des propriétés et des méthodes permettant de réaliser des opérations complexes
- API DOM pour du développement web pour manipuler le HTML et le CSS d’une page
- API de Geolocation qui va nous permettre de définir des données de géolocalisation
- API Canvas qui permet de dessiner et de manipuler des graphiques dans une page

Les API externes proposées par certains logiciels ou sites
- API Google Map qui permettent d’intégrer et de manipuler des cartes dans les pages web 
- API Twitter qui permet d’afficher une liste de tweets sur un site
- API YouTube qui permet d’intégrer des vidéos sur un site

Pour accéder à l'API (Application Programming Interface) du DOM, il suffit d'utiliser l'objet 'document' associé à des 'méthodes'
pour nous permettre de manipuler le HTML et le CSS d’une page web.

/* 1. Les méthodes pour sélectionner un élément HTML
................................................... */

/*La méthode getElemmentById('id') , doit être utilisé impérativement avec l'objet 'document' , les autres peuvent être utilisés 
  avec un élément HTML selectionner précédement.
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

//récupérer le paragraphe en passant par un élément HTML sélectionner précédement (mon-article)
//On peut l'utiliser avec toutes les méthodes sauf avec getElementById
const articleID = document.getElementById('mon-article'); //mon-article sélectionner précédement

const p = articleID.querySelector('p'); //Selection du sélecteur CSS 'p'
p.style.background = 'grey'; //Action effectué 

//selectionner tous les liens de la page
const a = document.querySelectorAll('a'); //on peut aussi mettre un indice 

a[1].style.fontSize = '25px'; //indice pour le 2e lienk   


/* 2. Raccourci pour sélectionner l'élément body
...................................... */

const body = document.body;
body.style.background = 'grey'; //action effectuék


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

//Récupérer la classe de l'élément HTML 'h1'
console.log(h1.className); //lecture du contenu de la propriété h1

h1.className = 'test'; //On modifie le nom de la classe h1 'title' par 'test'

//Ajouter du contenu textuelle à un élément HTML
const article = document.getElementsByTagName('article')[0];

article.textContent = 'Bonjour';

/* 6. Méthodes pour selectionner ou modifier un attribue HTML
.......................................................... */
const article = document.getElementsByTagName('article')[0];

const id = article.getAttribute('data-id'); //Selection de l'attribue perso 'data-id'

article.setAttribute('data-id', 33) //Modification de l'attribue 'id'

/* 7. Créer un nouvel element (HTML ou textuel) pour l'ajouter au document HTML
............................................... */
const article = document.getElementsByTagName('article')[0];

const a = document.createElement('a'); //création d'un élément lien

//Avant de l'ajouter au document HTML, on modifie les différents attribus de l'élément 'a' et on lui ajoute du contenu textuelle
a.href = 'test.html' 
a.textContent = 'mon super lien'

//Ajouter le nouvel élément créé à l'arbre du DOM (document HMTL) ici, on ajoute un élément enfant à article (à la fin)
article.appendChild(a);

//Ajouter le nouvel élément au début de article
article.insertBefore(a, article.firstChild);

//création d'un noeud textuel et l'ajouter au document
const text = document.createTextNode('Bonjour à tous !!!');

article.appendChild(text); //On l'ajout au document

/* 8. Rétirer un noeud 
......................... */
const article = document.getElementsByTagName('article')[0];

article.removeChild(le noeud à retirer);





 













