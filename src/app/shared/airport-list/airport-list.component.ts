import { Component, Input } from '@angular/core';
import { Airport } from '../../service/airport';
import { Page } from '../../service/page';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
})
export class AirportListComponent {

  @Input() airportPage: Page<Airport> | null = null;

  get airports(): Airport[] {
    return this.airportPage?.items || [];
  }

}
