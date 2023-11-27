import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Header from '@components/organisms/Header'

export default {
  title: 'organisms/Header',
  component: Header,
} as Meta<typeof Header>

export const LoggedIn = {
  args: {
    user: {},
  },
}

export const LoggedOut = {
  args: {},
}
