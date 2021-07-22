import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../../../assets/items';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits = ITEMS;

  nomProduit = ''

  produitChercherAbonnement: Subscription | undefined

  constructor(private navigationService: NavigationService ) { }

  ngOnInit(): void {
    this.produitChercherAbonnement = this.navigationService.onProduitChercherUpdate.subscribe((produitRechercher) => this.filtrerProduits(produitRechercher));
  }

  filtrerProduits(produitRechercher:string) {
    const nomProduitMini = produitRechercher.toLowerCase();
    this.produits = ITEMS.filter(produit => {
      return produit.name.toLowerCase().includes(nomProduitMini)
    })
  }

}
