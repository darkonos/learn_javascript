
/* LES CLASSES
 .............

Javascript a introduit un mot clé class dans sa dernière version.
Une classe est un plan général qui va servir à créer des objets similaires.
Une classe va généralement contenir des propriétés, des méthodes et une méthode constructeur.
La méthode constructeur va être appelée automatiquement dès qu’on va créer un objet à partir de notre classe et va nous permettre
d'initialiser les propriétés spécifiques des objets qu’on crée.
Tous les objets sont créés à partir de classes et vont hériter des propriétés et des méthodes définies dans la classe.


/* 2.1 Création d'une classe et créé des objets à partir de cette classe 
L'intérêt de créé des objets à partir d'une class c'est de pouvoir créé très facilement plusieurs à partir de cette même classe */ 

class User { //Par convention le nom de la classe commence par une majuscule
  
}

//Création d'une instance de la class User, on possède donc un objet de la class User
//Chaque utilisateur partargent les propriétés et méthode de la class User mais chacun possèdeent leurs propres valeurs
const georges = new user();
const steven = new user();

/* 2.2 La méthode constructeur
Méthode qui appartient à une classe, cette méthode va être automatiquement appelée à la création d'une nouvelle instance de la classe
en utilisant le mot clé 'new' qui permettra de mettre des valeurs aux propriétés qui appartient à nos objets. */

class User { 
    constructor(name, email){
      this.name = name; //this permet de faire référence à la propriété name qui appartient à notre objet
      this.mail = mail;
    }
}

const georges = new user('Georges', 'george@gmail.com');
const steven = new user('Steven', 'steven@gmail.com');

/* 2.3 Création d'une  méthode pour la classe */

class User { 
    constructor(name, mail){
      this.name = name; 
      this.mail = mail;
    }

    infos() {  //Création d'une méthode

          return `Nom : ${this.name}\n E.mail : ${this.mail}`;
    }
}

const georges = new User('Georges', 'george@gmail.com');
const steven = new User('Steven', 'steven@gmail.com');

steven.name = 'fred'; //Modification de la propriété name

console.log(georges.infos(), steven.infos(), steven.name);

/* 2.4 Héritage (Classe qui hérite des méthodes et propriétés d'une autre classe) */

class User { 
    constructor(name, mail){
      this.name = name; 
      this.mail = mail;
    }

    infos() {  
          return `Nom : ${this.name}\n E.mail : ${this.mail}`;
    }

    class Admin extends User{  //La class Admin étend la class User et devient une classe enfant de la classe parent User

    }
}

const georges = new User('Georges', 'george@gmail.com');
const steven = new Admin('Steven', 'steven@gmail.com');

console.log(steven.infos());

/* 2.5 Récupérer les éléments de la classe parent et les modifier à notre façon avec le mot clé 'super' 
Le mot clé 'super' permet de faire référence à la classe parent*/

class User { 
    constructor(name, mail){
      this.name = name; 
      this.mail = mail;
    }

    infos() {  
          return `Nom : ${this.name}\n E.mail : ${this.mail}`;
    }
  }
    class Admin extends User{  //Classe Admin qui est un enfant de la classe User
      constructor(name, mail){ //On cré un constructeur pour la classe enfant Admin
        super(name, mail)  //On utilise le constructeur parent 'User', en lui transmettant les éléments qu'il attend (name et email)
        this.status = 'Admin' //On indique au constructeur enfant 'Admin' ce qu'on veut ajouter par rapport au constructeur parent
      }

      infos() {   //Utilisation de la méthode parent 'infos()' de User
        return `${super.infos()}\n Status : ${this.status}`;//Modification de la méthode parent infos()
      }
    }


const georges = new User('Georges', 'george@gmail.com');
const steven = new Admin('Steven', 'steven@gmail.com');

console.log(steven.infos());