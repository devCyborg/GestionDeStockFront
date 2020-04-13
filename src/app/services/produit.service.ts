import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API_URLS} from "../config/api.url.config";
import {Produit} from "../shared/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpClient : HttpClient) { }

  getProduits():Observable<any>{
    return this.httpClient.get(API_URLS.PRODUITS_URL);
  }

  ajouterProduit(produit: Produit): Observable<any> {
    return this.httpClient.post(API_URLS.PRODUITS_URL,produit);
  }

  updaterProduit(produit: Produit): Observable<any> {
    return this.httpClient.put(API_URLS.PRODUITS_URL,produit);
  }

  deleteProduit(reference: string): Observable<any> {
    return this.httpClient.delete(API_URLS.PRODUITS_URL+`/${reference}`);
  }
}
