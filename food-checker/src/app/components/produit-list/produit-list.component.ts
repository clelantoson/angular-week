import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../../../assets/items';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ProduitService } from 'src/app/services/produit.service';
import { Page } from 'src/app/classes/Page';
import { Produit } from 'src/app/classes/Produit';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

	produits: Produit[] = [];
  produitChercherAbonnement!: Subscription

  constructor(private navigationService: NavigationService, private produitService: ProduitService ) { }

  ngOnInit(): void {
    this.produitService.fetchProduits().subscribe(
      (page: Page) => this.produits = page.products
    )
    // this.produitChercherAbonnement = this.navigationService.onProduitChercherUpdate.subscribe(
    //   // produitRechercher est définie par la methode onProduitChercherUpdate dans le service
    //   (produitRechercher) => this.filtrerProduits(produitRechercher));
  }

  setProduit(id: number){
    const produit = this.produits.find((p) => p.id === id)

    if (produit) {
      this.produitService.setProduit(produit)
    }
  }
  // filtrerProduits(produitRechercher:string) {
  //   const nomProduitMini = produitRechercher.toLowerCase();
  //   this.produits = ITEMS.filter(produit => {
  //     return produit.name.toLowerCase().includes(nomProduitMini)
  //   })
  // }

  // ngOnDestroy() {
  //   this.produitChercherAbonnement.unsubscribe();
  // }
}
