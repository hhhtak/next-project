import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { ProfileCard, Props } from '@components/molecules/ProfileCard'
import { User } from '@interface/user'

export default {
  title: 'molecules/ProfileCard',
  component: ProfileCard,
} as Meta<typeof ProfileCard>

const mockUser: User = {
  id: 11111,
  name: '',
  age: 12,
  postCode: 1234567,
  address: 'hogehoge',
}

export const Default = {
  args: {
    user: mockUser,
  },
}
