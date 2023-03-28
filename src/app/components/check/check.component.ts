import { Component, Input, Output, EventEmitter } from '@angular/core';

interface checkBox {
  text: string;
  value: number;
  check: boolean;
  valueChange: number;
  title: string;
}
interface pessoa {
  nome: string;
  idade: number;
  profissao: string;
}

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent {
  pessoa: pessoa = {
    nome: 'Valmyr Tavares',
    idade: 10,
    profissao: 'programador',
  };
  total: number = 0;
  addValue: boolean = false;
  @Input() data: checkBox[] = [];
  @Input() initialValue: number = 0;
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  newData: checkBox[] = [];

  addingValue(index: number) {
    if (this.data[index].check === false) {
      this.data[index].check = true;
      this.data[index].valueChange = this.data[index].value;
    } else {
      this.data[index].check = false;
      this.data[index].valueChange = 0;
    }
    this.newData = this.data.filter((item) => item.check === true);
    this.addTotalValue();
  }

  addTotalValue() {
    this.total = this.data.reduce((total, item) => {
      return total + item.valueChange;
    }, this.initialValue);
    this.parentFunction.emit({ total: this.total, newData: this.newData });
  }
}
