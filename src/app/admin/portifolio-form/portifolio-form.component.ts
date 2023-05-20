import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-portifolio-form',
  templateUrl: './portifolio-form.component.html',
  styleUrls: ['./portifolio-form.component.scss'],
})
export class PortifolioFormComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  editCreate: boolean = true;

  ngOnInit(): void {}
  sendImages(form: NgForm) {
    const portifolio = form.value;
    this.http
      .post(
        'https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/portifolio.json',
        portifolio
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
  CloseLoginPopup() {
    this.router.navigate(['/menuadmin']);
  }
  editCreateToggle() {
    this.editCreate = !this.editCreate;
    console.log(this.editCreate);
  }
}
