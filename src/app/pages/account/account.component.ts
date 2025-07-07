import { Component, inject } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  public userAuthService = inject(UserAuthService);

  get firstLetter() {
    return this.userAuthService.user?.username.charAt(0);
  }

  onSubmit(formData: NgForm) {
    const { username, password } = formData.form.value;
    this.userAuthService.login(username, password).subscribe({
      next: response => {
        if (!response) return;
        this.userAuthService.isLoggedIn = !!response.id;
        this.userAuthService.user = response;
      },
      error: err => console.log(err)
    });
  }
}
