import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMorePipe'
})
export class ShowMorePipePipe implements PipeTransform {

  transform(value: string, ...args: boolean[]): string {
    if(args[0]){
        return  value.slice(0,50)+"...."
    }
    return value;
  }

}
