package com.projectTwo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projectTwo.Entity.User;

public interface UserInterface extends JpaRepository<User,Long> {

}
