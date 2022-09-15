import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P01TapComponent } from './p01-tap/p01-tap.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { P02MapComponent } from './p02-map/p02-map.component';
import { P03NestedMapComponent } from './p03-nested-map/p03-nested-map.component';
import { P04ErrorsComponent } from './p04-errors/p04-errors.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '01-tap',
        component: P01TapComponent,
      },
      {
        path: '02-map',
        component: P02MapComponent,
      },
      {
        path: '03-nested-map',
        component: P03NestedMapComponent,
      },
      {
        path: '04-errors',
        component: P04ErrorsComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '01-tap',
      },
    ],
  },
];

@NgModule({
  declarations: [
    P01TapComponent,
    P02MapComponent,
    P03NestedMapComponent,
    P04ErrorsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class Part1Module {
}
