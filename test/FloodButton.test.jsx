import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FloodButton from '../src/components/FloodButton.jsx'
import userEvent from '@testing-library/user-event'

it('renders flood button with label', () => {
  render(<FloodButton label="Test Flood" />)
  const button = screen.getByRole('button', { name: 'Test Flood' })
  expect(button).toBeInTheDocument()
})


it('activates flood effect on click', async () => {
  const user = userEvent.setup()
  render(<FloodButton label="Test Flood" />)
  await user.click(screen.getByRole('button', { name: 'Test Flood' }))
  expect(screen.getByTestId('binary-flood')).toBeInTheDocument()
})