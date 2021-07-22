
# Exercice TP: Food Checker

## Partie 1
1. Crée un nouveau projet intitulé food-checker. (ng new  food-checker)
2. Créer un nouveau dossier nommé  ‘core’ dans :   src/app/.
3. Déplacer les fichiers : **app.component.ts, html, spec.ts, css**  dans le dossier 
‘core’.
4. Crée un nouveau dossier ‘components’  dans:   src/app/


5. Générer un nouveau composant **Header** dans  src/app/components/
6. Dans **header.component.html** , insérer:
    - Un titre &lt;h1&gt;&lt;/h1&gt;
7. Inclure le composant Header dans **app.component.html**


8. Générer un nouveau composant **SearchBar** dans src/app/components/
9. Dans **search-bar.component.html** , insérer un formulaire dans une balise &lt;nav&gt;&lt;/nav&gt; avec:
    - un input de type search
    - un input de type submit 
10. Inclure le composant **SearchBar** dans le composant **Header**
11. A ce stade vous devriez vous retrouver avec [ça](https://i.imgur.com/xaAVPsg.png)


## Partie 2 

11. Télécharger le fichier **item.ts** [Le tableaux de produit ici](https://www.dropbox.com/s/yv6fa8f9zmdsrnu/items.ts?dl=0) ou copier [ce tableau](https://www.dropbox.com/s/yv6fa8f9zmdsrnu/items.ts?dl=0) dans le dossier **src/assets**

12. Creer un composant **ProduitList**.

13. Dans **produit-list.component.ts**, créer un tableau en important les produits dans le dossiers **src/assets**

```
    import { ITEMS } from '';
```

14. Dans **produit-list.component.html**, 
    - si il n'y a pas de produit dans la liste, on affiche 'Aucun produit disponibles'
    - Sinon, pour chaque produit de la liste, on les affiches sous forme de cards ([bootstrap](https://getbootstrap.com/docs/5.0/components/card/) ou autres).

15. Dans **app.component.html**, Afficher le composant **ProduitList**

16. Voici un apercu du résultat: [voir ici](https://i.imgur.com/agbIJCc.png)

# Partie 3 

17. Créer un composant **ProduitDetail**, ce composant affichera les informations (factices suivantes):
    - Le nom du produit
    - Liste des ingrédients
    - Les calories
    - Le nutriscore