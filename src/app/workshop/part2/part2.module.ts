import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P01DebounceComponent } from './p01-debounce/p01-debounce.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '01-debounce',
        component: P01DebounceComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '01-debounce',
      },
    ],
  },
];

@NgModule({
  declarations: [
    P01DebounceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class Part2Module {
}
