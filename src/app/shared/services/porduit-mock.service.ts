import { Injectable } from '@angular/core';
import {Produit} from "../produit";

@Injectable({
  providedIn: 'root'
})
export class PorduitMockService {
  private _produits: Produit[] = [];

  constructor() {

    const p1 = new Produit("Livre", 50, 20);
    const p2 = new Produit("Cahier", 200, 5.50);
    const p3 = new Produit("Stylo", 500, 2.10);
    this._produits.push(p1,p2,p3);
  }

  public getProduits(): Produit[] {
    this._produits.forEach(p => console.log(p));
    return this._produits;
  }
}
