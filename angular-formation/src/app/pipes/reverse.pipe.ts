import { Pipe, PipeTransform } from '@angular/core';
import { reverse } from 'dns';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
