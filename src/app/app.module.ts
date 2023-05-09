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
import { MobileButtonOptions } from './mobile-button-options/mobile-button-options';
import { BudgetSavedComponent } from './budget-saved/budget-saved.component';
import { HeaderComponent } from './header/header.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { PopupLoginAdminComponent } from './popup-login-admin/popup-login-admin.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { PortifolioFormComponent } from './admin/portifolio-form/portifolio-form.component';
import { ServiceBudgetFormComponent } from './admin/service-budget-form/service-budget-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBudgetComponent,
    ShowCaseComponent,
    HomeComponent,
    SubmenuComponent,
    SocialEventsComponent,
    MobileButtonOptions,
    BudgetSavedComponent,
    HeaderComponent,
    UserFormComponent,
    PopupLoginAdminComponent,
    MenuAdminComponent,
    PortifolioFormComponent,
    ServiceBudgetFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
