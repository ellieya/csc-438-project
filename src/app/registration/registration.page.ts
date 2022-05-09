import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {}

  signUp(email, password) {
    this.authService.Register(email.value, password.value)
    .then((res) => {
      this.authService.EmailVerification();
      this.router.navigate(['verify-email']);
    }).catch((error) => {
      window.alert(error.message);
    })
  }

}
