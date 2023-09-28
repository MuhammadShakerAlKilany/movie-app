import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMorePipe'
})
export class ShowMorePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
