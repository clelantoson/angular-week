# Exercice 3: Les événenents
*Essayez de réaliser l’exercice sans regarder le cours.*  
Pour cet exercice on souhaite : 
Changer l’image affichée lorsque l’utilisateur clique sur l’un des 3 boutons.   
Consignes détaillées :
1. Créer un dossier ex3 ou exercice3
2. Creer un componsant Images:
3. Dans **images.component.html**, supprimer toutes les lignes 
4. Dans **images.component.html** ajouter une balise <img/>
5. Dans **images.component.ts** créer une variable **imgUrl** et lui donner la valeur ''
6. Dans **images.component.html**, ajouter 3 boutons avec un événement de type ‘click’ qui appellera la fonction changeImg().
7.  Dans **images.component.ts**, créer la fonction changeImg(), qui prend un paramètre index. Ce paramètre déterminera quelle photo il faut choisir.
8. Dans la fonction **changeImg(index :number)**, ajouter 3 conditions: 
 - Si index vaut 1 alors on mettra dans la variable ‘url’ la photo d’un chat.
 - Si index vaut 2 l’url sera la photo d’un chien
 - Si index vaut 3 l'url sera la photo d'un poisson. 
9. Dans **images.component.html**, rajouter l’index sur dans l’appel de la fonction changeImg().
10. Dans **images.component.html**, si **imgUrl** vaut null, alors on affichera "Aucune image", sinon on affiche l'image
