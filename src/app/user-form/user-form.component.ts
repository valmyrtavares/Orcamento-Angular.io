import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  @Output() createNewUser: EventEmitter<boolean> = new EventEmitter();

  formUser: User = {
    name: '',
    email: '',
    phone: '',
    date: '',
  };
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
  // this.createNewUser.emit(false);
}
