import { Component, EventEmitter, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() monEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  envoyerRecherche(event: any) {
    const nomRecherche = event.target.search.value;
    this.monEvent.emit(nomRecherche);
    event.preventDefault();
  }
}
