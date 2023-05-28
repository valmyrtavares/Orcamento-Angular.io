import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-main-menu-form',
  templateUrl: './main-menu-form.component.html',
  styleUrls: ['./main-menu-form.component.scss'],
})
export class MainMenuFormComponent implements OnInit {
  mainMenus: any[] = [];
  constructor(private http: HttpClient, private user: ApiService) {}

  ngOnInit(): void {
    this.user.getSocialEvents('eventType').subscribe((res: any) => {
      this.mainMenus = res;
    });
  }

  // getMainMenu() {
  //   this.http
  //     .get(
  //       'https://projeto-primeiro-de92d-default-rtdb.firebaseio.com/portifolio.json'
  //     )
  //     .pipe(
  //       map((res) => {
  //         const showcase = [];
  //         for (const key in res) {
  //           if (res.hasOwnProperty(key)) {
  //             showcase.push({ ...res[key], id: key });
  //           }
  //         }
  //         return showcase;
  //       })
  //     )
  //     .subscribe((res) => {
  //       this.mainMenu = res.filter((item) => item.category === this.id);
  //     });
  // }
  changeMainMenu(label: string, img: string) {
    console.log(label);
    console.log(img);
  }
}
