import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Goods } from '@shared/models/goods';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  constructor(private _http: HttpClient) {
  }

  getGoods(): Observable<Goods[]> {
    return this._http.get<Goods[]>('/assets/configs/goods-mock/index.json');
  }

  getGoodById(id: string | null): Observable<Goods | undefined> {
    return this._http.get<Goods[]>('/assets/configs/goods-mock/index.json')
      .pipe(
        map( (res: Goods[]) => {
          return res.find( item => item.id === id);
        })
      );
  }
}
