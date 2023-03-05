import { Component } from '@angular/core';

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

  checkBoxList: checkBox[] = [
    {
      text: ', remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      value: 100,
      title: 'Primeiro Titulo',
    },
    {
      text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      value: 100,
      title: 'Segundo Titulo',
    },
    {
      text: 'g, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      value: 100,
      title: 'Terceiro Titulo',
    },
  ];

  textComponent: textBox = {
    title: 'Primeiro Item',
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
  };

  parentFunction(value: boolean) {
    this.valueChild = value;
  }
}
