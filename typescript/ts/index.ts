// TypeScript

console.log('Hello');

// Typage Explicite
let nombre:number;
nombre = 5;
console.log("Nombre: " + nombre)

// nombre = "Sallut"; <- on ne peut pas affecter une chaine de 
//caractere à une variable de type number

let error: boolean;
let obj: object;
let prenom: string;

// Typage Implicite
let nom = "John";
let age: number = 64;

let prenoms: string[];
console.log(prenoms);

let notes: number[] = [1,2,3,6,5,7];
console.log(notes);
// notes.push('Maude'); // <- error, on devrait pas faire ca

// On type les parametres de la fonction. 
// On peut mais on est pas obligé de typé la valeur retour
function multiplication(nombre1:number, nombre2:number): string {
    const resultat = `${nombre1} + ${nombre2} = ${nombre1 + nombre2}`
    return resultat;
}

const resultat = multiplication(5, 7);
console.log(resultat);

// A utiliser avec modération
let variable:any;

// Enumeration

enum Semaine {
    LUNDI,
    MARDI,
    MERCREDI,
    JEUDI,
    VENDREDI
}

enum Week {
    LUNDI="Lundi",
    MARDI="Mardi",
    MERCREDI="Mercredi",
    JEUDI="Jeudi",
    VENDREDI="Vendredi"
}

let jour = Week.LUNDI
console.log(jour);

// POO
class Voiture {
    // Declaration des variables/propritétés
    couleur:string;
    // Visibilité de propriétés
    public nbRoues:number = 4;
    private moteur = "Allemand";
    protected frein: string;
    static help = "Voici la notice de la voiture"
    
    constructor() {
        this.couleur = "Bleu"
    }

    getMoteur() {
        return this.moteur;
    }

    setMoteur(valeur: string, utilisateur: any) {
        if (utilisateur.key == '0xFASASS') {
            this.moteur = valeur;
        }
    }
}

console.log(Voiture.help);

// let obj: Voiture;

const voiture: Voiture = new Voiture();
console.log(voiture.nbRoues);
console.log(voiture.couleur);
// console.log(voiture.moteur); <- erreur, on ne doit pas 
//      acceder a cette variable en dehors de la classe
console.log(voiture.getMoteur());

/**
 * Une interface est un contrat.
 * Si on implemente l'interface, on s'engage a respecter ce qui est
 * definit dans l'interface. 
 * ex: Une personne doit avoir un nom, un prenom et une description
 */
interface Personne {
    prenom: string;
    nom: string;
    // void: la fonction ne renvoie rien. 
    description(): void;
}

// On a une erreur, si notre objet ne contient pas au minimum
// une proriete nom, prenom et une methode description/
let p1: Personne = {
    nom: 'Doe',
    prenom: 'John',
    description: function() {
        console.log(`${this.nom} ${this.prenom}`);
    }
}

p1.description();