import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Banner } from '@shared/models/banner';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  banners!: Banner[];
  constructor() { }

  ngOnInit(): void {
    if (environment.appConfig?.banners) {
      this.banners = environment.appConfig?.banners;
    }
  }

}
