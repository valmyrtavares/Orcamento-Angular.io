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
  //TRocar esses nomes
  lux: any;
  sun: any;
  moon: any;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(
      (message) => (this.message = message)
    );
    this.go();
  }

  go() {
    const { lux, sun, moon } = this.message;
    this.lux = lux;
    this.sun = sun;
    this.moon = moon;
    console.log(this.message.a);
    console.log(this.message.c);
    console.log(this.message);
  }
}
