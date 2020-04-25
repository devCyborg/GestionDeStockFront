import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ListProduitsComponent} from "../produit_container/list-produits/list-produits.component";
import {AddProduitComponent} from "../produit_container/add-produit/add-produit.component";
import {EditProduitComponent} from "../produit_container/edit-produit/edit-produit.component";

export const APP_ROUTES: Routes=[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'produits', component: ListProduitsComponent,
    children: [
      {
        path: 'add',
        component: AddProduitComponent,
      },
      {
        path: 'edit/:reference',
        component: EditProduitComponent,
      }
    ]
  },
  {path: '', redirectTo: 'produits', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      APP_ROUTES,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutesModule { }
