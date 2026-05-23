import { Injectable } from '@angular/core';

import { ExperienceStat } from '../models/experience-stat.model';
import { PracticeArea } from '../models/practice-area.model';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root',
})
export class SiteContentService {
  readonly practiceAreas: PracticeArea[] = [
    {
      title: 'Derecho civil',
      description: 'Representación y asesoría en conflictos patrimoniales y contractuales.',
    },
    {
      title: 'Derecho laboral',
      description: 'Gestión preventiva y resolución de asuntos laborales con enfoque estratégico.',
    },
  ];

  readonly experienceStats: ExperienceStat[] = [
    { value: '1+', label: 'Año de experiencia' },
    { value: '1', label: 'Casos atendidos' },
    { value: '100%', label: 'Clientes recurrentes' },
  ];

  readonly testimonials: Testimonial[] = [
    {
      name: 'Juan Felipe Cardona',
      role: 'Desarrollador de Software',
      quote:
        'Excelente consultoría jurídica: cercana, profesional y enfocada en soluciones sostenibles.',
    },
  ];
}
