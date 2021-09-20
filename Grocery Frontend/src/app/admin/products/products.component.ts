import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { HttpClientService } from '../../service/http-client.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;
   productsRecieved: Array<Product>;
  action: string;
  selectedProduct: Product;
  
 
  constructor(private httpClientService: HttpClientService,
    private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.refreshData();
  }
  refreshData(){
     this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
     this.activatedRoute.queryParams.subscribe(
      (params)=>{
        this.action=params['action'];
        const id=params['id'];
        if(id){
          this.selectedProduct=this.products.find(product=>{
            return product.id === +id;
          });
        }
      }
      );
    }

    handleSuccessfulResponse(response) {
      this.products=new Array<Product>();
    this.productsRecieved = response;
    for(const product of this.productsRecieved){
      const productwithRetrievedImageField=new Product();
      productwithRetrievedImageField.id=product.id;
      productwithRetrievedImageField.name=product.name;
      productwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + product.picByte;
      productwithRetrievedImageField.price = product.price;
      productwithRetrievedImageField.picByte=product.picByte;
      this.products.push(productwithRetrievedImageField);
    }
  }
  addProduct(){
    this.selectedProduct=new Product();
    this.router.navigate(['admin','products'],{queryParams:{action:'add'}});
  }
  viewProduct(id: number) {
    this.router.navigate(['admin', 'products'], { queryParams: { id, action: 'view' } });
  }

}
