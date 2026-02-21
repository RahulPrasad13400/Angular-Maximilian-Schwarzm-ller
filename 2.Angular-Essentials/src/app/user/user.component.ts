import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { User } from '../Model/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // INPUT SIGNAL
  @Input({ required: true }) userData!: User;
  // USING SIGNAL INPUT
  // userData = input<{name : string, avatar : string}>();

  get imagePath() {
    return `assets/users/${this.userData.avatar}`;
  }
  // COMPUTED WAY OF GETTING THE IMAGE PATH
  // imagePath = computed(() => `assets/users/${this.userData.avatar}`)

  // OUTPUT
  @Output() select = new EventEmitter<User>()
  // OUTPUT SIGNAL
  // select = output<User>()

  onSelectUser(user : User) {
    this.select.emit(user)
  }
}
