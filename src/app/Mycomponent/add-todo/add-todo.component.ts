import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  title !: string
  desc !: string
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  OnSubmit(){
    console.log("onsubmit")
    const todo = {
      srno: 8,
      title : this.title,
      desc: this.desc,
      active: true
    }
    this.addTodo.emit(todo)

  }

}
