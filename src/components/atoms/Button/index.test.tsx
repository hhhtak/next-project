import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './index.stories' // import all stories from the stories file

// Every component that is returned maps 1:1 with the stories, but they already contain all decorators from story level, meta level and global level.
const { Primary, Secondary } = composeStories(stories)

test('renders primary button with default args', () => {
  render(<Primary />)
  const buttonElement = screen.getByText(/foo/i)
  expect(buttonElement).not.toBeNull()
})

test('renders primary button with overridden props', () => {
  render(<Primary>Hello world</Primary>) // you can override props and they will get merged with values from the Story's args
  const buttonElement = screen.getByText(/Hello world/i)
  expect(buttonElement).not.toBeNull()
})

test('Secondary', () => {
  const { container } = render(<Secondary />)
  const buttonElement = screen.getByRole('button')
  expect(buttonElement.textContent).toEqual(Secondary.args?.children)
})
