import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App.jsx'

it('renders without crashing', () => {
  render(<App />)
})

it('renders Ethan Vinh', () => {
  render(<App />)
  expect(screen.getByText('Ethan Vinh')).toBeInTheDocument()
})


it('renders link buttons with correct URLs', () => {
  render(<App />)
  expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/etvinh')
  expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/etvinh')
  expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/resume.pdf')
})
