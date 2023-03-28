import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { FixedBudget, CheckBoxList } from '../model';

@Component({
  selector: 'app-budget-saved',
  templateUrl: './budget-saved.component.html',
  styleUrls: ['./budget-saved.component.scss'],
})
export class BudgetSavedComponent implements OnInit {
  message: any;
  subscription: Subscription | undefined;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }
}
