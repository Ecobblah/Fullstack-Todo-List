import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatRadioModule, MatCardModule, MatSidenavModule, MatGridListModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatMenuModule} from '@angular/material/menu';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogWindowComponent } from './dialog-window/dialog-window.component';
import {MatDividerModule} from '@angular/material/divider';
import { LoginFromComponent } from './login-from/login-from.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LayoutModule } from '@angular/cdk/layout';
import { CookieService } from 'ngx-cookie-service';
import { DontExistComponent } from './dont-exist/dont-exist.component';
import { AuthgaurdGuard } from './authgaurd.guard';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TodoListComponent,
    TodoInputComponent,
    DialogWindowComponent,
    LoginFromComponent,
    DontExistComponent,
  ],
  entryComponents: [
    DialogWindowComponent // AND HERE
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    LayoutModule,
    MatSidenavModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [CookieService, AuthgaurdGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
