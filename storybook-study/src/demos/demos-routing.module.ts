import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageTasksComponent } from './pages/manage-tasks/manage-tasks.component';

const routes: Routes = [
  { path: 'manage-tasks', component: ManageTasksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemosRoutingModule {}
