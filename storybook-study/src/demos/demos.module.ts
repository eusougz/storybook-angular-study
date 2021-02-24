import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosRoutingModule } from './demos-routing.module';
import { ManageTasksComponent } from './pages/manage-tasks/manage-tasks.component';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  declarations: [ManageTasksComponent],
  imports: [CommonModule, DemosRoutingModule, ComponentsModule],
})
export class DemosModule {}
