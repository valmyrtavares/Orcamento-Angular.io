import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-login-admin',
  templateUrl: './popup-login-admin.component.html',
  styleUrls: ['./popup-login-admin.component.scss'],
})
export class PopupLoginAdminComponent implements OnInit {
  @Output() closeLoginPopup: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {}
  CloseLoginPopup() {
    this.closeLoginPopup.emit(false);
  }
}
