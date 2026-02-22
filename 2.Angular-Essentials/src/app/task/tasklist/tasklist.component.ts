import { Component, input, output } from '@angular/core';
import { Task } from '../../Model/user.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
  task = input.required<Task>()
  completeTask = output<string>()

  onCompleteTask(){
    this.completeTask.emit(this.task().id)
  }
}
