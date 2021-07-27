'use strict'

/* Projet TODO Formation Javascript complète */

// Stockage local de nos taches dans le navigateur (Eviter que les tâches disparaissent à la fermeture du navigateur)


class ArrayStorage {
    //Appel du constructeur pour initialiser l'objet avec le nom de la cé et son contenu (valeur)
    constructor(name) { //On lui donne le nom de la clé qui correspond à l'élément qui est stocké localement pour notre liste de tâches
         this.name = name;
         this.list = this.get() //Pour récupérer la list, on utilise la méthode get() 
    }

    //Création d'une méthode get() pour récupérer un tableau de valeurs de notre liste de tâches ou par défaut, le créer pour stocker nos tâches
    get() {

    }

    //Création d'une méthode set() pour ajouter une nouvelle valeur dans le tableau(en cliquant sur le bouton ADD)
    set() {

    }

    //Création d'une méthode remove() pour supprimer une valeur du tableau (en cliquant sur REMOVE)
    remove(value) {

    }
    
    //Création d'une méthode clear() pour vider tout le tableau
    clear() {

    }
}