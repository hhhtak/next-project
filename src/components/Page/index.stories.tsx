import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import Page from '@components/Page'
import * as HeaderStories from '@components/organisms/Header/index.stories'

export default {
  title: 'src/Page',
  component: Page,
} as Meta<typeof Page>

export const LoggedIn = {
  args: {
    // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
    ...HeaderStories.LoggedIn.args,
  },
}

export const LoggedOut = {
  args: {
    ...HeaderStories.LoggedOut.args,
  },
}
