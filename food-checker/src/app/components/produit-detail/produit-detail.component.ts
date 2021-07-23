import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Produit } from 'src/app/classes/Produit';
import { ProduitService } from 'src/app/services/produit.service';
import { API_URL_NUTRISCORE } from 'src/app/api/url';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {

  produit: Produit | undefined;
  id!:number;
  nutriscoreLink = API_URL_NUTRISCORE;

  constructor(private route: ActivatedRoute,
    private produitService: ProduitService) {
    this.produit = this.produitService.produitDetail
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => this.id = params.id)
  }

}
