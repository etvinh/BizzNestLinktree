import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import LinkButton from '../src/components/LinkButton.jsx'

it('renders link button with label', () => {
  render(<LinkButton url="https://test.com" label="Test" />)
  const link = screen.getByRole('link', { name: 'Test' })
  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', 'https://test.com')
})

