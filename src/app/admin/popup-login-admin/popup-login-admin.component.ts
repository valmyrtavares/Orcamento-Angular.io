import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-login-admin',
  templateUrl: './popup-login-admin.component.html',
  styleUrls: ['./popup-login-admin.component.scss'],
})
export class PopupLoginAdminComponent implements OnInit {
  @Output() closeLoginPopup: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit(): void {}
  nopass: boolean = false;

  CloseLoginPopup() {
    this.closeLoginPopup.emit(false);
  }
  onSubmit(form: NgForm) {
    if (form.value.name === 'juliana' && form.value.password === '1234') {
      this.router.navigate(['/menuadmin']);
      this.CloseLoginPopup();
    } else {
      this.nopass = true;
    }
  }
}
