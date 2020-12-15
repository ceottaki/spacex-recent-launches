import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayJoin',
})
export class ArrayJoinPipe implements PipeTransform {
  transform(value: unknown[], character: string = ''): string | null {
    if (!Array.isArray(value)) {
      return null;
    }

    return value.join(character);
  }
}
