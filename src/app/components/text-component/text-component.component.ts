import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.scss'],
})
export class TextComponentComponent {
  @Input() title: string = '';
  @Input() text: string = '';
}
