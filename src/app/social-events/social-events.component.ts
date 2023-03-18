import { Component } from '@angular/core';

@Component({
  selector: 'app-social-events',
  templateUrl: './social-events.component.html',
  styleUrls: ['./social-events.component.scss'],
})
export class SocialEventsComponent {
  nameEvent: string = 'Casamento';
  eventType: any[] = [
    {
      type: 'Casamento',
      evento: '/casamento',
      background: 'http://lskdjfl',
      route: '../showcase',
    },
    {
      type: 'Aniversario',
      evento: '/aniversario',
      background: 'http://lskdjfl',
      route: '../showcase',
    },
    {
      type: 'Debutante',
      evento: '/ladies',
      background: 'http://lskdjfl',
      route: './sldkf/sdf',
    },
  ];
}
