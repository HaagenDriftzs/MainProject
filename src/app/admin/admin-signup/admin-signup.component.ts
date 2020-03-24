import { Component, OnInit } from '@angular/core';
import {AuthenticationData, AuthenticationSectionService} from '../../authenticationSection/authenticationSection.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent  {

  loginMode = true;
  signUpMode = true;
  loading = false;
  error: string = null;

  constructor(private authenticationSectionService: AuthenticationSectionService, private router: Router) {
  }


  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authenticationObserver: Observable<AuthenticationData>;

    this.loading = true;
    if (this.signUpMode) {
      authenticationObserver = this.authenticationSectionService.signup(email, password);
    } else {
      console.log(this.error);
    }

    authenticationObserver.subscribe(resData => {
      console.log(resData);
      this.loading = false;
      this.router.navigate(['/admin']);
    }, errorMessage => {
      console.log(errorMessage);
      this.error = errorMessage;
      this.loading = false;
    });
    form.reset();
  }
}
