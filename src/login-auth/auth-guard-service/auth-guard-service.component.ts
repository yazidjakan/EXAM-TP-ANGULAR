import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-auth-guard-service',
  templateUrl: './auth-guard-service.component.html',
  styleUrls: ['./auth-guard-service.component.css']
})
export class AuthGuardServiceComponent {
  username: string = '';
  password: string = '';
  incorrect: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit() {
    this.auth.login(this.username, this.password).subscribe((isLoggedIn: boolean) => {
      if (isLoggedIn) {
        this.router.navigate(['list']);
      }
      else {
        this.incorrect = true;
      }
    });
  }
}

