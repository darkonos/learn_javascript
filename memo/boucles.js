/* 6.LES BOUCLES (Les structures répétitives)
   ........................................

   Nous disposons de six boucles différentes en JavaScript :
• La boucle while (« tant que ») ;
• La boucle do… while (« faire… tant que ») ;
• La boucle for (« pour ») ;
• La boucle for… in (« pour… dans») ;
• La boucle for… of (« pour… parmi ») ;
• La boucle for await… of (« pour -en attente-… parmi »)

//Les opérateurs d’incrémentation et de décrémentation
  ....................................................

  ++x Pré-incrémentation : incrémente la valeur contenue dans la variable x, puis retourne la valeur incrémentée
  x++ Post-incrémentation : retourne la valeur contenue dans x avant incrémentation, puis incrémente la valeur de x
  --x Pré-décrémentation : décrémente la valeur contenue dans la variable x, puis retourne la valeur décrémentée
  x-- Post-décrémentation : retourne la valeur contenue dans x avant décrémentation, puis décrémente la valeur de x

  //La boucle while
   .................

  Permet de répéter une série d’instructions tant qu’une condition donnée est vraie.
  
  //La boucle do..while
    ...................

  La condition de sortie n’est évaluée qu’en fin de boucle, après le passage dans la boucle. Le code de la boucle sera donc
exécuté au moins une fois.

 //La boucle for
   .............

Contient trois « phases » à l’intérieur du couple de parenthèses : une phase d’initialisation, une phase de test (condition de sortie)
 et une phase d’itération (généralement une incrémentation). 

//L'instruction continue
  ......................

  Permet de sauter une itération de boucle et passer directement à la suivante.
  
let nombre = [12, 3, 4, 8, 9, 14];

for(i=0; i<nombre.length; i++) {

    if(nombre[i] % 2 != 0){
        continue;
    }

    console.log('les nombres pairs sont : ' +nombre[i]);
}

//L'instruction break
.....................

Permet de stopper l’exécution d’une boucle et sortir à un moment donné.

//Les boucles for… in, for… of et for await…of
..............................................

Elles sont utilisées pour parcourir des objets.