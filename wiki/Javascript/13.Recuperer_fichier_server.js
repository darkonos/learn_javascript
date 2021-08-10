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
   6.La méthode .then() est utilisé quand la promesse est résolu */

.then(res => res.json()) //Utilisation de la méthode json() car les données sont au format json (res = réponse, ce nom est à définir)

.then(res => res.text()) //Utilisation de la méthode text() si les données sont au format texte brut

.then(res => res.blob()) //Symbolise une ressource de type images, videos, musique

//Si la réponse et promesse est résolue, elle sera redirigé vers la méthode then()

fetch('data.json')
    .then(res => res.json())
    .then(tab => { //On exploite les différentes valeurs du tableau récupérés (tab : nom à définir)
        tab.forEach(task => {
            const h1 = document.createElement('h1')
            h1.textContent = task
            document.body.appendChild(h1);
        })
    })


/* 2. Gérer les exceptions en cas d'erreurs dans l'API fetch 

2.1 La méthode catch() 
Cas si la promesse est rejetée ou une exception qui est levée volontairement par le developpeur, l'erreur va attérir dans catch() */

.catch(e => console.error(e)) //l'erreur va atterir ici, on pourrait afficher un message pour expliquer à l'utilisateur que le fichier n'a pas pu être chargé

/* Exemple de cas concret utilisé en production :

Quand on vient récupérer notre réponse après avoir récupéré le contenu souhaité, on va venir regarder si la réponse reçue est celle qu'on
s'attend. Pour le vérifier, il va falloir regarder une propriété de la réponse qui s'appelle 'ok' 
- Si la propriété 'ok' vaut true : il n'y a aucun soucis et on récupère bien notre contenu
- Si la propriété 'ok' vaut false : il y a donc un problème (réseau, de redirection ou autre..)
Toutes les réponses http qui renvoi un code non-compris entre 200 et 299(que tout c'est bien passé), nous donne une valeur false pour la propriété 'ok' */

fetch('data.jso') //Ici l'erreur !
    .then(res => {
        if (res.ok) {  //Test de la propriété 'ok' sur la réponse(res) si elle vaut true ou false
            return res.json() //si 'ok' vaut true, on retourne une nouvelle promesse qui va être récupéré dans .then qui suit
        }                     //Si 'ok' vaut false, on lève nous même une erreur
        //On indique nous mêmme l'erreur, la promesse nous permet de créer des erreurs pré-formaté
        //La propriété statusText va indiqué textuellement le problème qui a eu lieu
        //La propriété status permet de récupérer le code http de la réponse
        throw new Error(`${res.statusText} (${res.status})`) //On lève nous mêmes l'erreur avec throw new Error()
        
    })
    .then(tab => { 
        tab.forEach(task => {
            const h1 = document.createElement('h1')
            h1.textContent = task
            document.body.appendChild(h1);
        })
    })

/* 3. Gérer les exceptions en cas d'erreurs dans l'API fetch avec la syntaxe ECMAScript 2017  (vidéos 81) */ 

//Création d'une fonction asynchrone getTasks qui va nous permettre de récupérer des données 'data.json'
async function getTasks() {
    const res = await fetch('data.json') //Le mot clé 'await' permet d'indiquer à la fonction asynchrone ou elle doit attendre un résultat
    if (res.ok) {  
        return res.json() 
    }                    
  
    throw new Error(`${res.statusText} (${res.status})`) 
}

try {
    getTasks().then(tasks => {
        tasks.forEach(task => {
            const h1 = document.createElement('h1')
            h1.textContent = task
            document.body.appendChild(h1)
        }) 
    })
} catch (e) {
    console.error(e)
}

//Ancienne façon de faire

 fetch('data.json')
    .then(res => {
        if (res.ok) {  
            return res.json() 
        }                    
      
        throw new Error(`${res.statusText} (${res.status})`)  
        
    })
    .then(tab => { 
        tab.forEach(task => {
            const h1 = document.createElement('h1')
            h1.textContent = task
            document.body.appendChild(h1);
        })
    })

    .catch(e => console.error(e))