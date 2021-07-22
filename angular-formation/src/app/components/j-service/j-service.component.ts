import { Component, OnInit } from '@angular/core';
// import { NumberService } from 'src/app/services/number.service'
import { NumberService } from '../../services/number.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-j-service',
  templateUrl: './j-service.component.html',
  styleUrls: ['./j-service.component.css']
})
export class JServiceComponent implements OnInit {

  compteur: number;
  compteurAbonnement!: Subscription;

  constructor(private numberService: NumberService) {
    this.compteur = this.numberService.compteur;
  }

  ngOnInit(): void {
    this.compteurAbonnement = this.numberService.onCompteurUpdate.subscribe(
      // next
      (nouvelleValeur)=> this.compteur = nouvelleValeur);
  }

  onClickHandler() {
     this.numberService.incrementer();
  }

  ngOnDestroy(){
    this.compteurAbonnement.unsubscribe();
  }
}
