import { Component, computed, Input } from '@angular/core';
import { TasklistComponent } from './tasklist/tasklist.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { Task, User } from '../Model/user.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasklistComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // ngOnInit(): void {
  //   console.log(this.userSelected);
  // }
  // userSelected = input.required<string>()
  tasks = DUMMY_TASKS;

  @Input() userSelected?: User | null;

  get selectedUserTask() {
    return this.tasks.filter((task) => task.userId === this.userSelected?.id);
  }

  onTaskComplete(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
