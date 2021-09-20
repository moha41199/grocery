package com.projectTwo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectTwo.Entity.Products;

public interface ProductInterface extends JpaRepository<Products,Long> {
	
}
