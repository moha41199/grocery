package com.projectTwo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectTwo.Entity.User;
import com.projectTwo.dao.UserInterface;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path="users")
public class UserController {
	@Autowired
	private UserInterface userInterface;
	@GetMapping("/get")
	public List<User>getUsers(){
		return userInterface.findAll();
	}
	@PostMapping("/add")
	public void createUser(@RequestBody User user) {
		userInterface.save(user);
	}
	@DeleteMapping(path= {"/{id}"})
	public User deleteUser(@PathVariable("id") long id) {
		User user=userInterface.getOne(id);
		userInterface.deleteById(id);
		return user;
	}

}
