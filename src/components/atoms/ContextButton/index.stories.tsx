import { StoryFn, Meta } from '@storybook/react'

import ContextButton from '@components/atoms/ContextButton'

export default {
  title: 'atoms/ContextButton',
  component: ContextButton,
} as Meta

const Template: StoryFn = () => <ContextButton />
export const Primary = {
  render: Template,
}
