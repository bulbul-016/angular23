import { Component } from '@angular/core';
import TodoTask from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ToDo list - event, directive, component, etc
  todos: TodoTask[] = [];

  name: string = '';
  description: string = '';

  deleteTodo = (name: string) => { // declarative -> this = context of call
    this.todos = this.todos.filter( // TodoList -> filter -> element without condition triggering
      (element: TodoTask) => element.name !== name
    );
  }

  addNewTodo() {
    const res: TodoTask = {
      name: this.name,
      description: this.description,
      status: false,
    }
    this.todos.push(res);
    this.name = '';
    this.description = '';
  }
}
