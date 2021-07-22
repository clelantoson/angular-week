import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-directives-attributs',
  templateUrl: './e-directives-attributs.component.html',
  styleUrls: ['./e-directives-attributs.component.css']
})
export class EDirectiveAttributsComponent implements OnInit {

  couleur = "coral";
  monStyle = {
    backgroundColor: 'blue'
  }

  maClasse = "txt";

  mesClasses = {
    txt: this.couleur == 'coral',
    error: true
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
