import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { About } from '../../components/about/about';
import { Contact } from '../../components/contact/contact';
import { Experience } from '../../components/experience/experience';
import { Footer } from '../../components/footer/footer';
import { Hero } from '../../components/hero/hero';
import { Navbar } from '../../components/navbar/navbar';
import { PracticeAreas } from '../../components/practice-areas/practice-areas';
import { Testimonials } from '../../components/testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About, PracticeAreas, Experience, Testimonials, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, AfterViewInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Daniel Garcés | Consultoría Jurídica Integral');
    this.meta.updateTag({
      name: 'description',
      content:
        'Firma legal de Daniel Garcés: asesoría estratégica en derecho civil y laboral.',
    });
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => observer.observe(element));
  }
}
