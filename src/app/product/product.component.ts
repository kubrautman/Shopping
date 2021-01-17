import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import {AlertifyService} from '../services/alertify.service'
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService ]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService :AlertifyService,
    private productService:ProductService) {
    
   }
   title ="Ürün Listesi"
   filterText="L"
   products: Product[] = [];
  
   ngOnInit(): void {
   this.productService.getProducts().subscribe(data=>{
    this.products= data;
   })
   
  }
  addToShopBag(product: Product){
    this.alertifyService.success(product.name + " added.")
  }
}
