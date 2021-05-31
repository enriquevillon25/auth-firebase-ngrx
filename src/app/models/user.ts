export class User{
  constructor(
    public uid: string,
    public email: string,){
  }
  static staticFirebase({email,uid}){
    return new User(uid,email)
  }
}
