import { Component, OnInit } from '@angular/core';
import { NumberService } from '../../services/number.service'

@Component({
  selector: 'app-j-service',
  templateUrl: './j-service.component.html',
  styleUrls: ['./j-service.component.css']
})
export class JServiceComponent implements OnInit {

  compteur: number;

  constructor(private numberService: NumberService) {
    this.compteur = this.numberService.compteur;
  }

  ngOnInit(): void {
    this.numberService.onCompteurUpdate.subscribe(
      // next
      (nouvelleValeur)=> this.compteur = nouvelleValeur);
  }

  onClickHandler() {
     this.numberService.incrementer();
  }
}
