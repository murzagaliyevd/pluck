import {  Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Banner } from '@shared/models/banner';
import { animate, style, transition, trigger } from '@angular/animations';
import { Observable, Subscription, timer } from 'rxjs';
import { ContentLoadService } from '@shared/services/content-load.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ],
})
export class BannersComponent implements OnInit, OnDestroy {
  timer$!: Subscription;
  index = 0;
  timerInterval = 10 * 1000;
  @Input() banners!: Banner[];
  isContentLoaded$!: Observable<boolean>;
  constructor(private _contentLoadService: ContentLoadService) {
  }

  prev() {
    this.index = this.index === 0 ? this.banners?.length - 1 : --this.index;
  }

  next() {
    this.index = this.index < (this.banners?.length - 1 ) ? ++this.index : 0;
  }

  ngOnInit(): void {
    this.isContentLoaded$ = this._contentLoadService.isLoaded;
    this.timer$ = timer(this.timerInterval, this.timerInterval)
      .subscribe( () => {
        this.next();
      })
  }

  ngOnDestroy(): void {
    if (this.timer$) {
      this.timer$.unsubscribe();
    }
  }
}
