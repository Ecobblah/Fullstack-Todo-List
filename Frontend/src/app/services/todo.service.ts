import { Injectable } from '@angular/core';
import { todos } from '../data/todo-data';
import { todo } from '../data/todo-type';
import { Observable, BehaviorSubject, of, from, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../data/user-type';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private listSource = new Subject<Observable<any>>();
  private userName: string = null;

  constructor(private http: HttpClient) {}

   // Todo Source
  getTodoSource(): Observable<any> {
    return this.listSource.asObservable();
  }

   // future User todos not all, that for admin only
   
  getTodos() {
    const list = this.http.get('http://localhost:8090/api/todos');
    this.listSource.next(list);
  }

  // Get user Todos
  getTodosByUserName() {
    const list = this.http.get('http://localhost:8090/api/todos/' + this.userName);
    this.listSource.next(list);
  }

  // Currently this add and Updates
  addTodo(item: todo) {

    if(item.desc.replace(/\s/g, '').length !== 0) {
      this.http.post('http://localhost:8090/api/todo/', item).subscribe(
        data => {},
        error => {
          console.log('Message: ' + error.error.text + ' with status code ' + error.status + ' ' + error.statusText);
          // refresh
          this.getTodosByUserName();
      }
      );
    }
  }

  deleteTodo(id: number): void {
    this.http.delete('http://localhost:8090/api/todo/' + id).subscribe(
      data => {},
      error => {
        console.log(error.text);
        // refresh
        this.getTodosByUserName();
       }
    );
  }
  
  // Get userName
  getUser(): string {
    return this.userName;
  }

  // Set userName
  setUser(userName: string) {
    this.userName = userName;
  }

  verify(username: string, pass: string): Observable<any> {
    const item: User = {
      id: null,
      userName: username,
      password: pass,
      email: null,
      role: null
    }
    return this.http.post('http://localhost:8090/api/user', item);
  }

  // SignUp
  SignUpUser(username, pass): Observable<any> {
    const item: User = {
      id: null,
      userName: username,
      password: pass,
      email: null,
      role: null
    };
    return this.http.post('http://localhost:8090/api/create/', item);
  }

}
