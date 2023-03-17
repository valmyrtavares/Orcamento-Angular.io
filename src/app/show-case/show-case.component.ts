import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss'],
})
export class ShowCaseComponent {
  id: string;
  woman: any[] = [];
  ladies: any[] = [];
  changeApi: any[] | null = [];
  constructor(private route: ActivatedRoute, private user: ApiService) {
    this.id = this.route.snapshot.params['id']; //Como pegar a rota e colocar em uma variável
  }

  ngOnInit() {
    this.user.getDataWoman(this.id).subscribe((res: any) => {
      this.woman = res;
    });
  }
}
