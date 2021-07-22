import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './core/app.component';
import { UtilisateurComponent } from './ex2/utilisateur.component';
import { ImagesComponent } from './ex3/images.components';
import { TodoListComponent } from './ex4/todo-list/todo-list.component';
import { InOutComponent } from './ex5/in-out/in-out.component';
import { ArticleComponent } from './ex5/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    ImagesComponent,
    TodoListComponent,
    InOutComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
