import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  cancelModal = output();

  onCancelModal() {
    this.cancelModal.emit();
  }

  // NgModel is used to bind the input value to the component property
  // Needs to import FormsModule
  enteredTitle: string = '';
  enteredSummary : string = '';
  enteredDate : string = ''
}
