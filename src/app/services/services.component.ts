import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  imports: [FooterComponent, HeaderComponent]
})
export class ServicesComponent {
  constructor(public router: Router) {

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
  public GoToContact() {
    this.router.navigate(["contact"]);
  }
}
