import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from './authentication.service';

@Component({
  selector: 'app-vv-login',
  templateUrl: './vv-login.component.html',
  styleUrls: ['./vv-login.component.css']
})
export class VvLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    this.authService.doLogin(this.loginForm.value.email, this.loginForm.value.password);
  }
}
