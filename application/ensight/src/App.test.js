import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

window.scrollTo = jest.fn()

test('renders Lights, Camera, Connect! text', () => {
  render(<App />)
  const textElement = screen.getByText(/Lights, Camera, Connect!/i)
  expect(textElement).toBeInTheDocument()
})
