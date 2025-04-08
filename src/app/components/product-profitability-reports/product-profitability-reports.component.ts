import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { HttpService } from '../../services/http.service';
import { ProductProfitabilityModel } from '../../models/product-profitability';
 
 @Component({
   selector: 'app-product-profitability-reports',
   standalone: true,
   imports: [SharedModule],
   templateUrl: './product-profitability-reports.component.html',
   styleUrl: './product-profitability-reports.component.css'
 })
 export class ProductProfitabilityReportsComponent implements OnInit {
   data: ProductProfitabilityModel[] = [];
 
   constructor(
     private http: HttpService
   ){}
   
   ngOnInit(): void {
     this.get();
   }
 
   get(){
     this.http.get<ProductProfitabilityModel[]>("Reports/ProductProfitabilityReports", (res)=> {
       this.data = res;
     })
   }
 }