package com.Todo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Todo.Model.Todo;

@Service
public class TodoServiceImp {
	
	@Autowired
	TodoService service;

	public TodoServiceImp() {
		super();
	}
	
	// Get
	
	// Get All Todos
	public List<Todo> getAllTodos(){
		return service.findAll();
	}
	
	// Get All by User
	public List<Todo> getAllTodosByUser(String user){
		return service.findByUserName(user);
	}
	
	// Get By Id
	public Todo getById(int id) {
		if( service.existsById(id) )
			return service.findById(id).get();
		else
			return null;
	}
	
	// ADD
	
	public void add(Todo todo) {
		service.save(todo);
	}
	
	// Update
	
	// Update by Todo
	public Boolean updateByTodo(Todo todo, int id) {
		Todo oldTodo = this.getById(id);
		if(oldTodo != null) {
			oldTodo.setDesc( todo.getDesc() );
			return true;
		}
		else
			return false;
	}
	
	// Delete
	
	// Delete by Todo
	public Boolean deleteByTodo(Todo todo) {
		Todo t = this.getById(todo.getId());
		
		if(t != null) {
			service.delete(t);
			return true;
		}
		else
			return false;
	}
	
	// Delete by id
	public Boolean deleteByID(int id) {
		Todo t = this.getById(id);

		if(t != null) {
			service.delete(t);
			return true;
		}
		else
			return false;
	}
	
	// Delete By Username
	public void deleteByUser(String user) {
		service.deleteByUserName(user);
	}
	
	

}
