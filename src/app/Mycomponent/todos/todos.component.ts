import { Component } from '@angular/core';
import {Todo} from "../../Todo"
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor,TodoItemComponent,AddTodoComponent,NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  todos:Todo[]
  localItem: string
  constructor(){
    this.localItem = localStorage.getItem("todos") as string
    console.log(this.localItem)
    if (this.localItem==null){

      this.todos = [ ]
    }
    else{
      this.todos = JSON.parse(this.localItem)
    }
  }
  deleteTodo(todo:Todo){
    console.log("event emit is triggred")
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))

  }
  todoAdd(todo:Todo){
    console.log(todo);
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  toggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    console.log(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))

  }
}
