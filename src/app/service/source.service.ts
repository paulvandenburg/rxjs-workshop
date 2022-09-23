import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, exhaustMap, from, map, Observable, of, timer } from 'rxjs';
import { Airport } from './airport';
import { Page } from './page';

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

  cowsay(q: string): Observable<string> {
    return this.http.post('https://cowsay.paulvandenburg.nl', { q }, { responseType: 'text' });
  }

  queryAirports(name: string = '', offset: number = 0): Observable<Page<Airport>> {
    return this.http.get<Airport[]>('https://airports.paulvandenburg.nl', {
      observe: 'response',
      params: {
        q: name,
        offset,
      },
    }).pipe(
      map((response) => {
        return {
          items: response.body || [],
          itemCount: Number.parseInt(response.headers.get('X-Item-Count') || '0') || 0,
          offset: Number.parseInt(response.headers.get('X-Offset') || '0') || 0,
          pageSize: Number.parseInt(response.headers.get('X-Page-Size') || '0') || 0,
        } as Page<Airport>;
      })
    );
  }

  httpFox(statusCode: number): Observable<string> {
    return this.http.get(`https://http.paulvandenburg.nl/${statusCode}`, { responseType: 'blob' }).pipe(
      exhaustMap((blob) => {
        return this.blobToString(blob);
      })
    );
  }

  slow<T>(value: T, delayInMillis: number = 1000): Observable<T> {
    return timer(delayInMillis).pipe(
      concatMap(() => of(value))
    );
  }

  blobToString(blob: Blob): Observable<string> {
    const onLoad = new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result + '');
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(blob);
    });
    return from(onLoad);
  }


}
