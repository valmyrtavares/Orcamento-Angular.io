import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-service-budget-form',
  templateUrl: './service-budget-form.component.html',
  styleUrls: ['./service-budget-form.component.scss'],
})
export class ServiceBudgetFormComponent {
  constructor(private http: HttpClient) {}
  @ViewChild('productEdit') form: NgForm;
  itemPopup: boolean = false;
  readonly: boolean = true;
  currentCategory: string = '';
  EditableServiceObj;

  searchData(data: HTMLSelectElement) {
    this.readonly = false;
    this.currentCategory = data.value;
    this.http
      .get(
        `https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/fixedBudget.json`
      )
      .pipe(
        map((res) => {
          const fixedBudgetObj = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              fixedBudgetObj.push({ ...res[key], id: key });
            }
          }
          return fixedBudgetObj;
        })
      )
      .subscribe((res) => {
        let editableServiceObj: any[] = [];
        editableServiceObj = res.filter(
          (item) => item.category === this.currentCategory
        );
        this.form.setValue({
          budgetTitle: editableServiceObj[0].budgetTitle,
          serviceDescription: editableServiceObj[0].serviceDescription,
          InitialPrice: editableServiceObj[0].InitialPrice,
          category: editableServiceObj[0].category,
          deadline: editableServiceObj[0].deadline,
          id: editableServiceObj[0].id,
        });
      });
  }

  onEdit(data: NgForm) {
    this.http
      .put(
        `https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/fixedBudget/${data.value.id}.json`,
        data.value
      )
      .subscribe((res) => {
        this.searchData(data.value.category);
      });
  }

  // onSubmit(form: NgForm) {
  //   const fixedBudget = form.value;
  //   this.http
  //     .post(
  //       'https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/fixedBudget.json',
  //       fixedBudget
  //     )
  //     .subscribe((res) => {

  //     });
  // }
  toggleItemPopup() {
    this.itemPopup = !this.itemPopup;
  }
}
