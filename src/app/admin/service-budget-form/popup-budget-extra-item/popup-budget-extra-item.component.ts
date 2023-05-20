import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup-budget-extra-item',
  templateUrl: './popup-budget-extra-item.component.html',
  styleUrls: ['./popup-budget-extra-item.component.scss'],
})
export class PopupBudgetExtraItemComponent implements OnInit {
  constructor() {}
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {}
  onSubmit() {}

  closeItemPopup() {
    this.closePopup.emit(false);
  }
}
