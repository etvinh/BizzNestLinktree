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
