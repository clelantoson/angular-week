import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_ID, API_URL_SEARCH, PAGE_PARAMS } from '../api/url';
import { Page, PageDetail } from '../classes/Page';
import { Produit } from '../classes/Produit';
import { NavigationService } from './navigation/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

	produits: Produit[] = [];
	produitDetail: Produit | undefined;
	pageActuelle = 0;
	pageTotal = 0;

	constructor(
	  private navigationService: NavigationService,
	  private http: HttpClient
	) { }

	fetchProduits(page=1) {
	  // si produitChercher est vide ou undefined ou utilise la valeur "Riz"
	  // let query = this.navigationService.produitChercher || "Riz";
	  let query = this.navigationService.produitChercher;
	  // ...terms="riz"&page=3
	  const URL = API_URL_SEARCH + query + PAGE_PARAMS + page;
	  console.log(URL);
	  return this.http.get<Page>(URL);
	}

	fetchProduit(id: number) {
	  const URL = API_URL_ID + id;
	  return this.http.get<PageDetail>(URL);
	}

	setProduits(nvxProduits: Produit[]) {
	  this.produits = nvxProduits;
	}

	setProduit(nvxProduit: Produit) {
	  this.produitDetail = nvxProduit;
	}
  }
