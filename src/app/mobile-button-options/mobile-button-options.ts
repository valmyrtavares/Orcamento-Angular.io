import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EventType } from '../model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-mobile-button-options',
  templateUrl: './mobile-button-options.html',
  styleUrls: ['./mobile-button-options.scss'],
})
export class MobileButtonOptions {
  showLoginPopup: boolean = false;
  openMenu: boolean = false;
  getEventType: EventType[] = [];
  constructor(private user: ApiService, private http: HttpClient) {}

  ngOnInit() {
    // this.user.getSocialEvents('eventType').subscribe((res: any) => {
    //   const { showCase, fixedBudget, checkBoxList } = res;
    //   this.getEventType = res;
    // });
    this.getMenu();
  }
  displayLoginPopup() {
    this.showLoginPopup = !this.showLoginPopup;
  }

  eventType: EventType = {
    type: 'Parto',
    evento: '/parto',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0f_P7lZKguve-9VRWEvkeWCK5P0C21IjYJxcmrPhRgLe7i6TE62O-d0ZRAS7EODKw2M&usqp=CAU',
    route: '../showcase',
  };
  getMenu() {
    this.http
      .get(
        'https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/eventType.json'
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
      )
      .subscribe((res) => {
        this.getEventType = res;
      });
  }
}
