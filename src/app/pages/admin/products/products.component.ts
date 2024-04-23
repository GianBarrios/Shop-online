import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  
  isSidePanelVisible: boolean = false;
  productObj: any = {
      "productId": 0,
      "productSku": "",
      "productName": "",
      "productPrice": 0,
      "productShortName": "",
      "productDescription": "",
      "createdDate": new Date(),
      "deliveryTimeSpan": "",
      "categoryId": 0,
      "productImageUrl": "" 
  };
  categoryList: any [] = [];
  productList: any [] = [];

 constructor(private productSrv: ProductService){

 }
  ngOnInit(): void {
    this.getProducts();
    this.getALlCategory();
  }

  getProducts(){
    this.productSrv.getProducts().subscribe(
      (res:any) => {
        this.productList = res.data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  getALlCategory(){
    this.productSrv.getCategory().subscribe(
      (res:any) => {
        this.categoryList = res.data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
 onUpdate() {
  this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
    debugger;
    if(res.result) {
      alert("Producto Creado")
      this.getProducts();
    } else {
      alert(res.message)
    }
  })
 }
 onSave() {
  this.productSrv.saveProduct(this.productObj).subscribe((res:any)=>{
    debugger;
    if(res.result) {
      alert("Producto Creado")
      this.getProducts();
    } else {
      alert(res.message)
    }
  })
 }

  onEdit(item: any ){
    this.productObj = item;
    this.openSidePanel();
  }
  
  openSidePanel (){
    this.isSidePanelVisible = true;
  } 
  
  closeSidePanel () {
    this.isSidePanelVisible = false;
  }
}