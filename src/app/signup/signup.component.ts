import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  profileForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  showInfosAndGoHome(){
    alert("Thank you for your subscription.\nMake sure to remember your email and password : \n"+ this.profileForm.value.email + "\n" + this.profileForm.value.password);
    this.router.navigate([""]);
  }
  constructor(
    public router : Router
  ){

  }
public GoToSingnIn(){
this.router.navigate(["signin"]);
}

}
