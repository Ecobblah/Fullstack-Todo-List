package com.Todo.Service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Todo.Model.User;

@Repository
public interface UserService extends JpaRepository<User, Integer> {
	public User findByUserName(String UserName);
	public User findByEmail(String email);
}
