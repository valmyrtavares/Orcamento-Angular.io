import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portifolio-form',
  templateUrl: './portifolio-form.component.html',
  styleUrls: ['./portifolio-form.component.scss'],
})
export class PortifolioFormComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  sendImages(form: NgForm) {
    console.log(form.value);
  }
  CloseLoginPopup() {
    this.router.navigate(['/menuadmin']);
  }
}
