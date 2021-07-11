
/*.........DOM............
Le DOM est une API qui permet de faire le lien entre le Javascript et le document html
 Le DOM représente la structure du document html ou XML sous une forme d'arbre et qui permet aux langages JavaScript d’y accéder effectuer des actions :
 - Ajouter
 - modifier
 - supprimer des éléments html et css
 - assigner des évènements

 
Pour accéder à l'API (Application Programming Interface) du DOM, il suffit d'utiliser l'objet 'document' associé à des 'méthodes'
et propriétés pour nous permettre de manipuler le HTML et le CSS d’une page web.

- Children : élément html qui descend d'un élément parent
- Noeuds   : chaque éléments de la page html (texte, commmentaire, html)

/*..............................................................................................................................................................*/


/*#################...1.0 LES METHODES...#####################*/

// 1.1 Sélectionner un seul élément HTML Par son ID
JS : const articleID = document.getElementById('mon-article'); //On stock l'élément dans une variable

// 1.2 Sélectionner un regroupement éléments HTML qui correspond à une balise précise (ex: article, h1, etc..)
JS : articleTagName = document.getElementsByTagName('p'); // Tous les paragraphe sont sélectionner
JS : articleTagName = document.getElementsByTagName('p')[1]; //ici l'indice sélectionne uniquement le 2e paragraphe


// 1.3 Sélectionner tous les éléments html qui ont une certaine classe associé
JS : const title = document.getElementsByClassName('title')[0];

// 1.4 Sélectionner un seul élément à partir de son sélecteur css associé
HTML : <button class="bouton">cliquez-ici</button>
JS : const bouton = document.querySelector('.bouton'); //on sélectionne le sélecteur css portant la class '.bouton'

// 1.5 Sélectionner un ou plusieurs éléments qui correspond au sélecteur css associé
HTML : <button class="bouton">cliquez-ici</button>
JS   : const bouton = document.querySelectorAll('.bouton') // On sélectionne tous les sélecteurs css portant la class '.bouton' 
JS   : const bouton = document.querySelectorAll('.bouton')[0]; //On sélectionne le premier sélecteur css portant la class '.bouton'

// 1.6 Raccourci pour sélectionner l'élément body
JS : const body = document.body;
     
// 1.7 Sélectionner tous les liens d'une page HTML
JS     : const a = document.querySelectorAll('a');  
Action : a[1].style.fontSize = '25px'; //indice pour le 2e lien 

/* IMPORTANT: 
     - Quand on récupère un élément, on le stocke dans une variable ouo constante et ensuite on apllique différentes actions
     - Pour getElementByID et querySelector qui sélectionne un seul élément. Dans le document html, seul le premier élément qui correspond à la recherche sera sélectionner
       les autres seront ignorés.
     - Pour getElementsByTagName, getElementsByClassName et querySelectorAll, ils vont sélectionner tous les éléments correspondant à la recherche et seront mis dans un tableau
       et chaque élément pourra être accessible par leur indice.
     - Seul l'élément getElementByID doit être utilisé impérativement avec l'objet document. Les 4 autres peuvent être utilisés avec un élément html qui a lui même été 
       sélectionner précédement. Exemple : article.getElementsByTagName('element') ici la recherche de l'élément se fera uniquement dans article.
      
 Conseil : Au niveau du moteur Javascript, il est conseiller d'utiliser querySelector et querySelectorAll (7M/s) qui sont des méthodes plus récentes même si elles onst moins rapides
           que les autres (15M/s). */

// 1.8 Sélectionner ou modifier un attribut html
// A priviligier s'il n'y a pas de propriété pour sélectionner l'attribut perso
const article = document.getElementsByTagName('article')[0];
article.setAttribute('data-id', 34); // Permet de modifie la valeur
const id = article.getAttribute('data-id'); //Permet de récupérer la valeur
console.log(id); // On affiche le contenu de id

