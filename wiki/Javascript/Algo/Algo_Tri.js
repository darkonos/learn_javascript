/* différentes méthodes algorithme de Tri */

/*........Tri avec la méthode sort...........*/

let nombre = [23, 40, 12, 4, 1, 34, 6];
 
//utilisation d'une fonction de comparaison sinon le tri est incorrect
 nombre.sort(function(a, b){
      return a - b;
 });
console.log(nombre); 


/*.......... Tri à bulle..........*/
/*Dans chaque boucle, les paires successives des éléments sont comparées et permutées si nécessaire. 
Si la paire a la même valeur ou est en ordre croissant, on la garde elle-même.*/

function sort(tab){
    var changed;
    do{
        changed = false;
        for(var i=0; i < tab.length-1; i++) {
            if(tab[i] > tab[i+1]) {
                var tmp = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = tmp;
                changed = true;
            }
        }
    } while(changed);
}
var tab = [5, 8, 11, 6, 1, 9, 3];
sort(tab);
console.log(tab);

/*........Tri par insertion.............*/

function sort(tab) {
    //nombre des éléments dans le tableau
    var len = tab.length;       
    var tmp, i, j;                  
    
    for(i = 1; i < len; i++) {
      //stocker la valeur actuelle 
      tmp = tab[i]
      j = i - 1
      while (j >= 0 && tab[j] > tmp) {
        // déplacer le nombre
        tab[j+1] = tab[j]
        j--
      }
      //Insère la valeur temporaire à la position 
      //correcte dans la partie triée.
      tab[j+1] = tmp
    }
    return tab
  }
  var tab = [5, 8, 11, 6, 1, 9, 3];
  sort(tab);
  console.log(tab);

/*........Tri par sélection.............*/

function sort(tab){
    for(var i = 0; i < tab.length; i++){
      //stocker l'index de l'élément minimum
      var min = i; 
      for(var j = i+1; j < tab.length; j++){
        if(tab[j] < tab[min]){
         // mettre à jour l'index de l'élément minimum
         min = j; 
        }
      }
      var tmp = tab[i];
      tab[i] = tab[min];
      tab[min] = tmp;
    }
    return tab;
  };
  var tab = [5, 8, 11, 6, 1, 9, 3];
  sort(tab);
  console.log(tab);

/*........Tri par fusion...............*/

function merge(left, right){
  
    var tab = [], l = 0, r = 0;
    while (l < left.length && r < right.length){
        if (left[l] < right[r]){
            tab.push(left[l++]);
        } else {
            tab.push(right[r++]);
        }
    }
    return tab.concat(left.slice(l)).concat(right.slice(r));
}
function sort(tab){
    if (tab.length < 2) {
        return tab;
    }
    var mid = Math.floor(tab.length / 2),
        right = tab.slice(mid),
        left = tab.slice(0, mid),
        p = merge(sort(left), sort(right));
    
    p.unshift(0, tab.length);
    tab.splice.apply(tab, p);
    return tab;
}
var tab = [5, 8, 11, 6, 1, 9, 3];
sort(tab);
console.log(tab);

.............................................................................

/* code de test script JS */
/*...Tri à bulle avec une boucle do...*/
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
  var tab = [5, 8, 11, 59, 1, 40, 3]; //le dernier élément ne peut être comparé avec son voisin de droite, d'ou le -1
  sort(tab);
  console.log(tab);

.......................................................................................

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