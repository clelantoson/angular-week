import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { Observable } from "rxjs";
import { TitleComponent } from "./components/a-title/title.component";
import { InterpolationComponent } from "./components/b-interpolation/interpolation.component";
import { IObservableComponent } from "./components/i-observable/i-observable.component";
import { NotFoundComponent } from "./components/k-routing/not-found/not-found.component";
import { BackComponent } from "./components/k-routing/back/back.component";
import { ParamsComponent } from "./components/k-routing/params/params.component";
import { LPipesComponent } from "./components/l-pipes/l-pipes.component";

const routes: Routes = [
    { path: '', component: TitleComponent },
    { path: 'interpolation', component: InterpolationComponent },
    { path: 'obs', component: IObservableComponent },
    {
        path: 'params/:name',
        component: ParamsComponent
    },
    { path: 'back', component: BackComponent },
    { path: 'pipes', component: LPipesComponent },
    // Attention, il doit etre en dernier
    {
        path: '**',
        component: NotFoundComponent
    },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