// 1.9 Créer un nouvel élément html
//Il faut utiliser la méthode createElement de l'API Object Model
const article = document.getElementsByTagName('article')[0];
const a = document.createElement('a') //Création d'un nouvel élément a
a.href = 'test.html'; //Création du lien html
a.textContent = 'Nouveau lien'; //Ajout de contenu textuel
article.appendChild(a); //Ajout du lien à la fin  dans l'élément parent article
article.prepend(a); // Ajout du lien au début dans l'élément parent article (Au stade expérimentale, privilégier inserBefore())
article.insertBefore(a, article.firstChild); //On indique 2 paramètres, l'élément lequel sera devant votre nouveau élément a
article.insertBefore(a, article.lastChild); //On ajoute le a après dernier élément de article

// 2.0 Remplacer un élément présent dans le html par un nouvel élément créé
const article = document.getElementsByTagName('article')[0];
//A revoir !

// 2.0 Création d'un noeud textuel
const article = document.getElementsByTagName('article')[0];
const text = document.createTextNode('Bonjour à tous !'); //Création du texte
article.appendChild(text); //On ajoute le text au document html

// 2.1 Rétirer un noeud du DOM
const article = document.getElementsByTagName('article')[0];
article.removeChild(Ancien); //On supprime le noeud ancien dans article


/*################...2.0 LES PROPRIETES...#####################*/


// 2.1 Sélectionner un élément enfant par rapport à un autre élément parent
JS : const p = article.children[1]; //la const p récupère un tableau avec les 3 enfants de article(h1, p, a), ici on selectionne le 2e enfant

// 2.2 Sélectionner directement le 1er enfant du parent (article)
const h1 = article.firstElementChild; 

// 2.3 Sélectionner le dernier enfant de l'élément parent (article)
const a = article.lastElementChild;

// 2.4 Sélection par rapport aux éléments voisins
const article = document.getElementById('mon-article');
const p = article.children[1]; 
const h1 = p.previousElementSibling //sélection de l'élément 'h1' précédent l'élément 'p'

const h1 = p.nextElementSibling //Sélection de l'élément 'a' suivant l'élément 'p'

// 2.5 Sélectionner un élément parent depuis un élément enfant
const h1parent = h1.parentNode; //On sélectionne l'élément parent 'article'

/*.........Les propriétés utiles................*/

// 2.6 Récupérer la class de l'élément html
const h1 = document.getElementsByTagName('h1')[0];
console.log(h1.className); //la propriété className permet de lire le contenu de la propriété de h1 (renvoi title)

// 2.7 Modifier le contenu de la propriété html qui aura pour effet de modifier le contenu de l'attribut
const h1 = document.getElementsByTagName('h1')[0];
h1.className = 'test'; //On modifie la class de l'élément h1 par 'test'
console.log(h1.className); //Affiche 'test'

/* IMPORTANT : Il est conseillé de modifier le style des éléments de cette façon au lieu d'utiliser la propriété style. 
Cela permet de bien séparer le rôle des différents langages et d'avoir un code propre. */

// 2.8 Récupérer l'attribut id d'un élément html et la modifier
const article = document.getElementsByTagName('article')[0];
article.id = 'test' //On modifie l'attribut de article
console.log(article.id);

/*..Propriétés ajouter modifier du contenu...*/

// 2.9 La propriété textContent
//Permet d'ajouter du contenu textuel (non html) à un élément html
const article = document.getElementsByTagName('article')[0];
article.textContent = 'Hello World ! '; //Ajout du contenu 'hello World !' dans l'élément article

// 3.0 La propriété innerHTML
//Permet d'ajouter du contenu textuel au format html à un élément html
const article = document.getElementsByTagName('article')[0];
article.textContent = '<b>Hello World</b>'; //Ajout du contenu 'hello World !' au format html dans l'élément article

// 3.1 Récupérer le contenu d'un href
const article = document.getElementsByTagName('article')[0];
const a = article.lastElementChild; //On récupère le dernier enfant de l'élément article
console.log(a.href); //On affiche le contenu du lien

// 3.2 Récupérer la valeur d'un champ de texte ou de formulaire
const imput = document.getElementById('text');
input.value = 'test'; // On peut modifier le contenu
console.log(input.value); //On affiche le contenu du champ input




