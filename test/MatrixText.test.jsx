import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MatrixText from '../src/components/MatrixText.jsx'

it('renders without crashing', () => {
  render(<MatrixText text="Hello" />)
})

// this needs to be async to wait for animation to finish
it('decodes to the real text after the animation finishes', async () => {
  render(<MatrixText text="Hello" framesPerChar={1} />)
  expect(await screen.findByText('Hello')).toBeInTheDocument()
})
