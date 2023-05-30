import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/component.module';
import { MenuBudgetComponent } from './show-case/menu-budget/menu-budget.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { RouterModule } from '@angular/router';
import { SocialEventsComponent } from './social-events/social-events.component';
import { MobileButtonOptions } from './mobile-button-options/mobile-button-options';
import { BudgetSavedComponent } from './budget-saved/budget-saved.component';
import { HeaderComponent } from './header/header.component';
import { CustomerFormComponent } from './show-case/user-form/customer-form.component';
import { FormsModule } from '@angular/forms';
import { PopupLoginAdminComponent } from './admin/popup-login-admin/popup-login-admin.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { PortifolioFormComponent } from './admin/portifolio-form/portifolio-form.component';
import { ServiceBudgetFormComponent } from './admin/service-budget-form/service-budget-form.component';
import { PortifolioEditFormComponent } from './admin/portifolio-form/portifolio-edit-form/portifolio-edit-form.component';
import { PopupBudgetExtraItemComponent } from './admin/service-budget-form/popup-budget-extra-item/popup-budget-extra-item.component';
import { EditExtraServiceComponent } from './admin/edit-extra-service/edit-extra-service.component';
import { MainMenuFormComponent } from './admin/main-menu-form/main-menu-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBudgetComponent,
    ShowCaseComponent,
    SubmenuComponent,
    SocialEventsComponent,
    MobileButtonOptions,
    BudgetSavedComponent,
    HeaderComponent,
    CustomerFormComponent,
    PopupLoginAdminComponent,
    MenuAdminComponent,
    PortifolioFormComponent,
    ServiceBudgetFormComponent,
    PortifolioEditFormComponent,
    PopupBudgetExtraItemComponent,
    EditExtraServiceComponent,
    MainMenuFormComponent,
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
