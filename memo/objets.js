/*......LES OBJETS........

Le développement orienté objet correspond à une autre façon d’envisager et d’organiser
son code en groupant des éléments cohérents au sein d’objets

- Propriété   : variable qui appartient à un objet
- Méthode     : fonction qui appartient à un objet

Un objet est donc un conteneur qui va posséder un ensemble de propriétés(variables) et
de méthodes(fonctions) qu’il est cohérent de regrouper.

Chaque membre d’un objet est toujours composé d’un nom et d’une valeur qui sont séparées par :

Avantages de l'orienté objet: Permet d'otenir des scripts mieux organisés, meilleurs lisibilité et maintenabilité.

Constructor :
..............

 Méthode qui permet de créer des objets semblables avec le mot clé 'new'
 

This : permet de définir et d’initialiser les propriétés et méthodes de l'objet créé..
......

Instance : Objet créé avec le mot clé 'new' appartenant la class 'nomDeLaClass'
........

//Langages orientés objet utilisant des prototypes (comme Javascript)
  ...................................................................

En Javascript tout est objet et il n'éxiste pas de classes. L'héritage se fait au moyens de prototypes.

IMPORTANT : pour accéder aux propriétés et méthodes de l'objet:

 - A l'intérieur du littéral d'objet, on utilise le mot clé 'this' pour faire référence aux propriétés et méthodes de l'objet.
 - A l'extérieur, on utilise l'objet par rapport à son identifiant + la 'notation pointé' ou 'bracket'.



/* LES CLASSES
 .............

Javascript a introduit un mot clé class dans sa dernière version.
Une classe est un plan général qui va servir à créer des objets similaires.
Une classe va généralement contenir des propriétés, des méthodes et une méthode constructeur.
La méthode constructeur va être appelée automatiquement dès qu’on va créer un objet à partir de notre classe et va nous permettre
d'initialiser les propriétés spécifiques des objets qu’on crée.
Tous les objets sont créés à partir de classes et vont hériter des propriétés et des méthodes définies dans la classe.


/*..VALEURS PRIMITIFS ET OBJETS GLOBAUX
 ......................................

JavaScript dispose de constructeurs d’objets prédéfinis dans son langage. Ces constructeurs vont disposer de propriétés
et de méthodes.
Une valeur primitive en JavaScript une valeur qui n’est pas un objet et qui ne peut pas être modifiée.

JavaScript possède quatre objets natifs : String, Number, Boolean et Symbol qui contiennent des propriétés et des méthodes.
