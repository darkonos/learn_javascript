/* Récupérer un fichier sur un serveur (videos 79)

- Format JSON : format dérivé de la notation objet Javascript, des littéraux d'objet. Les propriétés sont entourées de " " double.
Elle se structure sous forme de tableaux, d'objets, de valeurs de différents types (string, number, boolean..).
Le format JSON est apprécié car on peut très facilement transformées les données récupérées en JSON soit en objet,
en tableaux ou en simple valeur Javascript en fonction du contenu du fichier JSON.

/* 1. API fetch 
Permet d'effectuer une requète au serveur web pour récupérer le contenu d'un fichier JSON  */

//L'API fetch utilise les promesses (Représentation d'une valeur qui sera disponible dans le futur)
fetch('testScript\js\data.json'); //On récupère une promesse en indiquant soit l'adresse du serveur local ou http pour un serveur distant

/* 1.Récupération de la réponse de la promesse via la méthode then()
   2.On passe une fonction en argument de ce qu'on doit faire de la réponse récupéré
   3.Pour extraire le contenu de la réponse reçue, on doit savoir de quel type est son contenu
   4.EX : si le contenu est au format JSON, on utilise la méthode json() et ensuite les tranformer en une entité Javascript pour l'exploiter
   5.ici les données data.json sont un tableau, on récupère donc un tableau Javascript
   6.A noter que les méthodes utilisées, retourne elles mêmes des promesses */

.then(res => res.json()) //Utilisation de la méthode json() car les données sont au format json (res = réponse, ce nom est à définir)

.then(res => res.text()) //Utilisation de la méthode text() si les données sont au format texte brut

.then(res => res.blob()) //Symbolise une ressource de type images, videos, musique

//Si la réponse est résolue, elle sera redirigé vers la méthode then()

fetch('testScript\js\data.json');
    .then(res => res.json())
    .then(tab => { //On exploite les différentes valeurs du tableau récupérés (tab : nom à définir)
        tab.foreach(task => {
            const h1 = document.createElement('h1')
            h1.textContent = task
            document.body.appendChild(h1);
        })
    })
