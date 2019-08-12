import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userName: string = null;
  constructor(private service: TodoService, private route: Router, private cookieService: CookieService) {
    this.userName = this.service.getUser();
   }

  ngOnInit() {
    this.userName = this.service.getUser();
  }

  logout() {
    this.cookieService.delete('in-use');
    this.route.navigate(['/login']);
  }

}
