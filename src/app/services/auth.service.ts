import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import { User} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  constructor(public fireAuth: AngularFireAuth, private fireStore: AngularFirestore) { }

  createUser(email, password){
    // this.fireStore.doc(`${f}`)
    return this.fireAuth.createUserWithEmailAndPassword(email,password).then((response:any)=>{
      const newUser = new User(response.user.uid ,response.user.email);
      console.log(response);
      console.log(this.user);
      return this.fireStore.doc(`${response.user.uid}/users`).set({...newUser});
    });

  }
}
