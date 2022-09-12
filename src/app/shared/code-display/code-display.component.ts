import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';

import 'prismjs/components/prism-typescript';
// Adds support for html.
import 'prismjs/components/prism-markup';

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
})
export class CodeDisplayComponent implements AfterViewInit {

  @ViewChild('codeElement') codeElement!: ElementRef;
  // When adding more languages also import more type definitions above.
  @Input() language?: 'typescript' | 'markup' | 'html' = 'typescript';
  @Input() code?: string;

  ngAfterViewInit() {
    Prism.highlightElement(this.codeElement.nativeElement);
  }
}
