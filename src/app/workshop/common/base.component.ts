import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({ template: '' })
export abstract class BaseComponent implements OnDestroy {
  protected readonly subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
