
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

//Création d'une fonction constructeur 'Utilisateur'
function Utilisateur(n, a, m) {
    
    this.nom = n;    //Propriétés
    this.age = a;    //Propriétés
    this.mail = m;   //Propriétés

    this.affiche = function(){     //Méthode affiche

        console.log('Bonjour je suis ' +this.nom[0] +' j\'ai ' +this.age + ' ans !');
    }
}


//Création de 3 nouvels objet(nouvel instance ou nouvel exemplaire) en appelant la fonction construteur 'Utilisateur' avec le mot clé 'new'
let tom = new Utilisateur(['tom', 'renard'], 35, 'fred.bern9@gmail.com');
let patrick = new Utilisateur(['patrick', 'Leroy'], 24, 'pat.leroy@yahoo.fr' );
let mathilde = new Utilisateur(['mathilde', 'robert'], 36, 'mathilde.rob@hotmail.com');


//Appel de la méthode affiche
tom.affiche();  
mathilde.affiche();
patrick.affiche(); 


//On peut rajouter des propriétés supplémentaires aux objets
patrick.yeux = 'bleu';
mathilde.cheveux = 'blonde';
tom.color = 'metisse';
tom.taille = 175;

//Utilisation dans le DOM
document.getElementById('p1').innerHTML = 'Nom complet: ' +tom['nom'] +' je mesure ' +tom['taille'] +' cm !' +' et je suis ' +tom['color'];
document.getElementById('p2').innerHTML = 'prénom : ' +tom['nom'][0];
document.getElementById('p3').innerHTML = 'Nom complet: ' +patrick['nom'] +' j\'ai les yeux de couleur ' +patrick['yeux'];