import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const symbole = (value >= 0) ? '+' : '-';
    return `${symbole} ${Math.abs(value)}`;
  }
}
