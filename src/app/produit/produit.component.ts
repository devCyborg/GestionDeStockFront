import { Component, OnInit } from '@angular/core';
import {PorduitMockService} from "./porduit-mock.service";
import {Produit} from "../shared/produit";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits:Produit[]=[];
  constructor(private produitMockService:PorduitMockService) { }

  ngOnInit(): void {
   this.produits=  this.produitMockService.getProduits();
  }

}
