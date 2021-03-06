import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from 'src/components/atoms/typography/typography.component';
import { IconComponent } from 'src/components/atoms/icon/icon.component';

export default {
  title: 'Design System/Molecule/Checkbox',
  component: CheckboxComponent,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [
    moduleMetadata({
      declarations: [CheckboxComponent, TypographyComponent, IconComponent],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<CheckboxComponent> = (args) => ({
  component: CheckboxComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};
