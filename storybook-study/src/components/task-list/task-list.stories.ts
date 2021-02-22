import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TaskComponent } from '../task/task.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';

export default {
  title: 'Design System/Composed/Task List',
  component: TaskListComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [TaskListComponent, TaskComponent, CheckboxComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

export const tasksData = [
  { name: 'Lavar vasilhas do almoço', duration: 45 },
  { name: 'Limpar sacada', duration: 10 },
  { name: 'Lavar o banheiro', duration: 30 },
];

const Template: Story<TaskListComponent> = (args) => ({
  component: TaskListComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  tasks: tasksData,
};
