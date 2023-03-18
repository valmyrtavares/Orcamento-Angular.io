import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { ShowCase, FixedBudget, Evento, CheckBoxList } from '../model';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss'],
})
export class ShowCaseComponent {
  changeScreen: boolean = true;
  id: string;
  checkBoxList: CheckBoxList[] = [];
  dataEvent: Evento[] | null = [];
  showCase: ShowCase[] = [];
  fixedBudget: FixedBudget = {
    title: '',
    text: '',
    entregaPrazo: '',
    valorInicial: 0,
  };
  constructor(private route: ActivatedRoute, private user: ApiService) {
    this.id = this.route.snapshot.params['id']; //Como pegar a rota e colocar em uma variável
  }

  ngOnInit() {
    this.user.getDataWoman(this.id).subscribe((res: any) => {
      const { showCase, fixedBudget, checkBoxList } = res;
      console.log(res);
      this.showCase = showCase;
      this.fixedBudget = fixedBudget;
      this.checkBoxList = checkBoxList;
    });
  }
}
