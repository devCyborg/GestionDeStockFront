import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ProduitComponent} from "../produit/produit.component";

export const APP_ROUTES: Routes=[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'produits',      component: ProduitComponent },
  {path: '', redirectTo: 'produits', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutesModule { }
