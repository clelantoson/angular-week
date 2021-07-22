# Exercice 1: Interpolation & Liaison de propriété

*Essayez de faire l’exercice sans regarder le cours.** 
1. Générer un nouveau projet (ex: angular-exercice)
2. Créer un nouveau dossier nommé ‘core’ dans **src/app**
3. Déplacer les fichiers *app.component.x* (ts,html,css,spec.ts)  dans le dossier ‘core’
4. Vérifier que le fichier app.module a bien modifié ses imports pour prendre en compte le dossier core.
5. Dans **app.component.html**, supprimer toutes les lignes
6. **Dans app.component.ts**, créer une variable message et titre avec le texte de votre choix. (Lorem ipsum par exemple).
7. Dans **component.html**, créer une balise ```<h1></h1>``` qui affichera la variable ‘titre’ (interpolation). 
8. Dans **component.html**, créer une balise ```<p></p>``` qui affichera le message. (interpolation)
9. Dans **app.component.ts**, crée une variable ```lienImg``` qui aura pour valeur ( avec la liaison de propriete / property Binding)
> ex: https://upload.wikimedia.org/wikipedia/commons/7/78/Akita_inu.jpeg 