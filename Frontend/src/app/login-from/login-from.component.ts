import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CanActivate, Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { TodoService } from '../services/todo.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login-from',
  templateUrl: './login-from.component.html',
  styleUrls: ['./login-from.component.css']
})
export class LoginFromComponent implements OnInit {

  userForm = this.fb.group({
    username: [null, Validators.compose([Validators.required])],
    password: [null, Validators.required]
  });
  constructor(private fb: FormBuilder, private cookieService: CookieService,
     private route: Router, private service: TodoService, private _snackBar: MatSnackBar) { }

  onSubmit() {
    const user = this.userForm.value.username;
    const pass = this.userForm.value.password;

    this.service.verify(user, pass).subscribe( data => {
      //console.log(data);
    },
    error => {
      const value = error.error.text.toString();
      if( value === "Found"){
        this.service.setUser(user);
        this.cookieService.set('in-use', this.userForm.value.username, 0.02083333333);
        this.route.navigate(['/todolist/' + user]);
      }
      else if(value === 'Invalid'){
        this._snackBar.open('Invalid info','Error', {
          duration: 2000,
        });

      }
      else if(value === 'Dont exist'){
        
        this._snackBar.open('User dont exist', 'Error', {
          duration: 2000,
        });
      }
    }
    );

    //cookies expires in 30 minutes
    // this.cookieService.set('in-use', this.userForm.value.email, 0.02083333333);
    // this.route.navigate(['/todolist/' + user]);
  }

  onSignUp() {
    const user = this.userForm.value.username;
    const pass = this.userForm.value.password;

    this.service.SignUpUser(user, pass).subscribe(
      error => {
      // if(error.error.text.toString() === 'User Created') {
        
      // }
      // else {
      //   console.log('User already exist');
      // }
      
    });
    
    this.onSubmit();
  }

  ngOnInit() {
  }

}
