import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() msg!: string;
  @Output() myEventUpdate = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  update() {
    this.myEventUpdate.emit(' - mis à jour');
  }
}
