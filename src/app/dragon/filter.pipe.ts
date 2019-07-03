import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'minimatch';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0 || filterString === '' || !filterString) { 
      return value;
    }
    
    const resultArray = [];
    for (const item of value) {
      if (item[propName].toLowerCase().includes(filterString.toLocaleLowerCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}