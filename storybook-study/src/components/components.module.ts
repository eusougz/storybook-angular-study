import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [ButtonComponent, CheckboxComponent, TaskComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
