import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  profileForm = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  showInfosAndGoHome(){
    alert("Welcome back !");
    this.router.navigate([""]);
  }
  constructor(
    public router : Router
  ){

  }
public GoToSingnUp(){
this.router.navigate(["signup"]);
}

}