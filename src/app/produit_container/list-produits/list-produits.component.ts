import { Component, OnInit } from '@angular/core';
import {Produit} from "../../shared/produit";
import {ProduitService} from "../../shared/services/produit.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  produits:Produit[];

  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits(){
    this.produitService.getProduits().subscribe(
      dataProduits => this.produits=dataProduits
    )
  }

  deleteProduit(produit: Produit) {
    this.produitService.deleteProduit(produit);

  }
}
