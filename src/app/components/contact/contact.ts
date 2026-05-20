import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// Permite números internacionales con dígitos, espacios, guiones y prefijo +.
const PHONE_PATTERN = /^[+\d\s-]{7,20}$/;

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly formBuilder = inject(FormBuilder);

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(PHONE_PATTERN)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  requestSent = false;

  submit(): void {
    this.requestSent = false;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.requestSent = true;
    this.contactForm.reset({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }
}
