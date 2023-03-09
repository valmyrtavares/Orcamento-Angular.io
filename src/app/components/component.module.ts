import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckComponent } from './check/check.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { ButtonLinkComponent } from './button-link/button-link.component';

@NgModule({
  declarations: [CheckComponent, TextComponentComponent, ButtonLinkComponent],
  imports: [CommonModule],
  exports: [CheckComponent, TextComponentComponent, ButtonLinkComponent],
})
export class ComponentModule {}
