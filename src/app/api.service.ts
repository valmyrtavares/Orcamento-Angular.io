import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

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
  getData(data: any) {
    return this.http
      .get(
        `https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/${data}.json`
      )
      .pipe(
        map((res) => {
          const eventType = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              eventType.push({ ...res[key], id: key });
            }
          }
          console.log(eventType);
          return eventType;
        })
      );
  }
}
