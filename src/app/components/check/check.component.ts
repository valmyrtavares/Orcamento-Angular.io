import { Component, Input, Output, EventEmitter } from '@angular/core';

interface checkBox {
  text: string;
  value: number;
  title: string;
}

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent {
  //@Input() title: string = '';
  addValue: boolean = false;
  // @Input() value: number = 0;
  // @Input() text: string = '';
  @Input() data: checkBox[] = [];
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  addingValue() {
    this.addValue = !this.addValue;
    this.parentFunction.emit(this.addValue);
  }
}
