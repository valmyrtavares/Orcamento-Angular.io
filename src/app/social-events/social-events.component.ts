import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EventType } from '../model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-social-events',
  templateUrl: './social-events.component.html',
  styleUrls: ['./social-events.component.scss'],
})
/*
This component receive the buttons with first pathways to customer click and go
go to kind of event that he need. He call the getSocialEvents function sending 
a param that choose the eventType array. This param is sending in URL .Each button
has your event param
*/
export class SocialEventsComponent implements OnInit {
  getEventType: EventType[] = [];
  data: string = 'eventType';
  constructor(private user: ApiService, private http: HttpClient) {}

  ngOnInit() {
    // this.user.getSocialEvents('eventType').subscribe((res: any) => {
    //   this.eventType = res;
    // });
    this.user.getData(this.data).subscribe((res: any) => {
      this.getEventType = res;
    });
  }
  //getMenu() {
  // this.http
  //   .get(
  //     'https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/eventType.json'
  //   )
  //   .pipe(
  //     map((res) => {
  //       const eventType = [];
  //       for (const key in res) {
  //         if (res.hasOwnProperty(key)) {
  //           eventType.push({ ...res[key], id: key });
  //         }
  //       }
  //       console.log(eventType);
  //       return eventType;
  //     })
  //   )
  // .subscribe((res) => {
  //   this.getEventType = res;
  // });
  //}
}
