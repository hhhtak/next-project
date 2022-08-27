import { Story, Meta } from '@storybook/react'

import DisplayCount from '@components/atoms/DisplayCount'

export default {
  title: 'atoms/DisplayCount',
  component: DisplayCount,
} as Meta

const Template: Story = () => <DisplayCount />
export const Primary = Template.bind({})
