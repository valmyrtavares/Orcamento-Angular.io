import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-extra-service',
  templateUrl: './edit-extra-service.component.html',
  styleUrls: ['./edit-extra-service.component.scss'],
})
export class EditExtraServiceComponent implements OnInit {
  category: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.params['category'];
    console.log(this.category);
  }
}
