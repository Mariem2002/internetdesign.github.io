import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [FooterComponent, HeaderComponent]
})
export class HomeComponent {
  constructor(
    public router: Router
  ) {

  }
  public GoToSingnIn() {
    this.router.navigate(["signin"]);
  }
  public GoToSingnUp() {
    this.router.navigate(["signup"]);
  }
  public GoToAbout() {
    this.router.navigate(["about"]);
  }
  public GoToServices() {
    this.router.navigate(["services"]);
  }
  public GoToContact() {
    this.router.navigate(["contact"]);
  }
}
