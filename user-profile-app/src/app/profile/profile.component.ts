import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: any;

  constructor(private router: Router) {}

  ngOnInit() {
    const userData = localStorage.getItem('loggedInUser');
    if (!userData) {
      this.router.navigate(['/login']);
    } else {
      this.user = JSON.parse(userData);
    }
  }

  logout() {
    localStorage.removeItem('loggedInUser');
    this.router.navigate(['/login']);
  }
}
