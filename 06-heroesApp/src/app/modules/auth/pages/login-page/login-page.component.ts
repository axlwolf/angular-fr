import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``,
})
export class LoginPageComponent {
  public user?: User;
  private password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService
      .login('axlwolf@gmail.com', '123456789')
      .subscribe((user) => {
        //console.log({ user });
        this.router.navigate(['/']);
        this.user = user;
      });
  }
}
