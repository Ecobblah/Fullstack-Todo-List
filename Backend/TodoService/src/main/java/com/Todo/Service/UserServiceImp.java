package com.Todo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.Todo.Model.User;

@Service
public class UserServiceImp {
	
	@Autowired
	UserService service;

	public UserServiceImp() {
		super();
	}
	
	// find and check if User exist
	public User UserExist(String userName) {
		User user = service.findByUserName(userName);
		if(user == null)
			return null;
		else
			return user;
	}
	
	// Next step Check if Password is correct after User exist
	public boolean isPasswordCorrect(User user, String password) {
		if(user.getPassword().equals(password)) 
			return true;
		else
			return false;
	}
	
	// Add User
	public void addUser(User user) {
		user.setRole("user");
		service.save(user);
	}
	
	// hard coded data into the DB
	public void test() {
		User user1 = new User("fill", "password", "exam@gmail.com", "user");
		User user2 = new User("foo", "pass", "fake@gmail.com", "user");
		User user3 = new User("Admin", "admin", "admin@gmail.com", "admin");
		this.addUser(user1);
		this.addUser(user2);
		this.addUser(user3);
	}
	
	// Delete User, wont be Used, must find by User name then delete user Object
	public void deleteUser(User user) {
		service.delete(user);
	}

}
