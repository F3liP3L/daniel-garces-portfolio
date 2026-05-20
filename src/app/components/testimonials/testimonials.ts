import { Component, inject } from '@angular/core';

import { SiteContentService } from '../../services/site-content.service';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  private readonly siteContent = inject(SiteContentService);

  readonly testimonials = this.siteContent.testimonials;
}
