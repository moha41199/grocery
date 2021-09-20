package com.projectTwo.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.projectTwo.Entity.Products;
import com.projectTwo.dao.ProductInterface;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path="products")
public class ProductController {
	private byte[] bytes;
	@Autowired
	private ProductInterface productInterface;
	@GetMapping("/get")
	public List<Products>getProducts(){
		return productInterface.findAll();
	}
	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException{
		this.bytes=file.getBytes();
	}
	@PostMapping("/add")
	public void createProduct(@RequestBody Products product)throws IOException{
		product.setPicByte(this.bytes);
		productInterface.save(product);
		this.bytes=null;
	}
	@PutMapping("/update")
	public void updateProduct(@RequestBody Products product) {
		productInterface.save(product);
	}
	@DeleteMapping(path= {"/{id}"})
	public Products deleteProduct(@PathVariable("id") long id) {
		Products product=productInterface.getOne(id);
		productInterface.deleteById(id);
		return product;	
	}

}
