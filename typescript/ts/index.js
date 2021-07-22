// TypeScript
console.log('Hello');
// Typage Explicite
var nombre;
nombre = 5;
console.log("Nombre: " + nombre);
// nombre = "Sallut"; <- on ne peut pas affecter une chaine de 
//caractere à une variable de type number
var error;
var obj;
var prenom;
// Typage Implicite
var nom = "John";
var age = 64;
var prenoms;
console.log(prenoms);
var notes = [1, 2, 3, 6, 5, 7];
console.log(notes);
// notes.push('Maude'); // <- error, on devrait pas faire ca
// On type les parametres de la fonction. 
// On peut mais on est pas obligé de typé la valeur retour
function multiplication(nombre1, nombre2) {
    var resultat = nombre1 + " + " + nombre2 + " = " + (nombre1 + nombre2);
    return resultat;
}
var resultat = multiplication(5, 7);
console.log(resultat);
// A utiliser avec modération
var variable;
// Enumeration
var Semaine;
(function (Semaine) {
    Semaine[Semaine["LUNDI"] = 0] = "LUNDI";
    Semaine[Semaine["MARDI"] = 1] = "MARDI";
    Semaine[Semaine["MERCREDI"] = 2] = "MERCREDI";
    Semaine[Semaine["JEUDI"] = 3] = "JEUDI";
    Semaine[Semaine["VENDREDI"] = 4] = "VENDREDI";
})(Semaine || (Semaine = {}));
var Week;
(function (Week) {
    Week["LUNDI"] = "Lundi";
    Week["MARDI"] = "Mardi";
    Week["MERCREDI"] = "Mercredi";
    Week["JEUDI"] = "Jeudi";
    Week["VENDREDI"] = "Vendredi";
})(Week || (Week = {}));
var jour = Week.LUNDI;
console.log(jour);
// POO
var Voiture = /** @class */ (function () {
    function Voiture() {
        // Visibilité de propriétés
        this.nbRoues = 4;
        this.moteur = "Allemand";
        this.couleur = "Bleu";
    }
    Voiture.prototype.getMoteur = function () {
        return this.moteur;
    };
    Voiture.prototype.setMoteur = function (valeur, utilisateur) {
        if (utilisateur.key == '0xFASASS') {
            this.moteur = valeur;
        }
    };
    Voiture.help = "Voici la notice de la voiture";
    return Voiture;
}());
console.log(Voiture.help);
// let obj: Voiture;
var voiture = new Voiture();
console.log(voiture.nbRoues);
console.log(voiture.couleur);
// console.log(voiture.moteur); <- erreur, on ne doit pas 
//      acceder a cette variable en dehors de la classe
console.log(voiture.getMoteur());
// On a une erreur, si notre objet ne contient pas au minimum
// une proriete nom, prenom et une methode description/
var p1 = {
    nom: 'Doe',
    prenom: 'John',
    description: function () {
        console.log(this.nom + " " + this.prenom);
    }
};
p1.description();
