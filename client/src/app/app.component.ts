
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AccountService } from './_services/account.service';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'client';
  private accountservice = inject(AccountService);
  users: any;

  ngOnInit(): void {
this.setCurrentUser();
  }


  setCurrentUser() {
    const userstring = localStorage.getItem('user');
    if (!userstring) return;
    const user = JSON.parse(userstring);
    this.accountservice.currentUser.set(user);

  }
}
