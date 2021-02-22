import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TaskComponent } from './task.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Design System/Composed/Task',
  component: TaskComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    moduleMetadata({
      declarations: [TaskComponent, CheckboxComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<TaskComponent> = (args) => ({
  component: TaskComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  name: 'Lavar as vasilhas do almoço',
  duration: 45,
};
