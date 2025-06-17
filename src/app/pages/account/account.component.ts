import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent {
  constructor(public UserAuthService: UserAuthService) {}

  get firstLetter() {
    return this.UserAuthService.user?.username.charAt(0);
  }

  onSubmit(formData: NgForm) {
    console.log(formData);
  }
}
