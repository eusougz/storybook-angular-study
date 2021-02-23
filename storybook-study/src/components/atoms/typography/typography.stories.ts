import { Meta, Story } from '@storybook/angular';
import { TypographyComponent } from './typography.component';

export default {
  title: 'Design System/Atoms/Typography',
  component: TypographyComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story<TypographyComponent> = (args) => ({
  component: TypographyComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  text: 'Texto de teste',
};
