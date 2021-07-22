import { Component, EventEmitter, OnInit, Output, SimpleChange } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service'


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

 // nomProduit: string;

  constructor(private navigationService: NavigationService ) {
   // this.nomProduit = this.navigationService.produitChercher;
  }

  ngOnInit(): void {
  }

  envoyerRecherche(event: any) {
    const nomRecherche = event.target.search.value;
    event.preventDefault();
    this.navigationService.updateProduitChercher(nomRecherche)
  }
}
