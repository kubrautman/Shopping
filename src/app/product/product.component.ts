import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { AlertifyService } from '../services/alertify.service'
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute) {

  }
  title = "Product List"
  filterText = ""
  products: Product[] = [];

  ngOnInit(): void {
   

    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data;
        console.log('scope is',  this.products )
      });
    }
    )


  }
  addToShopBag(product: Product) {
    this.alertifyService.success(product.name + " added.")
  }
}
