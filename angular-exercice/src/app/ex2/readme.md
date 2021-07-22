# Exercice 2: Directives Structurelles 

*Essayez de réaliser l’exercice sans regarder le cours.*
 
Pour cet exercice on souhaite:  
Afficher une liste d’utilisateurs si elle n’est pas vide.  
On peut commencer par vérifier si la liste est vide. 
- Si elle est vide on peut afficher le message : « Aucun utilisateur trouvé » 
- Sinon on peut parcourir la liste des utilisateurs et l’afficher dans une liste HTML.  

Pour cet exercice on se basera sur les classes & interfaces crée dans l’exercice sur le typescript
Consignes détaillées :
1. Dams le dossier angular-exercice, générer un nouveau dossier appelé Exercice2 ou ex2
2. **Si ce n'est pas deja fait**: Créer un nouveau dossier nommé ‘core’ dans src/app
3. **Si ce n'est pas deja fait**:  Déplacer les fichiers app.component.x (ts,html,css,spec.ts)  dans le dossier ‘core’
4. **Si ce n'est pas deja fait**: Vérifier que le fichier app.module a bien modifié ses imports pour prendre en compte le dossier core.
5. Creer un composant **Utilisateur**, dans le fichier ts, on mettra une liste d'utilisateurs. exemple:
```
utilisateurs: [
    {id: 1, name: '', email: '', website: '' }
]
```
## Voici une liste d'utilsiateurs déjà prete: https://codeshare.io/OddwoA

6. Dans **utilisateur.component.html**, créer une balise &lt;p&gt;&lt;/p&gt; avec une directive structurelle if. Elle affichera « Aucun utilisateur trouvé » si la longueur du tableau d'utilisateurs est inferieur à 1. 
7. si la longueur est supérieure ou égal à 1, on crée une balise &lt;table&gt;&lt;/table&gt;, &lt;thead&gt;&lt;/thead&gt;, &lt;tbody&gt;&lt;/tbody&gt;.  
la balise &lt;thead&gt;&lt;/thead&gt; affichera les colonnes suivantes: Nom, Email, Site web

8. Dans la balise &lt;tbody&gt;&lt;/tbody&gt;, on parcourt la liste avec une directive structurelle *for* sur la balise &lt;tr&gt;&lt;/tr&gt; et on utilisera l’interpolation pour afficher le nom, l'email et et le site web dans un lien dans des &lt;td&gt;&lt;/td&gt;.
