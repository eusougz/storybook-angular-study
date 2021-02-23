import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { TaskComponent } from './task.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

export default {
  title: 'Design System/Molecule/Task',
  component: TaskComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    moduleMetadata({
      declarations: [TaskComponent, CheckboxComponent, ButtonComponent],
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
