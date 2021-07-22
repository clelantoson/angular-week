# Exercice: To do list

## Partie 1

1. Creer un composant todo-list
**HTML**

2. Dans **todo-list.component.html**, faire un formulaire avec 2 champs: 
    - un input de type texte
    - un input de type submit  
3. Appuyer sur le boutton declenchera la soumission du formulaire de type submit.  
4. l'événement submit appelera la fonction addTask(), en lui donnant l'événement.
(voir partis .ts)
5. Faire une div qui affichera une liste de tache en parcourant le tableau todos.
(voir partis .ts)

**TS**

6. Dans **todo-list.component.ts**, créer une variable ```todos``` qui sera un tableau de string vide
7. Créer la fonction addTask(event) qui, ajoutera dans une variable ```task``` la valeur du champ input. Il faut supprimer le comportement par defaut qui rafraichit la page

> const task = ...

8.Ajouter ```task``` dans le tableau ```todos```.


## Partie 2

9. Dans **todo-list.component.html**, ajouter un champ taille, taille et couleur de fond (type color).   
10. Dans **todo-list.component.ts**, transformer le tableau de string 'todos' en tableau d'objet. On est obligé de préciser les propriétés de l'objet.

> todos: {text:string, color:string, size:string}[] = [];

10. Dans **todo-list.component.ts**, dans la fonction addTask transformer la variable task en objet contenant le
texte, la taille et la couleur de fond

> const task = { ... }

11. Dans **todo-list.component.html**, Ajouter sur les balises &lt;li&gt;&lt;/li&gt;, un style qui correspond à:     
    - le text,
    - la couleur
    - la taille

