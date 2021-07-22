import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../../../assets/items';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits = ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
