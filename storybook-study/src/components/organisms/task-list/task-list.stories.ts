import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TaskComponent } from '../../molecules/task/task.component';
import { CheckboxComponent } from '../../molecules/checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { ButtonComponent } from '../../molecules/button/button.component';

export default {
  title: 'Design System/Organism/Task List',
  component: TaskListComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [
        TaskListComponent,
        TaskComponent,
        CheckboxComponent,
        ButtonComponent,
      ],
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