import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ApiService } from '../api.service';
import { ShowCase, FixedBudget, Evento, CheckBoxList } from '../model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss'],
})
export class ShowCaseComponent implements OnInit {
  changeScreen: boolean = true;
  id: string;
  knownCustomer: boolean = true;
  checkBoxList: CheckBoxList[] = [];
  dataEvent: Evento[] | null = [];
  showCase: ShowCase[] = [];
  fixedBudget: FixedBudget[] = [];
  fixedBudgetObj: FixedBudget;

  constructor(
    private route: ActivatedRoute,
    private user: ApiService,
    private router: Router,
    private http: HttpClient
  ) {
    this.id = this.route.snapshot.params['id']; //Como pegar a rota e colocar em uma variável
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        //Quando a rota é trocada ele dipara o evento
        //  this.getData();
      }
    });
  }

  ngOnInit() {
    this.checkCustomer();

    this.user.getData('portifolio').subscribe((res: any) => {
      this.showCase = res.filter((item) => item.category === this.id);
    });
    this.user.getData('fixedBudget').subscribe((res) => {
      this.fixedBudget = res.filter((item) => item.category === this.id);
      this.fixedBudgetObj = {
        InitialPrice: this.fixedBudget[0].InitialPrice,
        budgetTitle: this.fixedBudget[0].budgetTitle,
        category: this.fixedBudget[0].category,
        deadline: this.fixedBudget[0].deadline,
        serviceDescription: this.fixedBudget[0].serviceDescription,
      };
    });
  }
  checkCustomer() {
    if (localStorage.getItem('customer') != null) {
      this.knownCustomer = false;
    }
  }

  createNewUser(open: boolean) {
    this.knownCustomer = open;
  }
}
