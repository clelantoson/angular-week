import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  produitRecherche = "";

  updateRecherche(event:string) {
    this.produitRecherche = event;
  }
}
§§§
