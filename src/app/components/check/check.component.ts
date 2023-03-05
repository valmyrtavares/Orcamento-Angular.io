import { Component, Input, Output, EventEmitter } from '@angular/core';

interface checkBox {
  text: string;
  value: number;
  check: boolean;
  valueChange: number;
  title: string;
}

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent {
  total: number = 0;
  addValue: boolean = false;
  @Input() data: checkBox[] = [];
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();

  addingValue(index: number) {
    if (this.data[index].check === false) {
      this.data[index].check = true;
      this.data[index].valueChange = this.data[index].value;
    } else {
      this.data[index].check = false;
      this.data[index].valueChange = 0;
    }
    this.addTotalValue();
  }

  addTotalValue() {
    this.total = this.data.reduce((total, item) => {
      return total + item.valueChange;
    }, 0);
    this.parentFunction.emit(this.total);
  }
}
