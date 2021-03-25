import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'statesByCountry',
  pure: false
})
export class StatesByCountryPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (filter === null) {
      return
    } else {
      const result = items.filter(item => item.country === filter)
      if (result.length === 0) {
        return [{ key: '-', value: '-' }]
      } else {
        return result
      }
    }
  }
}
