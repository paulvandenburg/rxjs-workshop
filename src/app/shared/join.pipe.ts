import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'join' })
export class JoinPipe implements PipeTransform {
  transform(value: any[] | null): string {
    return value?.join('\n') || '';
  }

}
