import { Injectable } from "@angular/core";
import { API_URL_SEARCH } from "src/app/api/url";
import { NavigationService } from "src/app/services/navigation/navigation.service";
import { HttpClient } from '@angular/common/http'
import { Produit } from "../classes/Produit";
import { Page } from "../classes/Page";

 @Injectable({
	 providedIn: 'root'
 })

 export class ProduitService {

	produits: Produit[] = [];
	produitDetail: Produit | undefined;

	constructor(private navigationService: NavigationService, private http: HttpClient){

	}

	fetchProduits(){
		let query = this.navigationService.produitChercher;
		const URL = API_URL_SEARCH + query;
		console.log(URL);
		return this.http.get<Page>(URL);
	}

	setProduit(newProduit: Produit){
		this.produitDetail = newProduit;
	}
 }
