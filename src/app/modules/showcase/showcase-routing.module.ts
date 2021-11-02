import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ShowcaseComponent } from './components/showcase/showcase.component';

const routes: Routes = [
  {
    path: '', component: ShowcaseComponent,
    children: []
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ShowcaseRoutingModule { }
