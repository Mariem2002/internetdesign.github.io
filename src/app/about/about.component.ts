import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  imports: [FooterComponent, HeaderComponent]
})
export class AboutComponent {
  constructor(
    public router: Router
  ) {

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
