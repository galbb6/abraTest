import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getData(): Promise<any> {
    return fetch('https://example.com/api/data')
      .then(response => response.json());
  }
  postData(data: any): Promise<any> {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    return fetch('https://example.com/api/data', requestOptions)
      .then(response => response.json());
  }


}