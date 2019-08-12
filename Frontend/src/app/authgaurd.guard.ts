import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TodoService } from './services/todo.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdGuard implements CanActivate {
  constructor(private route: Router, private service: TodoService, private cookieService: CookieService) {
  }
  canActivate(): boolean {
    if (this.cookieService.get('in-use')) {
      return true;
    } else {
      return false;
    }
  }

  
  
}
