import { render } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from '@components/organisms/Header/index.stories'

const { LoggedIn, LoggedOut } = composeStories(stories)

test('LoggedIn storybook test', () => {
  const { getByText } = render(<LoggedIn />)
  const text = getByText('Log out')
  expect(text).not.toBeNull()
})

test('LoggedOut storybook test', () => {
  const { getByText } = render(<LoggedOut />)
  const text = getByText('Log in')
  expect(text).not.toBeNull()
})
