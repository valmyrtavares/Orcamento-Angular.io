import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { FixedBudget, CheckBoxList } from '../model';

@Component({
  selector: 'app-budget-saved',
  templateUrl: './budget-saved.component.html',
  styleUrls: ['./budget-saved.component.scss'],
})
export class BudgetSavedComponent implements OnInit {
  @Input() fixedBudget: FixedBudget;
  @Input() newDataBudget: CheckBoxList[] = [];
  @Input() TotalValueBudget: number = 0;
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter();
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
  }
  CloseLoginPopup() {
    this.closePopup.emit();
  }
}
