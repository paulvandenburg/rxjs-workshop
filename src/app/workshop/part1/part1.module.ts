import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P01tapComponent } from './p01tap/p01tap.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '01-tap',
        component: P01tapComponent,
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
    P01tapComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class Part1Module {
}
