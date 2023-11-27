import { StoryObj, StoryFn, Meta } from '@storybook/react'

import Button, { Props } from '@components/atoms/Button'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { defaultValue: 'Button' },
  },
} as Meta

export const Primary = {
  args: {
    children: 'foofoo',
    size: 'large',
    primary: true,
  },
}

export const Secondary = {
  args: {
    children: 'Children coming from story args!',
  },
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

export const StoryWithLocale: StoryObj = {
  render: (args, { globals: { locale } }) => {
    const caption = getCaptionForLocale(locale)
    return <Button {...args}>{caption}</Button>
  },
}

export const StoryWithParamsAndDecorator: StoryObj<Props> = {
  render: (args) => {
    return <Button {...args} />
  },

  args: {
    children: 'foo2',
  },

  parameters: {
    layout: 'centered',
  },

  decorators: [(StoryFn) => <StoryFn />],
}
