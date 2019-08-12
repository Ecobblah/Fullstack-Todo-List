package com.Todo.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Todo.Model.User;
import com.Todo.Service.UserServiceImp;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class UserRestController {
	
	@Autowired
	UserServiceImp service;

	public UserRestController() {
		// TODO Auto-generated constructor stub
	}
	
	@PostMapping("/user")
	public ResponseEntity<String> ConfirmUser(@RequestBody User user) {
		User u = service.UserExist(user.getUserName());
		if(u != null) {
			if(service.isPasswordCorrect(u, user.getPassword()))
				return new ResponseEntity<>("Found",HttpStatus.OK);
			else
				return new ResponseEntity<>("Invalid",HttpStatus.OK);
		}
		else
			return new ResponseEntity<>("Dont exist",HttpStatus.OK);
	}
	
	@PostMapping("/create")
	public ResponseEntity<String> CreatUser(@RequestBody User user) {
		User u = service.UserExist(user.getUserName());
		
		if(u == null) {
			service.addUser(user);
			return new ResponseEntity<>("User Created",HttpStatus.OK);
		}
		else
			return new ResponseEntity<>("User Already exist",HttpStatus.OK);
	}
	
	@GetMapping("/")
	public ResponseEntity<String> dummyData() {
		service.test();
		return new ResponseEntity<>("Test subject been added",HttpStatus.OK);
	}
	
	@DeleteMapping("/user")
	public ResponseEntity<String> deleteUser(@RequestBody User user) {
		
		/*
		 * If user doesn't exist delete return User isn't found
		 */
		return new ResponseEntity<>("User deleted",HttpStatus.OK);
	}

}
