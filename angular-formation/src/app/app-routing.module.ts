import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'
import { Observable } from "rxjs";
import { TitleComponent } from "./components/a-title/title.component";
import { InterpolationComponent } from "./components/b-interpolation/interpolation.component";
import { IObservableComponent } from "./components/i-observable/i-observable.component";
import { BackComponent } from "./components/k-routing/back/back.component";
import { ParamsComponent } from "./components/k-routing/params/params.component";

const routes: Routes = [
	{path: '', component: TitleComponent},
	{path: 'interpolation', component: InterpolationComponent},
	{path: 'obs', component: IObservableComponent},
	{
        path: 'params/:name',
        component: ParamsComponent
    },
    { path: 'back', component: BackComponent },
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
