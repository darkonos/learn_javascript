/* La programmation asynchrone 

- Synchrone :  chaque ligne sera exécutée l'une après l'autre en attendant la fin de l'exécution de la ligne précédente.
               Il n'y a pas d'autre code qui pourra être exécuté en parallèle. Il ne peut faire qu'une seule chose à la fois.

- Asynchrone : Exécute ligne après ligne, mais la ligne suivante n'attendra pas que la ligne asynchrone ait fini son exécution.

Souvent on a des taches qui prends du temps, parce qu'ils ont un timer, lire un gros fichier, télécharger des données ou autre
 ou bien prends du temps tout simplement. C'est la que la fonction asynchrone intervient.

 On a 2 façons de gérer la programmation asynchrone : 
  - Avec des callbacks (fonction qui est passé en paramètre à une autre fonction) */
    setInterval(()=> console.log(8), 5000);
  - /* Avec des promesses (Objet de la classe promise qui produira une valeur dans le futur) */


  /* 1. Maitriser le temps avec la fonction setInterval() qui indique tous les combien de temps une fonction va être éxécuté (video 76) */
  
  const button = document.getElementById('clear');

  //Pour annuler une fonction éxécuté à l'aide de la fonction setInterval(), on utilise la fonction clearInterval()
  //Quand on click sur le bouton, on annule la fonction setInterval() en lui passant en paramètre une référence (repeat) vers le setInterval qu'on veut annulé
  button.addEventListener('click', () => clearInterval(repeat)); 

  //Prend 2 arguments, la fonction passé en paramètre et l'interval pour que la fonction vient se répéter
  const repeat = setInterval(() => console.log('message1'), 500); 

  /* A savoir, on peux aussi annuler une fonction éxécuté à l'aide de la fonction setInterval() avec un if ou une boucle etc..
  

 /* 2. La fonction setTimeout()
 
 Elle fonctionne comme setInterval() sauf que la fonction va être éxécuté une unique fois. */

 const one = setTimeout(() => console.log('message2'), 800); 

 //Si on veut arrêter la fonction inclus dans le setTimeout()
 clearTimeout(one);


/* 3. Les promesses (Autre façon de gérer la programmation asynchrone)

Objet de la classe promise qui produira une valeur dans le futur.

2 façons de les utiliser : 
 - On crée sois même une promesse
 - On manipule des API qui utilisent les promesses

 /* 3.1 API fetch
 Permet de faire des requètes http(s). Grace à cette API qu'on pourra dire au serveur qu'on veut récupéré des données de façon asynchrone.
 Après avoir récupéré les données, on pourra les traiter et les afficher sur un document html.


 /* 3.2 API webStorage 
 Permet de gérer le stockage local sur le navigateur d'un visiteur.