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
  addValue: boolean = false;
  @Input() data: checkBox[] = [];
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  addingValue() {
    this.addValue = !this.addValue;
    this.parentFunction.emit(this.addValue);
  }
}
