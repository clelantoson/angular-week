import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  constructor(
    public location: Location,
    public router: Router
  ) {
      console.log(this.location);
      console.log(this.router);
   }

  ngOnInit(): void {
  }

}
