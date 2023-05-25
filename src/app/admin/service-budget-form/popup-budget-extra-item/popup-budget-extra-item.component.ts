import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-budget-extra-item',
  templateUrl: './popup-budget-extra-item.component.html',
  styleUrls: ['./popup-budget-extra-item.component.scss'],
})
export class PopupBudgetExtraItemComponent {
  constructor(private http: HttpClient, private router: Router) {}
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter();
  @Input() categoryExtraService: string;
  standardValurCheck: boolean = false;

  onSubmit(form: NgForm) {
    console.log(form.value);
    const portifolio = form.value;
    this.http
    .post(
      'https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/extraItemBudget.json',
      portifolio
    )
    .subscribe((res) => {
      console.log(res);
    });
  }
  editService() {
    this.router.navigate([`/editservice/${this.categoryExtraService}`]);
  }

  closeItemPopup() {
    this.closePopup.emit(false);
  }
}
