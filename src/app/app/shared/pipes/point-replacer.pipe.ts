import { Pipe } from '@angular/core';

@Pipe({
  name: 'pointReplacer'
})
export class PointReplacerPipe  {

  public transform(value: string): string {
    if (value) {
      return value.toString().replace(',', '.');
    }
    return '';
  }
}