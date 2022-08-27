import { Story, Meta } from '@storybook/react'

import OtherComponent from '@components/atoms/OtherComponent'

export default {
  title: 'atoms/OtherComponent',
  component: OtherComponent,
} as Meta

const Template: Story = () => <OtherComponent />
export const Primary = Template.bind({})
