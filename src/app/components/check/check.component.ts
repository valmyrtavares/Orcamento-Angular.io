import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { CheckBoxList } from 'src/app/model';

// interface checkBox {
//   text: string;
//   value: number;
//   check: boolean;
//   valueChange: number;
//   title: string;
// }
// interface pessoa {
//   nome: string;
//   idade: number;
//   profissao: string;
// }

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent implements OnInit {
  id: string;
  // pessoa: pessoa = {
  //   nome: 'Valmyr Tavares',
  //   idade: 10,
  //   profissao: 'programador',
  // };
  constructor(private http: HttpClient, private route: ActivatedRoute) {
    console.log('ESTAMOS DENTRO');
    this.id = this.route.snapshot.params['id']; //Como pegar a rota e colocar em uma variável
    this.getDataExtraItens();
  }
  ngOnInit() {
    console.log('ESTAMOS DENTRO DO ON INIT');
  }

  total: number = 0;
  extraItensBudget: CheckBoxList[] = [];
  addValue: boolean = false;
  // @Input() data: CheckBoxList[] = [];
  @Input() initialValue: number = 0;
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  newData: CheckBoxList[] = [];

  getDataExtraItens() {
    this.http
      .get(
        'https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/extraItemBudget.json'
      )
      .pipe(
        map((res) => {
          const extraItensBudget = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              extraItensBudget.push({ ...res[key], id: key });
            }
          }
          return extraItensBudget;
        })
      )
      .subscribe((res) => {
        this.extraItensBudget = res.filter((item) => item.category === this.id);
        console.log(this.extraItensBudget);
      });
  }

  addingValue(index: number) {
    if (this.extraItensBudget[index].check === false) {
      this.extraItensBudget[index].check = true;
      this.extraItensBudget[index].valueChange =
        this.extraItensBudget[index].serviceValue;
    } else {
      this.extraItensBudget[index].check = false;
      this.extraItensBudget[index].valueChange = 0;
    }
    this.newData = this.extraItensBudget.filter((item) => item.check === true);
    this.addTotalValue();
  }

  addTotalValue() {
    this.total = this.extraItensBudget.reduce((total, item) => {
      return total + item.valueChange;
    }, this.initialValue);
    this.parentFunction.emit({ total: this.total, newData: this.newData });
  }
}
