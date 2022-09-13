import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SourceService {

  constructor(private readonly http: HttpClient) {}

  getPortalQuote(): Observable<string> {
    return this.http.get('https://portal.paulvandenburg.nl', { responseType: 'text' });
  }

  getPortalPromise(): Promise<string> {
    return fetch('https://portal.paulvandenburg.nl')
      .then((response) => response.text());
  }

}
