import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InterpolationComponent } from './components/b-interpolation/interpolation.component';
import { TitleComponent } from './components/a-title/title.component';
import { PropertyComponent } from './components/c-liaison_propriete/property-binding.component';

import { AppComponent } from './core/app.component';
import { DDirectivesStructurellesComponent } from './components/d-directives-structurelles/d-directives-structurelles.component';
import { EDirectiveAttributsComponent } from './components/e-directives-attributs/e-directives-attributs.component';
import { FEvenementComponent } from './components/f-evenement/f-evenement.component';
import { GInputComponent } from './components/g-input/g-input.component';
import { HOutputComponent } from './components/h-output/h-output.component';
import { IObservableComponent } from './components/i-observable/i-observable.component';
import { JServiceComponent } from './components/j-service/j-service.component';
import { KRoutingComponent } from './components/k-routing/k-routing.component';
import { AppRoutingModule } from './app-routing.module';
import { ParamsComponent } from './components/k-routing/params/params.component';
import { BackComponent } from './components/k-routing/back/back.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InterpolationComponent,
    PropertyComponent,
    DDirectivesStructurellesComponent,
    EDirectiveAttributsComponent,
    FEvenementComponent,
    GInputComponent,
    HOutputComponent,
    IObservableComponent,
    JServiceComponent,
    KRoutingComponent,
    ParamsComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
