/* code de test script JS */
/*...Tri à bulle avec une boucle do...*/
// function sort(tab){
//      var changed;
//      do{
//          changed = false;
//          for(var i=0; i < tab.length -1; i++) {
//              if(tab[i] > tab[i+1]) {
//                  var tmp = tab[i];
//                  tab[i] = tab[i+1];
//                  tab[i+1] = tmp;
//                  changed = true;
//              }
//          }
//      } while(changed);
//  }
//  var tab = [5, 8, 11, 59, 1, 40, 3]; //le dernier élément ne peut être comparé avec son voisin de droite, d'ou le -1
//  sort(tab);
//  console.log(tab);



 /*...Tri à bulle avec la boucle for...*/

function triTab(tab) {

    for(let i=0; i<tab.length; i++) { //itération 10 fois (10 éléments dans le tableau)

        for(let j=0; j<tab.length -1; j++) { //itération 9 fois, le dernier élément ne peut être comparé avec son voisin de droite, d'ou le -1

            if(tab[j] > tab[j+1]) {  //Si le premier élément est supérieur au second élément

                    [tab[j], tab[j+1]] =  [tab[j+1], tab[j]] //On permute
            }

        }
  

    }
    return tab;
}

let tableau = [12, 3, 1, 56, 6, 34, 5, 10, 78, 11];
console.log('Tableau non trié : ' +tableau)
triTab(tableau);
console.log('Tableau trié : ' +tableau);