import { Meta, Story } from '@storybook/angular';
import { IconComponent } from './icon.component';

export default {
  title: 'Design System/Atoms/Icon',
  component: IconComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<IconComponent> = (args) => ({
  component: IconComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  icon: 'check',
};
