import { Story, Meta } from '@storybook/react'

import ContextButton from '@components/atoms/ContextButton'

export default {
  title: 'atoms/ContextButton',
  component: ContextButton,
} as Meta

const Template: Story = () => <ContextButton />
export const Primary = Template.bind({})
