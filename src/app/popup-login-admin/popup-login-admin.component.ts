import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  onSubmit() {}
  CloseLoginPopup() {
    this.closeLoginPopup.emit(false);
  }
  temporaryName() {
    this.router.navigate(['/menuadmin']);
    this.CloseLoginPopup();
  }
}
