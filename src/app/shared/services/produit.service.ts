import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, pipe, Subject, Subscription} from "rxjs";
import {API_URLS} from "../../config/api.url.config";
import {Produit} from "../produit";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produitsSubj : BehaviorSubject<Produit[]> = new BehaviorSubject<Produit[]>([]);
  produitSubj : BehaviorSubject<Produit> = new BehaviorSubject<Produit>(null);

  constructor(private httpClient : HttpClient) { }

  getProduits(): BehaviorSubject<Produit[]>{
    this.httpClient.get(API_URLS.PRODUITS_URL)
      .subscribe((data:any)=> {
        this.produitsSubj.next(data.content);
    });
    return this.produitsSubj;
  }

  ajouterProduit(produit: Produit) {
    this.httpClient.post(API_URLS.PRODUITS_URL,produit).subscribe((dataProduct:Produit) => {
      console.log('dataProduct : ',dataProduct);
      this.produitsSubj.value.push(dataProduct);
    });
  }

  updaterProduit(produit: Produit): any{
    this.httpClient.put(API_URLS.PRODUITS_URL+`/${produit.reference}`,produit).subscribe(p =>{
      let index= this.produitsSubj.value.findIndex(p => p.reference===produit.reference);
      console.log("produit retourné : "+p);
      this.produitsSubj.value[index]=p;
    });
  }

  deleteProduit(produit: Produit): any {
      this.httpClient.delete(API_URLS.PRODUITS_URL+`/${produit.reference}`).subscribe( (response) => {
        let index= this.produitsSubj.value.findIndex(p => p.reference===produit.reference);
        console.log((index));
          this.produitsSubj.value.splice(index,1);
          }
        );
    }
}
