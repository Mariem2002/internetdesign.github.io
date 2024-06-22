import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    public router: Router
  ) {

  }
  public GoToAbout() {
    this.router.navigate(["about"]);
  }
  public GoToSingnIn() {
    this.router.navigate(["signin"]);
  }
  public GoToHome() {
    this.router.navigate([""]);
  }
  public GoToServices() {
    this.router.navigate(["services"]);
  }
  public GoToContact() {
    this.router.navigate(["contact"]);
  }
}
