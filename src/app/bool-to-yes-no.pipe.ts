import { Pipe, PipeTransform } from '@angular/core';
import { ɵstringify as stringify } from '@angular/core';

@Pipe({
  name: 'boolToYesNo',
})
export class BoolToYesNoPipe implements PipeTransform {
  transform(value: boolean, localisedYesNo: string[] = ['Yes', 'No']): string {
    if (localisedYesNo.length < 2) {
      throw Error(
        `InvalidPipeArgument: '${localisedYesNo}' for pipe '${stringify(
          BoolToYesNoPipe
        )}'`
      );
    }

    return value ? localisedYesNo[0] : localisedYesNo[1];
  }
}
