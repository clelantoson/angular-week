import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-evenement',
  templateUrl: './f-evenement.component.html',
  styleUrls: ['./f-evenement.component.css']
})
export class FEvenementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sayHello() {
    console.log("Hello !");
    
  }

  afficherSaisi(event: any) {
    //  console.log(event);
    console.log(event.target.value);
  }
}
