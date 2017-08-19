import {Component} from '@angular/core';
import {AuthenticationService} from './vv-login/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthenticationService) {
  }

  userLoggedIn() {
    return this.authService.userLoggedIn();
  }

  logout() {
    this.authService.doLogout();
  }
}
