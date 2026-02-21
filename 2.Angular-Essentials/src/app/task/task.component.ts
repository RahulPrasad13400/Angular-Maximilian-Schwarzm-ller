import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // ngOnInit(): void {
  //   console.log(this.userSelected);
  // }
  // userSelected = input.required<string>()
  
  @Input() userSelected? : string;
}
