import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimDescption'
})
export class TrimDescptionPipe implements PipeTransform {
  transform(description: string, maxLength: number = 2): string {
    if (!description) {
      return '';
    }

    return description.length > maxLength ? `${description.slice(0, maxLength)}...` : description;
}
}
