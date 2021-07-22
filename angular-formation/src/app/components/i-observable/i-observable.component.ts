import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, interval, Subscription } from 'rxjs';
import { Utilisateur } from '../../classes/Utilisateur';

@Component({
  selector: 'app-i-observable',
  templateUrl: './i-observable.component.html',
  styleUrls: ['./i-observable.component.css']
})
export class IObservableComponent implements OnInit {

  utilisateurs: Utilisateur[] = [];
  nombres: number[] = [];
  tempsConnexion!: Subscription;

  // Injection de dépendance.
  constructor(private http: HttpClient) {
    // this.http = http
  }

  // a = new HttpClient();
  // c = new IObservableComponent(a);

  ngOnInit(): void {
    this.getNombres().subscribe(
      // next
      (resultatObs: number[]) => this.nombres = resultatObs,
      // error
      (error) => { console.error(error); },
      // complete
      () => { console.log() }
    );

    this.tempsConnexion = interval(1000).subscribe(
    (valeur) => console.log(
      "temps de connexion : " + valeur)
    )
  }

  ngOnDestroy(){
    this.tempsConnexion.unsubscribe();
  }

  getNombres(){
    // la fonction of(): permet de transformer des données simple (tableau, string etc..)
    // en observable.
    const nombresObs = of([1, 2, 3, 5]);
    return nombresObs;
  }

  getNombresMan() {
     const prenoms = ['Melanie', 'Rick', 'Joe', 'Marine'];
     const prenomsObs = new Observable(
        (observer) => observer.next(prenoms)
     );
     return prenomsObs;
  }

  getUtilisateurs() {
     this.http.get<Utilisateur[]>('https://jsonplaceholder.typicode.com/users').subscribe(
        (reponse) => {
          console.log(reponse)
          this.utilisateurs = reponse
        }
     );
  }
}
