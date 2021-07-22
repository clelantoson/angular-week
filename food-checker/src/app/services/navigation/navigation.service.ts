import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  produitChercher = ''
  onProduitChercherUpdate = new Subject<string>();

  updateProduitChercher(nomProduit: any){
    this.produitChercher = nomProduit;
    console.log("produitchercher:", this.produitChercher)
    this.onProduitChercherUpdate.next(this.produitChercher);
  }
}
