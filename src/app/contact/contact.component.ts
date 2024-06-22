import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  imports: [ReactiveFormsModule, FooterComponent, HeaderComponent]
})
export class ContactComponent {
  profileForm = new FormGroup({
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  showInfosAndGoHome() {
    alert("Thanks for your feedback/question ! You will receive a reply soon.");
    this.router.navigate([""]);
  }
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
}
