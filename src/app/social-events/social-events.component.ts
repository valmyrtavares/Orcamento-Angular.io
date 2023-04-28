import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EventType } from '../model';

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
  eventType: EventType[] = [];
  constructor(private user: ApiService) {}

  ngOnInit() {
    this.user.getSocialEvents('eventType').subscribe((res: any) => {
      this.eventType = res;
    });
  }
}
