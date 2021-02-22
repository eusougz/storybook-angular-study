import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';



@NgModule({
  declarations: [ButtonComponent, CheckboxComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
