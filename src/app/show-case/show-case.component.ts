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
  knownUser: boolean = false;
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
    this.getData(); // Função para pegar os dados da API ao iniciar o componente
    /*Aqui temos um problema que é resolvido com o router.events acima. Toda vez que a rota
    muda ele dispara o getData, porque estamos em uma singlepageAplication e por isso temos 
    essa condição da do event que ao trocar vai trocar também as fotos do evento     
    */
    this.getDataFirebase();
  }

  getData() {
    //Função para pegar os dados da API
    this.id = this.route.snapshot.params['id']; //Como pegar a rota e colocar em uma variável
    this.user.getSocialEvents(this.id).subscribe((res: any) => {
      const { showCase, fixedBudget, checkBoxList } = res;
      this.showCase = showCase;
      this.fixedBudget = fixedBudget;
      this.checkBoxList = checkBoxList;
    });
  }
  getDataFirebase() {
    this.http
      .get(
        'https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/portifolio.json'
      )
      .pipe(
        map((res) => {
          const showcase = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              showcase.push({ ...res[key], id: key });
            }
          }
          return showcase;
        })
      )
      .subscribe((res) => {
        this.showCase = res.filter((item) => item.category === this.id);
      });
  }

  createNewUser(open: boolean) {
    this.knownUser = open;
  }
}
