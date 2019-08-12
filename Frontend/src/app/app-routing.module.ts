import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFromComponent } from './login-from/login-from.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DontExistComponent } from './dont-exist/dont-exist.component';
import { AuthgaurdGuard } from './authgaurd.guard';

const routes: Routes = [
  {path: 'login', component: LoginFromComponent},
  {path: 'todolist/:username', canActivate: [AuthgaurdGuard], component: TodoListComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: '**', component: DontExistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
