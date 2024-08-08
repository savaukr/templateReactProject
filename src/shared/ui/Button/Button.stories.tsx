import React from 'react'

// import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button'
// import { Button, ButtonSize, ButtonTheme } from './Button'
// import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
// import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

//

  
const meta: Meta<typeof Button> = { component: Button };
// export default meta;
 
type Story = StoryObj<typeof Button>;
 
export const Primary: Story = { args: { children: 'Text' } };

export default { shared: Button };
export const PrimaryOnDark: Story = {
  ...Primary,
  parameters: {  },
};

////

// export default {
//   title: 'shared/Button',
//   component: Button
// } as ComponentMeta<typeof Button>

// const Template: ComponentStory<typeof Button> = (args:any) => <Button {...args} />

// export const Primary = Template.bind({})
// Primary.args = {
//   children: 'Text'
// }

// export const Clear = Template.bind({})
// Clear.args = {
//   children: 'Text',
//   // theme: ButtonTheme.CLEAR
// }

// export const Outline = Template.bind({})
// Outline.args = {
//   children: 'Text',
//   // theme: ButtonTheme.OUTLINE
// }

// export const OutlineDark = Template.bind({})
// OutlineDark.args = {
//   children: 'Text',
//   // theme: ButtonTheme.OUTLINE
// }

// // OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

// export const OutlineSquareDarkSizeM = Template.bind({})

// OutlineSquareDarkSizeM.args = {
//   children: 'Text',
//   // theme: ButtonTheme.OUTLINE,
//   // size: ButtonSize.M,
//   // square: true
// }

// export const OutlineSquareDarkSizeL = Template.bind({})
// OutlineSquareDarkSizeL.args = {
//   children: 'Text',
//   // theme: ButtonTheme.OUTLINE,
//   // size: ButtonSize.L,
//   square: true
// }

// export const OutlineSquareSizeXL = Template.bind({})
// OutlineSquareSizeXL.args = {
//   children: 'Text',
//   // theme: ButtonTheme.OUTLINE,
//   // size: ButtonSize.XL,
//   // square: true
// }

// export const OutlineDarkSizeM = Template.bind({})
// OutlineDarkSizeM.args = {
//   children: 'Text',
//   // theme: ButtonTheme.OUTLINE,
//   // size: ButtonSize.M
// }
// // OutlineDarkSizeM.decorators = [ThemeDecorator(Theme.DARK)]

// export const OutlineDarkSizeL = Template.bind({})
// OutlineDarkSizeL.args = {
//   children: 'Text',
//   // theme: ButtonTheme.OUTLINE,
//   // size: ButtonSize.L
// }
// // OutlineDarkSizeL.decorators = [ThemeDecorator(Theme.DARK)]

// export const OutlineSizeXL = Template.bind({})
// OutlineSizeXL.args = {
//   children: 'Text',
//   // theme: ButtonTheme.OUTLINE,
//   // size: ButtonSize.XL
// }
