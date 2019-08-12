import { Component, OnInit, OnDestroy } from '@angular/core';
import { todo } from '../data/todo-type';
import { TodoService } from '../services/todo.service';
import { MatDialog } from '@angular/material';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  list: [todo];

  ngOnInit(): void {}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  // tslint:disable-next-line: max-line-length
  constructor(private service: TodoService, public dialog: MatDialog, private route: ActivatedRoute, private cookieService: CookieService, private router: Router) {

    const userName: Observable<string> = route.params.pipe(map(p => p.username));

    userName.subscribe(data => this.service.setUser(data));

    this.subscription = this.service.getTodoSource().subscribe(obs => {
      obs.subscribe(
        (data: any) => {
          this.list = data;
          this.list.reverse();
          this.ngOnInit();
        },
        (error: any) =>  console.log('Message: ' + error.error.text + ' with status code ' + error.status + ' ' + error.statusText)
        );
    });

    // starts fetching the data
    this.service.getTodosByUserName();
  }

  // Opens Dialog for editing
  openDialog(item: todo): void {
    if ( this.cookieService.get('in-use').length === 0 ) {
      this.router.navigate(['/login']);
    } 
    else {
      const dialogRef = this.dialog.open(DialogWindowComponent, {
        // height: '400px',
        // width: '250px',
        data: {i: item}
        });
      dialogRef.afterClosed().subscribe((data: todo) => {
        if (data !== null) {
          console.log('Your new description: ' + data.desc);
          this.service.addTodo(data);
        }
      });
    }
  }

  // logout
  onClick = (Todo: todo) => {
    if( this.cookieService.get('in-use').length === 0 ) {
      this.router.navigate(['/login']);
    }
    else {
      Todo.checked = !Todo.checked;
      this.service.addTodo(Todo);
    }
   
  }
  // delete todo
  handleDelete(id: number) {
    if( this.cookieService.get('in-use').length === 0 ) {
      this.router.navigate(['/login']);
    }
    else {
      this.service.deleteTodo(id);
    }
    
  }
  // return length of list
  length(): number {
    return this.list.length;
  }
}

