import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Goods } from '@shared/models/goods';
import { GoodsService } from '@shared/services/goods.service';

@Injectable({
  providedIn: 'root'
})
export class GoodsResolver {
  constructor(private _goodsService: GoodsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Goods | undefined> {
    return this._goodsService.getGoodById(route.paramMap.get('id'));
  }
}
