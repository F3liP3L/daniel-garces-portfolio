import { Component, inject } from '@angular/core';

import { SiteContentService } from '../../services/site-content.service';

@Component({
  selector: 'app-practice-areas',
  imports: [],
  templateUrl: './practice-areas.html',
  styleUrl: './practice-areas.scss',
})
export class PracticeAreas {
  private readonly siteContent = inject(SiteContentService);

  readonly practiceAreas = this.siteContent.practiceAreas;
}
