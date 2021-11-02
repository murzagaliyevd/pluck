import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentLoadService {
  private _isLoaded = new BehaviorSubject<boolean>(false);

  setLoaded(isLoaded: boolean) {
    this._isLoaded.next(isLoaded);
  }

  get isLoaded(): Observable<boolean> {
    return this._isLoaded;
  }
}
