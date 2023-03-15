import { Component } from '@angular/core';

@Component({
  selector: 'app-social-events',
  templateUrl: './social-events.component.html',
  styleUrls: ['./social-events.component.scss'],
})
export class SocialEventsComponent {
  nameEvent: string = 'Casamento';
  eventType: any[] = [
    { type: 'Casamento', background: 'http://lskdjfl', route: '../submenu' },
    { type: 'Aniversario', background: 'http://lskdjfl', route: '../showcase' },
    { type: 'Debutante', background: 'http://lskdjfl', route: './sldkf/sdf' },
  ];
}