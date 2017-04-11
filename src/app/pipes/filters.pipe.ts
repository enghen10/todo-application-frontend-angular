import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], field : string, value : string): any[] {
    if (!items) {
      return [];
    }

    if(!value) {
      return items;
    }

    return items.filter(item => item[field].indexOf(value) > -1);
  }
}

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field : string, value : any): any[] {
    if (!items) {
      return [];
    }

    return items.filter(item => item[field] === value);
  }
}
