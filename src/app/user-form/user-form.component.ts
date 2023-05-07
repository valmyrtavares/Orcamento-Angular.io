import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  customerIdBiggestNumber: number = 0;
  customerList: User[] = [];
  @Output() createNewUser: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient, private user: ApiService) {}

  ngOnInit(): void {
    this.getAllRegisteedCustomers();
  }

  formUser: User = {
    id: this.customerIdBiggestNumber,
    name: '',
    email: '',
    phone: '',
    date: '',
  };
  onSubmit(form: NgForm) {
    //const lux = form.value;
    this.http
      .post('http://localhost:3000/customer', form.value)
      .subscribe((res) => {
        console.log(res);
      });
    this.createNewUser.emit(false);
  }

  // fetchProducts() {
  //   this.http
  //     .get(
  //       'https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/lux.json'
  //     )
  //     .pipe(
  //       map((res) => {
  //         const customer = [];
  //         for (const key in res) {
  //           if (res.hasOwnProperty(key)) {
  //             customer.push({ ...res[key], id: key });
  //           }
  //         }
  //         return customer;
  //       })
  //     )
  //     .subscribe((res) => {
  //       console.log(res);
  //     });
  // }

  getAllRegisteedCustomers() {
    //Função para pegar os dados da API
    this.user.getSocialEvents('customer').subscribe((res: any) => {
      this.customerIdBiggestNumber =
        Number(this.getBiggestIdNumberRegistered(res)) + 1;
    });
  }

  getBiggestIdNumberRegistered(customerList: User[]): number {
    return customerList
      .map((item) => item.id)
      .reduce((acc, item) => (acc > item ? acc : item));
  }
}
