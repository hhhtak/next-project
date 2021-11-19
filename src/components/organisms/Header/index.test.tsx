import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '@components/organisms/Header/index.stories'

const { LoggedIn, LoggedOut } = composeStories(stories)

test('LoggedIn storybook test', () => {
  render(<LoggedIn />)
})

test('LoggedOut storybook test', () => {
  render(<LoggedOut />)
})
