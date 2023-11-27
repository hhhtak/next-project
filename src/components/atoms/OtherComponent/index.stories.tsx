import { StoryFn, Meta } from '@storybook/react'

import OtherComponent from '@components/atoms/OtherComponent'

export default {
  title: 'atoms/OtherComponent',
  component: OtherComponent,
} as Meta

const Template: StoryFn = () => <OtherComponent />
export const Primary = {
  render: Template,
}
