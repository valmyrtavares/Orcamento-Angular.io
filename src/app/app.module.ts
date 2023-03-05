import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';
import { MenuBudgetComponent } from './menu-budget/menu-budget.component';
import { ShowCaseComponent } from './show-case/show-case.component';

@NgModule({
  declarations: [AppComponent, MenuBudgetComponent, ShowCaseComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
