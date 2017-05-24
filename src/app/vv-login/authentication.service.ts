import { Injectable } from '@angular/core';
import {FirebaseError, User} from 'firebase/app';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  private currentUser: Observable<User>;

  constructor(private router: Router, public af: AngularFireAuth) {
    this.currentUser = af.authState;

    this.af.authState.subscribe((user) => {
      if (user == null) {
        console.log('User not logged in');
        this.currentUser = null;
        this.router.navigate(['/login']);
      } else {
        console.log('User logged in');
        this.currentUser = Observable.of(user);
        this.router.navigate(['/overview']);
      }
    });
  }

  doLogin(email: string, password: string) {
    this.af.auth.signInWithEmailAndPassword(email, password)
      .catch((error: FirebaseError) => {
        console.log(error.message);
      });
  }

  doLogout() {
    console.log('Log out');
    this.af.auth.signOut();
  }
}
