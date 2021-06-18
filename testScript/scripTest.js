/* code de test script JS */

function sort(tab){
     var changed;
     do{
         changed = false;
         for(var i=0; i < tab.length -1; i++) {
             if(tab[i] > tab[i+1]) {
                 var tmp = tab[i];
                 tab[i] = tab[i+1];
                 tab[i+1] = tmp;
                 changed = true;
             }
         }
     } while(changed);
 }
 var tab = [5, 8, 11, 59, 1, 40, 3];
 sort(tab);
 console.log(tab);