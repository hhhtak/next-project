import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProfileCard, Props } from '@components/molecules/ProfileCard'
import { User } from '@interface/user'

export default {
  title: 'molecules/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

const mockUser: User = {
  id: 11111,
  name: '',
  age: 12,
  postCode: 1234567,
  address: 'hogehoge',
}

export const Default = Template.bind({})
Default.args = {
  user: mockUser,
}
