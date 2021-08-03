/* LES BOUCLES (Les structures répétitives)
   ........................................

   Nous disposons de six boucles différentes en JavaScript :
• La boucle while (« tant que ») ;
• La boucle do… while (« faire… tant que ») ;
• La boucle for (« pour ») ;
• La boucle for… in (« pour… dans») ;
• La boucle for… of (« pour… parmi ») ;
• La boucle for await… of (« pour -en attente-… parmi »)

/* 1. Les opérateurs d’incrémentation et de décrémentation
  ....................................................

  ++x Pré-incrémentation : incrémente la valeur contenue dans la variable x, puis retourne la valeur incrémentée
  x++ Post-incrémentation : retourne la valeur contenue dans x avant incrémentation, puis incrémente la valeur de x
  --x Pré-décrémentation : décrémente la valeur contenue dans la variable x, puis retourne la valeur décrémentée
  x-- Post-décrémentation : retourne la valeur contenue dans x avant décrémentation, puis décrémente la valeur de x

  / 1.2 La boucle while
   .................

  Permet de répéter une série d’instructions tant qu’une condition donnée est vraie.
  
  /* 1.3 La boucle do..while
    ...................

  La condition de sortie n’est évaluée qu’en fin de boucle, après le passage dans la boucle. Le code de la boucle sera donc
exécuté au moins une fois.

 /* 1.4 La boucle for
   .................

Contient trois « phases » à l’intérieur du couple de parenthèses : une phase d’initialisation, une phase de test (condition de sortie)
 et une phase d’itération (généralement une incrémentation). 

 Utilisation : Quand on connait le nombre de tour que doit faire la boucle.


/* 1.5 L'instruction continue
  ......................

  Permet de sauter une itération de boucle et passer directement à la suivante.*/
  
let nombre = [12, 3, 4, 8, 9, 14];

for(i=0; i<nombre.length; i++) {

    if(nombre[i] % 2 != 0){
        continue;
    }

    console.log('les nombres pairs sont : ' +nombre[i]);
}

/* 1.6 L'instruction break
..........................

Permet de stopper l’exécution d’une boucle et sortir à un moment donné.

//Les boucles for… in, for… of et for await…of
..............................................

Elles sont utilisées pour parcourir des objets.


/* 2. Méthodes de boucle pour remplacer les boucles classique et optimiser le code */

const tasks = ['tourner des tutos ', 'Faire du sport']

for(let i=0; i < tasks.length; i++) {
    console.log(tasks[i])
}

/* 2.1 Méthode foreach

Permet d'itérer uniquement des éléments d'un tableau */
tasks.forEach(tasks => console.log(tasks)) //On renseigne le nom du tableau et les actions à effectuer

/* 2.2 Méthode for of

//Permet de faire un listing de tous les éléments itérables (un tableau ou un objet qui liste les éléments) */

for(let task of tasks) { //On cré une variable (ici task) qui va récupérer un élément à chaque itération, et on renseigne l'objet itérable(tasks)
    console.log(task)
}

/* On peux utiliser 'for of' sur des objets qui liste des éléments et du coup itérer chacune des valeurs .
exemple sur la méthode getElementsByTagName() */

const boutons = document.getElementsByTagName('button')

for(let bouton of boutons) {
  bouton.addEventListener('click', e => console.log(`${e.target.textContent} cliqué ! `)) //On récupère la cible qui a été cliqué, On ajout un évènement les uns à la suite des autres 
}