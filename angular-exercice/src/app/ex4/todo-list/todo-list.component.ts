import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: string[] = [];
  todos2: {text:string, color:string, size:string}[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  addTask(event:any) {
    // step 1
    const task = event.target.text.value;
    this.todos.push(task);
    event.preventDefault();
  }

  addTask2(event:any) {
    // step 2
    const text =  event.target.text.value;
    const size = event.target.size.value;
    const color = event.target.color.value;

    const task2 = {
      text,
      size,
      color
    };
    this.todos2.push(task2);
    event.preventDefault();
  }

}
