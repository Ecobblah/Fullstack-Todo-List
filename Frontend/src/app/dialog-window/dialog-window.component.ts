import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { todo } from '../data/todo-type';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {

  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<DialogWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: todo,
     private service: TodoService ) {}

  onNoClick(): void {
    console.log('cancle Update');
    // update the list
    // HTTP put
  }

}
