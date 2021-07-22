# Exercice TP: Food Checker

## Partie 1
1. Reprendre le composant SearchBar
2. Dans **search-bar.component.html**, Lorsque l'utilisateur valide le formulaire, on declenche l'événement de type submit.   
3. On va ensuite lier l'événement avec une fonction ex: envoyerRecherche 
4. Dans **search-bar.component.ts**, creer la fonction envoyerRecherche, elle prendra comme parametre l'événement. /!\ ne pas oublier de supprimer le comportement par defaut
5. Dans **search-bar.component.ts**, creer l'EventEmitter

> @Output ...  /!\ verifier que l'import sois bien celui dans '@angular/core'

6. La fonction envoyerRecherche enverra la valeur du champ *search* au composant Parent (Header)

> this.monEvent.emit(valeur)

7. Récuperer cette événement sur le composant **Header** qui l'enverra à son tour au composant racine **app.component.html** via les mêmes étapes que précédement.

6. Dans **app.component.html** , récuperer l'événement sur la balise ```<app-header></app-header>``` et lier l'événement à une fonction
ex: updateRecherche

```
    <Header (myEvent)="updateRecherche(...)"></Header>
```

7.  Dans **app.component.ts**, creer une variable *nomProduit* et une fonction *updateRecherche*

8. La fonction **updateRecherche**, prend en parametre l'evenement et met à jour la variable *nomProduit*

9. Mettez un ```console.log``` pour être sur que vous récuperer bien la valeur. Ou via l'angular dev tools

## Partie 2

Il faut maintenant, transmettre la valeur au composant **ProduitList**.

10. Dans **app.component.html**, sur la balise ``` <ProduitList></ProduitList>```, faire une liaison de propriété pour transmettre la variable ```nomProduit```
11. Dans **produit-list.component.ts** , récuperer la propriéte via l'input.

> @Input()

12. Mettez un ```console.log``` pour être sur que vous récuperer bien la valeur. Ou via l'angular dev tools

## Partie 3

On va maintenant, trier le tableau dans le composant **ProduitList**.

13. Ajouter la méthode de cylce de vie ```ngOnChanges()```, cette méthode sera exécuté a chaque fois que la valeur de ```nomProduit``` change.
```
ngOnChanges() {
    //...
}
```

14. Dans la méthode ```ngOnChanges()```, on va filtrer le tableau des produits à Partir de items

```
    this.produits = ITEMS.filter(...)
```
