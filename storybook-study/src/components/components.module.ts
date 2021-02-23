import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './molecules/button/button.component';
import { CheckboxComponent } from './molecules/checkbox/checkbox.component';
import { TaskComponent } from './molecules/task/task.component';
import { TaskListComponent } from './organisms/task-list/task-list.component';
import { TypographyComponent } from './atoms/typography/typography.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    TaskComponent,
    TaskListComponent,
    TypographyComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}
