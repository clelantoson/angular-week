import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  compteur = 0;
  title = 'angular-formation';
  produits = ['lorem', 'Ipsum', 'Dolor'];

  afficherMessage(event:any) {
    console.log(event);
  }
  incrementerParent(event: number) {
    this.compteur = event;
  }
}
