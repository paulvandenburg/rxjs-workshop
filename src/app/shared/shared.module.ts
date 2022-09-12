import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeDisplayComponent } from './code-display/code-display.component';
import { JoinPipe } from './join.pipe';

const components = [
  CodeDisplayComponent,
  JoinPipe,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
  ],
  exports: components,
})
export class SharedModule { }
