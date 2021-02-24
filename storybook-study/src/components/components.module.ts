import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './molecules/button/button.component';
import { CheckboxComponent } from './molecules/checkbox/checkbox.component';
import { TaskComponent } from './molecules/task/task.component';
import { TaskListComponent } from './organisms/task-list/task-list.component';
import { TypographyComponent } from './atoms/typography/typography.component';
import { IconComponent } from './atoms/icon/icon.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    TaskComponent,
    TaskListComponent,
    TypographyComponent,
    IconComponent,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    TaskComponent,
    TaskListComponent,
    TypographyComponent,
    IconComponent,
  ],
})
export class ComponentsModule {}
