import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './workshop/base-layout/base-layout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'workshop',
        component: BaseLayoutComponent,
        children: [
          {
            path: 'part-1',
            loadChildren: () => import('./workshop/part1/part1.module').then((m) => m.Part1Module),
          },
          {
            path: 'part-2',
            loadChildren: () => import('./workshop/part2/part2.module').then((m) => m.Part2Module),
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'part-1',
          },
        ],
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'workshop',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
