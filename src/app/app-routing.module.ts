import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialEventsComponent } from './social-events/social-events.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { HomeComponent } from './home/home.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { MenuBudgetComponent } from './menu-budget/menu-budget.component';
import { BudgetSavedComponent } from './budget-saved/budget-saved.component';

const routes: Routes = [
  { path: 'events', component: SocialEventsComponent },
  { path: 'submenu', component: SubmenuComponent },
  { path: '', component: HomeComponent },
  { path: 'menubudget', component: MenuBudgetComponent },
  { path: 'summary', component: BudgetSavedComponent },
  { path: 'showcase/:id', component: ShowCaseComponent }, //rota com parametro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
