import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-l-pipes',
  templateUrl: './l-pipes.component.html',
  styleUrls: ['./l-pipes.component.css']
})
export class LPipesComponent implements OnInit {

  constructor() { }
  langue = 'fr'
  message = "lorem ipsum lol ol";
  dateDuJour = new Date();
  ngOnInit(): void {
  }

  changerLangue(langue: string){
    this.langue = langue;
  }
}
