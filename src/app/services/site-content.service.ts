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
      title: 'Derecho empresarial',
      description:
        'Acompañamiento legal para proteger y fortalecer decisiones corporativas.',
    },
    {
      title: 'Derecho civil',
      description: 'Representación y asesoría en conflictos patrimoniales y contractuales.',
    },
    {
      title: 'Derecho laboral',
      description: 'Gestión preventiva y resolución de asuntos laborales con enfoque estratégico.',
    },
    {
      title: 'Consultoría legal',
      description: 'Diagnósticos jurídicos para reducir riesgos y asegurar cumplimiento normativo.',
    },
  ];

  readonly experienceStats: ExperienceStat[] = [
    { value: '1+', label: 'Año de experiencia' },
    { value: '20+', label: 'Casos atendidos' },
    { value: '95%', label: 'Clientes recurrentes' },
  ];

  readonly testimonials: Testimonial[] = [
    {
      name: 'María Fernanda Rojas',
      role: 'Directora financiera',
      quote:
        'La asesoría de Daniel Garcés fue clave para resolver un proceso contractual complejo con resultados favorables.',
    },
    {
      name: 'Andrés Londoño',
      role: 'Gerente general',
      quote:
        'Recibimos acompañamiento claro, rápido y estratégico para fortalecer nuestra estructura legal empresarial.',
    },
    {
      name: 'Carolina Vélez',
      role: 'Emprendedora',
      quote:
        'Excelente consultoría jurídica: cercana, profesional y enfocada en soluciones sostenibles.',
    },
  ];
}
