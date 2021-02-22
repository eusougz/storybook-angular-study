import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';



@NgModule({
  declarations: [ButtonComponent, CheckboxComponent, TaskComponent, TaskListComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
