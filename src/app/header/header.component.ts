import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  user: string = '';

  ngOnInit(): void {
    this.helloUser();
  }

  helloUser() {
    if (localStorage.hasOwnProperty('customer')) {
      this.user = JSON.parse(localStorage.getItem('customer'));
    }
  }
}
