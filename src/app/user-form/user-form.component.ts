import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from '../model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Output() createNewUser: EventEmitter<boolean> = new EventEmitter();

  formUser: User | undefined;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {}

  //createFormGroup() {
  //   if (!this.formUser !== undefined) {
  //     this.formUser = this.formBuilder.group({
  //       name: [null],
  //       email: [null],
  //       phone: [null],
  //       Date: [null],
  //     });
  //   }
  // }
  // createUser() {
  //   this.createNewUser.emit(false);
  // }
}
