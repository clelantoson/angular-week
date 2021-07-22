# Exercice 5: Input & Output

*Essayez de faire l’exercice sans regarder le cours.*

## Partie 1

1. Creer un composant Inout
2. Dans **in-out.component.ts**, ajouter la variable ```title```
3. Dans **in-out.component.ts**, ajouter une variable ```message``` avec un texte au choix : exemple (Lorem ipsum)
4. Dans le composant **in-out.component.html**, 
creer une balise titre et utiliser l'interpolation pour lier le texte de la balise titre avec la variable ```title```.

5. Dans le dossier **components**, creer un nouveau composant nommé  ```article```  dans le dossier ‘components’

6. Dans **in-out.component.html**, appeler le composant ```<article></article>```. 

7. Dans **in-out.component.html**, à l’aide la liaison de propriété, transmettre la variable ```message``` dans le composant ```<article></article>```. 

8. Récupérer cette variable dans **article.component.ts** grâce à l’input.

> @Input()

9. Dans **article.component.html**, afficher le message reçu dans une balise ```<p></p>```.

## Partie 2

10. Dans **article.component.html** ajouter un boutton *mettre à jour*. 

11. Ajouter un événement de type click qui appelle la fonction ```update()``` lorsqu’on clique sur le bouton.

12. Dans **article.component.ts** créer la fonction ```update()``` vide pour le moment.

13. Dans **article.component.ts**, créer un objet de type *EventEmitter* ```myEventUpdate``` pour faire remonter l’événement au parent  
```/!\``` Importer celui dans la lib **@angular/core** ```/!\```

14. Dans la fonction ```update()``` précédemment créée, déclencher l’événement avec une chaine de caractère : " - mis à jour" en guise d’événement.

15. Dans **in-out.component.html**, récupérer l’événement avec le bon nom, il appellera une fonction ```parentUpdate($event)```.

16. Dans **in-out.component.ts**, créer la fonction ```parentUpdate(event)``` qui concatenera le message recu via l'evenement avec à la variable ```title```.

> exemple du resultat: 'Lorem Ipsum - mis à jour'