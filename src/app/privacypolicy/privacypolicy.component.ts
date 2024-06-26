import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-privacypolicy',
  standalone: true,
  templateUrl: './privacypolicy.component.html',
  styleUrl: './privacypolicy.component.css',
  imports: [FooterComponent, HeaderComponent]
})
export class PrivacypolicyComponent {
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
