import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import {AlertifyService} from '../services/alertify.service'
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService :AlertifyService, private http:HttpClient) {
    
   }
   title ="Ürün Listesi"
   filterText="L"
   products: Product[] = [];
  
   ngOnInit(): void {
    this.http.get<Product[]>("http://localhost:3000/products").subscribe(data=>{
      this.products=data;
    });
  }
  addToShopBag(product: Product){
    this.alertifyService.success(product.name + " added.")
  }
}
