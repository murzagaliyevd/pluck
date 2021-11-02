import { NgModule } from '@angular/core';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { ShowcaseRoutingModule } from './showcase-routing.module';
import { SharedModule } from '@shared/shared.module';
import { GoodsListComponent } from './components/goods-list/goods-list.component';



@NgModule({
  declarations: [
    ShowcaseComponent,
    GoodsListComponent,
  ],
  imports: [
    SharedModule,
    ShowcaseRoutingModule
  ],
})
export class ShowcaseModule { }
