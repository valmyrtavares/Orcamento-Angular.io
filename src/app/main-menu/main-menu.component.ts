import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EventType } from '../model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  openMenu: boolean = false;
  getEventType: EventType[] = [];
  constructor(private user: ApiService) {}

  ngOnInit() {
    this.user.getDataWoman('eventType').subscribe((res: any) => {
      const { showCase, fixedBudget, checkBoxList } = res;
      this.getEventType = res;
    });
    // this.getEventType = this.dataService.eventType;
  }
}
