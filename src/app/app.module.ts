import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';
import { MenuBudgetComponent } from './menu-budget/menu-budget.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { HomeComponent } from './home/home.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { RouterModule } from '@angular/router';
import { SocialEventsComponent } from './social-events/social-events.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BudgetSavedComponent } from './budget-saved/budget-saved.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBudgetComponent,
    ShowCaseComponent,
    HomeComponent,
    SubmenuComponent,
    SocialEventsComponent,
    MainMenuComponent,
    BudgetSavedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ComponentModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
