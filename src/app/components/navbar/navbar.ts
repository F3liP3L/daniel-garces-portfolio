import { Component } from '@angular/core';

interface NavLink {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  readonly links: NavLink[] = [
    { label: 'Inicio', fragment: 'inicio' },
    { label: 'Sobre Daniel Garcés', fragment: 'sobre' },
    { label: 'Áreas de práctica', fragment: 'areas' },
    { label: 'Experiencia', fragment: 'experiencia' },
    { label: 'Testimonios', fragment: 'testimonios' },
    { label: 'Contacto', fragment: 'contacto' },
  ];

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
