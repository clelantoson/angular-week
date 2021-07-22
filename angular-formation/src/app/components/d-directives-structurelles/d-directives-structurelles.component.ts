import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d-directives-structurelles',
  templateUrl: './d-directives-structurelles.component.html',
  styleUrls: ['./d-directives-structurelles.component.css']
})
export class DDirectivesStructurellesComponent implements OnInit {

  isActive = true;
  prenoms = ['John', 'Maude', 'Rick', 'Ella'];
  prenom = "Yohann";

  constructor() { 
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("Initialisation du composant");
  }

}
