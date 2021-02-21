import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Design System/Atoms/Button',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args) => ({
  component: ButtonComponent,
  props: args,
});

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  label: 'Button',
};
