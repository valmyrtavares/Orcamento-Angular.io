import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-portifolio-edit-form',
  templateUrl: './portifolio-edit-form.component.html',
  styleUrls: ['./portifolio-edit-form.component.scss'],
})
export class PortifolioEditFormComponent implements OnInit {
  @Output() closeEditForm: EventEmitter<any> = new EventEmitter();

  constructor(private user: ApiService) {}

  portifolio: any[] = [];

  ngOnInit(): void {
    this.getData();
  }
  CloseLoginPopup() {
    this.closeEditForm.emit();
  }

  getData() {
    this.user.getSocialEvents('casamento').subscribe((res: any) => {
      console.log(res.showCase);
      this.portifolio = res.showCase;
    });
  }
}
