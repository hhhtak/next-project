import { StoryFn, Meta } from '@storybook/react'

import DisplayCount from '@components/atoms/DisplayCount'

export default {
  title: 'atoms/DisplayCount',
  component: DisplayCount,
} as Meta

const Template: StoryFn = () => <DisplayCount />
export const Primary = {
  render: Template,
}
