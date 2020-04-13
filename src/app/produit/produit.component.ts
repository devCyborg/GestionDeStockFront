import { Component, OnInit } from '@angular/core';
import {PorduitMockService} from "./porduit-mock.service";
import {Produit} from "../shared/produit";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits:Produit[];
  produitForm: FormGroup;

  constructor(private produitService:ProduitService,private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.produitForm = this.fb.group({
      reference: ['',Validators.required],
      quantite: '',
      prixUnitaire: ''
    });
    this.loadProduits();

  }
  loadProduits(){
    this.produitService.getProduits().subscribe(data => this.produits=data.content);
  }

  onSubmit() {
    console.log(this.produitForm);
  }

  ajouterProduit() {
    const produit = this.produitForm.value;
    this.produitService.ajouterProduit(produit).subscribe(data => /*this.produits.push(data)*/this.loadProduits());
  }
}
