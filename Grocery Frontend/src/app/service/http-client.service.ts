import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../model/User';
import {Product} from '../model/Product';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { 
     }

     getUsers()
  {
    console.log("test call");
    return this.httpClient.get<User[]>('http://localhost:8082/users/get');
  }
  addUser(newUser: User){
    return this.httpClient.post<User>('http://localhost:8082/users/add', newUser);
  }
  deleteUser(id){
    return this.httpClient.delete<User>('http://localhost:8082/users/' + id);
  }
  getProducts(){
    return this.httpClient.get<Product[]>('http://localhost:8082/products/get');
  }
  addProduct(newProduct: Product){
    return this.httpClient.post<Product>('http://localhost:8082/products/add', newProduct);
  }
  addUploadData(selectedFile) {
    return this.httpClient.post('http://localhost:8082/products/upload', selectedFile);
  }
  
  deleteProduct(id) {
    return this.httpClient.delete<Product>('http://localhost:8082/products/' + id);
  }
  updateProduct(updatedProduct: Product) {
    return this.httpClient.put<Product>('http://localhost:8082/products/update', updatedProduct);
  }

}
