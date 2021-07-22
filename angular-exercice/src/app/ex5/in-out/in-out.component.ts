import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.css']
})
export class InOutComponent implements OnInit {

  title = "Lorem Ipsum"
  message = "Eiusmod mollit enim quis eu cupidatat cillum occaecat culpa voluptate."
  
  constructor() { }

  ngOnInit(): void {
  }

  parentUpdate(event:string) {
      this.title += event;
  }
}
