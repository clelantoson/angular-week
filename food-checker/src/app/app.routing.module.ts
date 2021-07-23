import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProduitListComponent } from "./components/produit-list/produit-list.component";
import { ProduitDetailComponent } from "./components/produit-detail/produit-detail.component";


const routes: Routes = [
	{ path: '', component: ProduitListComponent},
	{ path: 'produit/:id', component: ProduitDetailComponent},

]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
