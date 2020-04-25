import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitService} from "../../shared/services/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  produitForm: FormGroup;

  constructor(private fb: FormBuilder,private produitService:ProduitService,private router: Router) {
    this.initForm();
  }

  private initForm() {
    this.produitForm = this.fb.group({
      reference: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    });
  }

  ajouterProduit() {
    const produit = this.produitForm.value;
    this.produitService.ajouterProduit(produit);

  }

  ngOnInit(): void {
  }

  onSubmit() {

  }


}
