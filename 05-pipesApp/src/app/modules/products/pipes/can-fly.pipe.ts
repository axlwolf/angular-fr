import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(canFly:boolean = false): string {
    // console.log({canFly});
    return canFly 
    ? 'Can Fly'
    : 'Cannot Fly'  }
}
