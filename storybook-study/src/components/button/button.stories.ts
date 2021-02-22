import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Design System/Atoms/Button',
  component: ButtonComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<ButtonComponent> = (args) => ({
  component: ButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
