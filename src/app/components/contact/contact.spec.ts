import { TestBed } from '@angular/core/testing';

import { Contact } from './contact';

describe('Contact', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();
  });

  it('should invalidate the form when empty', () => {
    const fixture = TestBed.createComponent(Contact);
    const component = fixture.componentInstance;

    component.submit();

    expect(component.contactForm.invalid).toBe(true);
    expect(component.requestSent).toBe(false);
  });

  it('should submit when form is valid', () => {
    const fixture = TestBed.createComponent(Contact);
    const component = fixture.componentInstance;

    component.contactForm.setValue({
      name: 'Daniel Garcés',
      email: 'contacto@ejemplo.com',
      phone: '+57 300 000 0000',
      message: 'Necesito asesoría legal para un tema empresarial.',
    });

    component.submit();

    expect(component.requestSent).toBe(true);
  });
});
