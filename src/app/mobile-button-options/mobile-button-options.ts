import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EventType } from '../model';

@Component({
  selector: 'app-mobile-button-options',
  templateUrl: './mobile-button-options.html',
  styleUrls: ['./mobile-button-options.scss'],
})
export class MobileButtonOptions {
  openMenu: boolean = false;
  getEventType: EventType[] = [];
  constructor(private user: ApiService) {}

  ngOnInit() {
    this.user.getSocialEvents('eventType').subscribe((res: any) => {
      const { showCase, fixedBudget, checkBoxList } = res;
      this.getEventType = res;
    });
    // this.getEventType = this.dataService.eventType;
  }
}
