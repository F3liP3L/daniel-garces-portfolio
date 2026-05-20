import { Component, inject } from '@angular/core';

import { SiteContentService } from '../../services/site-content.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  private readonly siteContent = inject(SiteContentService);

  readonly stats = this.siteContent.experienceStats;
}
