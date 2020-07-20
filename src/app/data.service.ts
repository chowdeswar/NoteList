import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [
    { code: 'EMP101', name: 'Tom', gender: 'Male', salary: 5500, date: '06/25/1988' },
    { code: 'EMP102', name: 'Alex', gender: 'Male', salary: 5700, date: '06/09/1982' },
    { code: 'EMP103', name: 'Mike', gender: 'Male', salary: 5900, date: '08/12/1979' },
    { code: 'EMP104', name: 'Mary', gender: 'Female', salary: 6500, date: '10/14/1980' },
    { code: 'EMP105', name: 'Nancy', gender: 'Female', salary: 6700, date: '12/15/1982' }

  ]
  constructor() { }

  getData() {
    return this.data;
  }
}
