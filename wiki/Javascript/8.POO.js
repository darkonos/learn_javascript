/*......LES OBJETS........

Les objets partargent deux caractéristiques : état (propriétés ou attributs) et comportement (méthodes ou procédure).

Le développement orienté objet correspond à une autre façon d’envisager et d’organiser
son code en groupant des éléments cohérents au sein d’objets 

- Propriété   : variable qui appartient à un objet
- Méthode     : fonction qui appartient à un objet

Un objet est donc un conteneur qui va posséder un ensemble de propriétés(variables) et
de méthodes(fonctions) qu’il est cohérent de regrouper.

Chaque membre d’un objet est toujours composé d’un nom et d’une valeur qui sont séparées par :

Avantages de l'orienté objet: Permet d'otenir des scripts mieux organisés, meilleurs lisibilité et maintenabilité.

//Les 3 types d'objets 
......................
  1.Les objets natifs   : Peu importe ou les programmes javascript seront exécutés, ils auront ces objets(Math, Array, Boolean...)
  2.Les objets d'hôtes  : Sont fournis par l'environnement hôte
  3.Les objets que vous créez dans vos programmes 

Constructeur :
..............
C'est une fonction pour décrire la façon dont un objet doit être créé
un constructeur va créé des objets similaires avec le mot clé 'new'
Chaque objet créé est connu comme une 'instance' de ce type d'objet.

 

This :     Permet de définir et d’initialiser les propriétés et méthodes de l'objet créé.
....       Permet aussi de faire référence aux propriétées et méthode de l'objet quand on est à l'intérieur de l'objet en question.

Instance : Objet créé avec le mot clé 'new' appartenant la class 'nomDeLaClass'
........

//Langages orientés objet utilisant des prototypes (comme Javascript)
  ...................................................................

En Javascript tout est objet et il n'éxiste pas de classes. L'héritage se fait au moyens de prototypes.

IMPORTANT : pour accéder aux propriétés et méthodes de l'objet :

 - A l'intérieur du littéral d'objet, on utilise le mot clé 'this' pour faire référence aux propriétés et méthodes de l'objet.
 - A l'extérieur, on utilise l'objet par rapport à son identifiant + la 'notation pointé' ou 'bracket' [].


/*..VALEURS PRIMITIFS ET OBJETS GLOBAUX
 ......................................

JavaScript dispose de constructeurs d’objets prédéfinis dans son langage. Ces constructeurs vont disposer de propriétés
et de méthodes.
Une valeur primitive en JavaScript une valeur qui n’est pas un objet et qui ne peut pas être modifiée.

JavaScript possède quatre objets natifs : String, Number, Boolean et Symbol qui contiennent des propriétés et des méthodes. */



/* 1.0   Création d'un litttéral d'objet (le but d'un littéral d'objet c'est d'être unique) */

const user = {
    name: 'steven',
    mail: 'steven@gmail.com',
    infos: function() {
      return `nom : ${this.name}\n E-mail : ${this.mail}`;//Al intérieur de l'objet, on récupére les propriétés et méthodes avec le mot clé 'this'
    }
};

console.log(user.infos()); //A l'extérieur de l'objet, on récupére les propriétés et méthodes par rapport à son identifiant.

/* Avec les normes post-2015 
On peut créer des méthodes encore plus simple à l'intérieur d'un littéral d'objet */

infos() { //On enlève : et le mot clé function 
  return `nom : ${this.name}\n E-mail : ${this.mail}`;
}

