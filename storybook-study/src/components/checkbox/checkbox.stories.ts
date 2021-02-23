import { Meta, Story } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

export default {
  title: 'Design System/Molecule/Checkbox',
  component: CheckboxComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<CheckboxComponent> = (args) => ({
  component: CheckboxComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
