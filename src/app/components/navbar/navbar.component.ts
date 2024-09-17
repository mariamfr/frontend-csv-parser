//para usar los ng if -- ng form
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  toogleMenu() {
    this.isMenuOpen = !this.isMenuOpen
    console.log(this.isMenuOpen)
  }


  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn()
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }

}
