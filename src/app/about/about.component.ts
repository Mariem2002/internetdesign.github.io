import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(
    public router : Router
  ){

  }
public GoToSingnIn(){
this.router.navigate(["signin"]);
}

  public GoToHome(){
    this.router.navigate([""]);
    }
}
