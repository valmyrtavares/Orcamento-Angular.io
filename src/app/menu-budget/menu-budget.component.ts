import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { FixedBudget, CheckBoxList } from '../model';

interface checkBox {
  text: string;
  value: number;
  check: boolean;
  valueChange: number;
  title: string;
}
interface textBox {
  title: string;
  text: string;
  entregaPrazo: string;
  valorInicial: number;
}

@Component({
  selector: 'app-menu-budget',
  templateUrl: './menu-budget.component.html',
  styleUrls: ['./menu-budget.component.scss'],
})
export class MenuBudgetComponent {
  TotalValue: number = 0;
  @Input() checkBoxList: CheckBoxList[] = [];
  @Input() fixedBudget: FixedBudget = {
    title: '',
    text: '',
    entregaPrazo: '',
    valorInicial: 0,
  };

  constructor(private user: ApiService) {}

  ngOnInit() {
    this.user.getDataCheck().subscribe((res: any) => {
      this.checkBoxList = res;
    });
  }

  parentFunction(tatalValue: number) {
    this.TotalValue = tatalValue;
  }
}
