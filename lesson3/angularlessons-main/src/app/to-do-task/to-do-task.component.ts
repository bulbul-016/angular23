import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.scss']
})
export class ToDoTaskComponent { // child -> array-deletion 
  // deletion-function -> child
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() status: boolean = false;
  @Input() deletion: Function = () => {};

  changeStatus() {
    this.status = !this.status;
  }
}
