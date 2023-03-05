import { Component } from '@angular/core';
import { ApiService } from '../api.service';

interface checkBox {
  text: string;
  value: number;
  title: string;
}
interface textBox {
  title: string;
  text: string;
}

@Component({
  selector: 'app-menu-budget',
  templateUrl: './menu-budget.component.html',
  styleUrls: ['./menu-budget.component.scss'],
})
export class MenuBudgetComponent {
  valueChild: boolean = false;

  checkBoxList: checkBox[] = [];
  constructor(private user: ApiService) {}

  ngOnInit() {
    this.user.getData().subscribe((res: any) => {
      this.checkBoxList = res;
    });
  }

  textComponent: textBox = {
    title: 'Primeiro Item',
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  };

  parentFunction(value: boolean) {
    this.valueChild = value;
  }
}
