import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { TypographyComponent } from 'src/components/atoms/typography/typography.component';
import { CommonModule } from '@angular/common';

export default {
  title: 'Design System/Molecule/Button',
  component: ButtonComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent, TypographyComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args) => ({
  component: ButtonComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};
