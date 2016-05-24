import { Component}  from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AuthModel } from './auth.model';

@Component({
  moduleId: module.id,
  selector: 'auth',
  templateUrl: 'auth.template.html'
})
export class Auth {
  
  $authRef: any;
  model: any;
  
  constructor() { 
    // this.$authRef = firebaseService.getRef();
    this.model = {};
  }
  
  signIn(email: string, password: string) {
    // Do it
  }
  
  signUp() {
    // Todo confirm check
    
    // this.$authRef.createUser(new AuthModel(this.model.email, this.model.password), (error, userData) => {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     console.log('Successfully created User, ', userData);
    //   }
    // });
  }
}