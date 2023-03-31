import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EventType } from '../model';

@Component({
  selector: 'app-social-events',
  templateUrl: './social-events.component.html',
  styleUrls: ['./social-events.component.scss'],
})
export class SocialEventsComponent implements OnInit {
  eventType: EventType[] = [];
  constructor(private user: ApiService) {}

  ngOnInit() {
    this.user.getDataWoman('eventType').subscribe((res: any) => {
      const { showCase, fixedBudget, checkBoxList } = res;
      this.eventType = res;
    });
  }
  nameEvent: string = 'Casamento';
}
