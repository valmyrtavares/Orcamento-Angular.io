import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDataCheck() {
    return this.http.get('http://localhost:3000/checkBoxList');
  }

  getSocialEvents(id: string) {
    return this.http.get(`http://localhost:3000/${id}`);
  }

  // getDataLadies() {
  //   return this.http.get('http://localhost:3000/ladies');
  // }
}
