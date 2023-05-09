import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-budget-form',
  templateUrl: './service-budget-form.component.html',
  styleUrls: ['./service-budget-form.component.scss'],
})
export class ServiceBudgetFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log('teste');
  }
}
