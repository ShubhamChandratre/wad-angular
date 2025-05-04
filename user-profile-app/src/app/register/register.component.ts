import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  number:string='';
  errorMessage: string = '';

  constructor(private router: Router) {}

  register() {
    if (!this.name || !this.email || !this.password || !this.number) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ name: this.name, email: this.email, password: this.password ,number: this.number });
    localStorage.setItem('users', JSON.stringify(users));

    this.router.navigate(['/login']);
  }
}
