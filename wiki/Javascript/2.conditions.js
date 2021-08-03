/* LES CONDITIONS (les structures de contrôle conditionnelles )
   ............................................................

Les conditions vont nous permettre d’exécuter un certain nombre d’instructions si et
seulement si une certaine condition est vérifiée.

Exemple d'utilisation : on va pouvoir utiliser les conditions pour cacher un élément sur notre site si celui-ci est affiché 
ou pour l’afficher si celui-ci est caché.

  La condition if (si) ;
• La condition if… else (si… sinon) ;
• La condition if… elseif… else (si… sinon si… sinon)

*le code placé dans une condition n’est exécuté que si le résultat de la comparaison est true.

*dans une condition de plusieurs else if, c’est la première comparaison rencontrée validée qui va être retenue et les autres 
tests en dessous vont être ignorés.

/* 1. Les opérateurs de comparaison
  .............................

== Permet de tester l’égalité sur les valeurs (car le simple = sert à l'affectation de variable)
=== Permet de tester l’égalité en termes de valeurs et de types
!= Permet de tester la différence en valeurs
<> Permet également de tester la différence en valeurs
!== Permet de tester la différence en valeurs ou en types
< Permet de tester si une valeur est strictement inférieure à une autre
> Permet de tester si une valeur est strictement supérieure à une autre
<= Permet de tester si une valeur est inférieure ou égale à une autre
>= Permet de tester si une valeur est supérieure ou égale à une autre

*le JavaScript va automatiquement comparer la valeur à gauche de l’opérateur à celle à droite selon
l’opérateur de comparaison fourni et renvoyer le booléen true si la comparaison est
validée ou false si elle ne l’est pas.

/* 1.2 Les opérateurs logique 
  ......................

AND (&&), OR(||), NO(!)

/* 1.3 L'opérateur ternaire
......................

Permet d'utiliser une syntaxe très codensée et accélérer la vitesse d’exécution du code.

 test ? code à exécuter si true : code à exécuter si false

 /* 1.4 L'instruction switch
 ......................

l’instruction switch représente une alternative à l’utilisation d’un if…else if…else.
