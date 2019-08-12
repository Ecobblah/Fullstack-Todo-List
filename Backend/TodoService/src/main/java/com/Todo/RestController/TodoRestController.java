package com.Todo.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Todo.Model.Todo;
import com.Todo.Service.TodoServiceImp;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoRestController {

	@Autowired
	TodoServiceImp service;
	public TodoRestController() {
		
	}
	
	@GetMapping("/todos")
	public List<Todo> getAllTodo(){
		return service.getAllTodos();
	}
	
	@GetMapping("/todos/{user}")
	public ResponseEntity<List<Todo>> getUserTodos(@PathVariable String user){
		if( service.getAllTodosByUser(user) == null )
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<>(service.getAllTodosByUser(user), HttpStatus.OK);
	}
	
	@GetMapping("todo/{id}")
	public ResponseEntity<Todo> getTodoById(@PathVariable int id){
		if(service.getById(id) == null)
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
	}
	
	@PostMapping("todo")
	public ResponseEntity<String> addTodo(@RequestBody Todo todo){
		service.add(todo);
		return new ResponseEntity<>("Todo was added", HttpStatus.OK);
	}
	
	@DeleteMapping("todo/{id}")
	public ResponseEntity<String> deleteTodo(@PathVariable int id){
		if(service.deleteByID(id))
			return new ResponseEntity<>("Todo was Deleted", HttpStatus.OK);
		else
			return new ResponseEntity<>("Todo was not found", HttpStatus.BAD_REQUEST);
	}
	
	@PutMapping("todo")
	public ResponseEntity<String> updateTodo(@RequestBody Todo todo){
		service.add(todo);
		return new ResponseEntity<>("Todo was updated", HttpStatus.OK);
	}
}
