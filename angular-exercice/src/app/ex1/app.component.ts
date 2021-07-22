import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  index = 0;
  titre = "Lorem Ipsum";
  message = "Incididunt esse esse ut reprehenderit Lorem non enim laboris cillum."
  imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Akita_inu.jpeg'
}
