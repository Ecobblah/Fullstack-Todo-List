import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { FormBuilder } from '@angular/forms';
import { todo } from '../data/todo-type';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  loginUser;

  constructor(private service: TodoService, private fb: FormBuilder,
    private cookieService: CookieService, private router: Router) {
   }

  inputForm = this.fb.group({
    input: ['']
  });

  ngOnInit() {
    this.loginUser = this.service.getUser();
  }

  onSubmit() {

    if( this.cookieService.get('in-use').length === 0 ) {
      this.router.navigate(['/login']);
    }
    else {
      const i: todo = {
        id: null,
        userName: this.loginUser,
        desc: this.inputForm.value.input,
        checked: false,
        targetDate: new Date()
      };
      this.service.addTodo(i);
      this.inputForm.reset();
      // console.log(this.inputForm.value.input);
    }
  }
}
