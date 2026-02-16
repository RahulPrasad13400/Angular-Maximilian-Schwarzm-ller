import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) userData!: { name: string; avatar: string };
  // USING SIGNAL INPUT
  // userData = input<{name : string, avatar : string}>();

  get imagePath() {
    return `assets/users/${this.userData.avatar}`;
  }
  // COMPUTED WAY OF GETTING THE IMAGE PATH
  // imagePath = computed(() => `assets/users/${this.userData.avatar}`)

  onSelectUser() {}
}
