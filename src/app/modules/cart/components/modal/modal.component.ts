import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {

  constructor(private _er: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
  }

  close() {
    this._er.nativeElement.remove();
  }
}
