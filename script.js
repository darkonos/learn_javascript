
/* FONCTION ALEATOIRE */
// function aleatoire(max, min){
//     return Math.floor(Math.random() * (max - min + 1) + min);

// }

// document.getElementById('p1').innerHTML = aleatoire(3, 1);

// let prez = document.getElementById('p2').innerHTML = 'Bonjour je suis pierre';

// let prez2 = prez.replace('pierre', '<b>mathilde<b>');
// document.getElementById('p2').innerHTML = prez2;

/* FONCTION ANONYME */

// let maVariable = function(){  //Création de la fonction anonyme dans une variable
//     alert('message d\'une fonction anonyme !'); 
// }

// maVariable(); //Appel de la variable

/* FONCTION RECURSIVES */

// function decompte(t){
//     if(t > 0){
//         document.getElementById('p1').innerHTML += t +' ';
//         return decompte(t -1);
//     }
//         else{
//             return t;
//         }
    
// };

// decompte(10);

/*FONCTION CONSTRUCTEUR */

//Création d'une fonction constructeur
function Utilisateur(nom, age, mail) {
    
    this.nom = nom;
    this.age = age;
    this.mail = mail;

    this.bonjour = function(){

        console.log('Bonjour je suis ' +this.nom[0] +' j\'ai ' +this.age + ' ans !');
    }
}

//Création d'un nouvel objet florent en appelant la fonction construteur Utilisateur avec le mot clé 'new'
let florent = new Utilisateur(['florent', 'bernard'], 46, 'fred.bern9@gmail.com');

//Appel de la méthode bonjour
florent.bonjour();

//Utilisation dans le DOM
document.getElementById('p1').innerHTML = 'Nom complet: ' +florent['nom'];
document.getElementById('p2').innerHTML = 'prénom : ' +florent['nom'][0];