import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { P01DebounceComponent } from './p01-debounce/p01-debounce.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { P02CombiningObservablesComponent } from './p02-combining-observables/p02-combining-observables.component';
import { P03SharingObservablesComponent } from './p03-sharing-observables/p03-sharing-observables.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '01-debounce',
        component: P01DebounceComponent,
      },
      {
        path: '02-combining-observables',
        component: P02CombiningObservablesComponent,
      },
      {
        path: '03-sharing-observables',
        component: P03SharingObservablesComponent,
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
    P02CombiningObservablesComponent,
    P03SharingObservablesComponent,
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
