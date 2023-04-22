import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../api.service';
import { ShowCase, FixedBudget, Evento, CheckBoxList } from '../model';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss'],
})
export class ShowCaseComponent implements OnInit {
  changeScreen: boolean = true;
  id: string;
  knownUser: boolean = true;
  checkBoxList: CheckBoxList[] = [];
  dataEvent: Evento[] | null = [];
  showCase: ShowCase[] = [];
  fixedBudget: FixedBudget = {
    title: '',
    text: '',
    entregaPrazo: '',
    valorInicial: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private user: ApiService,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id']; //Como pegar a rota e colocar em uma variável
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //Quando a rota é trocada ele dipara o evento
        this.getData();
      }
    });
  }

  ngOnInit() {
    this.getData(); // Função para pegar os dados da API ao iniciar o componente
  }

  getData() {
    //Função para pegar os dados da API
    this.id = this.route.snapshot.params['id']; //Como pegar a rota e colocar em uma variável
    this.user.getDataWoman(this.id).subscribe((res: any) => {
      const { showCase, fixedBudget, checkBoxList } = res;
      this.showCase = showCase;
      this.fixedBudget = fixedBudget;
      this.checkBoxList = checkBoxList;
    });
  }

  createNewUser(open: boolean) {
    this.knownUser = open;
  }
}
