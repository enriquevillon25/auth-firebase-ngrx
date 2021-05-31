import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;

  constructor(private _authService:AuthService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      cel: new FormControl('', Validators.required),
    });


  }

  sendRegister(){
    const {name, lastName, cel} = this.registerForm.controls;
    console.log(name.value);
    this._authService.createUser(name.value,lastName.value);
  }

}
