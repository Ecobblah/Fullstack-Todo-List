package com.Todo.Service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Todo.Model.Todo;

@Repository
public interface TodoService extends JpaRepository<Todo, Integer>{
	public List<Todo> findByUserName(String user);
	public void deleteByUserName(String user);
}
