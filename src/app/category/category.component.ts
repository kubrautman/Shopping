import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title ="Category"
  categories : Category[] =[
    {id:1,name: "Elektronik"},
  {id:2,name: "Bilgisayar"},
  {id:3,name: "Müzik"},
  {id:2,name: "Küçük Ev Aletleri"},

  ]

}
