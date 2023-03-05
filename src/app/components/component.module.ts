import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckComponent } from './check/check.component';
import { TextComponentComponent } from './text-component/text-component.component';

@NgModule({
  declarations: [CheckComponent, TextComponentComponent],
  imports: [CommonModule],
  exports: [CheckComponent, TextComponentComponent],
})
export class ComponentModule {}
