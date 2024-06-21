import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  imports: [],
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.css'
})
export class PrivacypolicyComponent {
  constructor(
    public router : Router
  ){

  }
  public GoToAbout(){
    this.router.navigate(["about"]);
    }
    public GoToSingnIn(){
      this.router.navigate(["signin"]);
      }
}
