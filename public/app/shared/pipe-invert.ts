import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invert'
})

export class PipeInvert implements PipeTransform {
  transform(value: any): any {
    if( value instanceof Array ) {
      return value.slice().reverse();
    } else {
      return value.split("").reverse().join("");
    }
  }
}
