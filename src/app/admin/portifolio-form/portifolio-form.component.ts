import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-portifolio-form',
  templateUrl: './portifolio-form.component.html',
  styleUrls: ['./portifolio-form.component.scss'],
})
export class PortifolioFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  sendImages(form: NgForm) {
    console.log(form.value);
  }
  CloseLoginPopup() {}
}
