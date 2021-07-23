import { Component, OnInit } from '@angular/core';
//import { ITEMS } from '../../../assets/items';
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
  produits: Produit[];
  produitChercherAbonnement!: Subscription;
  isLoading = false;
  pagination = {index: 0, total: 0}

  constructor(
    private navigationService: NavigationService,
    private produitService: ProduitService
  ) {
    this.produits = this.produitService.produits;
  }

  ngOnInit(): void {
    this.produitChercherAbonnement = this.navigationService.onProduitChercherUpdate.subscribe(
      () => {
        this.isLoading = true;
        this.produitService.fetchProduits().subscribe(
          this.fetchProduitNext,
          (e) => console.error(e),
          () => { this.isLoading = false}
        );
      }
    );
    if (!this.produits.length) {
      this.isLoading = true;
      this.produitService.fetchProduits().subscribe(
        this.fetchProduitNext,
        (e) => console.error(e),
        () => { this.isLoading = false }
      );
    }
  }

  fetchProduitNext = (page: Page) => {
    this.produitService.setProduits(page.products)
    this.produits = this.produitService.produits;
    // console.log(page);
    this.pagination.index = page.page;
    this.pagination.total = page.page_count;
  }


  getArrayPages() {
      const array = [];
      for(let i = 1; i <= this.pagination.total; i++) {
        array.push(i);
      }
      return array;
  }

  changePage(index: number) {
    const nextOrPrevPage = this.pagination.index + index;
    const maxPage = this.pagination.total;
    if (nextOrPrevPage >= maxPage || nextOrPrevPage <= 1) return ;
    this.isLoading =  true;
    this.produitService.fetchProduits(nextOrPrevPage).subscribe(
      this.fetchProduitNext,
      (e) => console.error(e),
      () => { this.isLoading = false }
    );
  }

  loadPage(numeroPage: number) {
    this.isLoading = true;
     this.produitService.fetchProduits(numeroPage).subscribe(
        this.fetchProduitNext,
        (e) => console.error(e),
        () => { this.isLoading = false}
     );
  }

  setProduit(id: number) {
    const produit = this.produits.find(
      (p) => p.id === id
    )
    // if (produit != undefined) {
    if (produit) {
      this.produitService.setProduit(produit);
    }
  }

  ngOnDestroy() {
    this.produitChercherAbonnement.unsubscribe();
  }
}
