import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(
    public router : Router
  ){

  }
public GoToSingnIn(){
this.router.navigate(["signin"]);
}
public GoToSingnUp(){
  this.router.navigate(["signup"]);
  }
  public GoToAbout(){
    this.router.navigate(["about"]);
    }
   
}
