import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './index'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { defaultValue: 'Button' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'foofoo',
  size: 'large',
  primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Children coming from story args!',
}

const getCaptionForLocale = (locale: string) => {
  switch (locale) {
    case 'es':
      return 'Hola!'
    case 'fr':
      return 'Bonjour!'
    case 'kr':
      return '안녕하세요!'
    case 'pt':
      return 'Olá!'
    default:
      return 'Hello!'
  }
}

export const StoryWithLocale: Story = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale)
  return <Button {...args}>{caption}</Button>
}

export const StoryWithParamsAndDecorator: Story<ButtonProps> = (args) => {
  return <Button {...args} />
}
StoryWithParamsAndDecorator.args = {
  children: 'foo2',
}
StoryWithParamsAndDecorator.parameters = {
  layout: 'centered',
}
StoryWithParamsAndDecorator.decorators = [(StoryFn) => <StoryFn />]
