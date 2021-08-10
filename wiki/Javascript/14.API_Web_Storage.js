/* API Web Storage 

Permet de stocker des données sur le navigateur

On utilise un des objets suivants :
- localStorage : les données seront sauvegardés pour une durée indéterminé (A la fermeture du navigateur ou extinction du pc, les données 
    seront toujours présents dans le navigateur)
- sessionStorage : les données seront stocker durant la session (A la fermeture du navigateur, toutes les données disparaitront)

1. La méthode .getItem(clé)
Renvoi la valeur à une clé (en string) qu'on aura passé en argument

2. La méthode setItem(clé, valeur)
Permet de créer ou mettre à jour une clé déja existante 

3. La méthode removeItem(clé)
Permet de supprimer une clé

4. La méthode clear()
Permet de supprimer toutes les clés du stockage associé au site web