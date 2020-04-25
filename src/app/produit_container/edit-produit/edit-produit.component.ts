import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProduitService} from "../../shared/services/produit.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Produit} from "../../shared/produit";

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  produitForm: FormGroup;
  referenceParam :String='';
  produitPourEdition : Produit = new Produit('',0,0,);
  constructor(private fb: FormBuilder,private produitService:ProduitService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm(this.produitPourEdition);
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.referenceParam = params.get('reference');
        this.produitService.getProduits().getValue().filter(value => value.reference===this.referenceParam).map((value:Produit) => {
          this.produitPourEdition=value;
          console.log('produit ',this.produitPourEdition);
          this.initForm(this.produitPourEdition);
        });
        }
    )


  }

  private initForm(produitPourEdition:Produit) {
    this.produitForm = this.fb.group({
      reference: [produitPourEdition.reference, Validators.required],
      quantite: produitPourEdition.quantite,
      prixUnitaire: produitPourEdition.prixUnitaire,
    });
  }

  modifierProduit() {
    console.log('produit ', this.produitForm.value);
    this.produitService.updaterProduit(this.produitForm.value);
  }
}
