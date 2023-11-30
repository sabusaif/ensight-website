import { render, fireEvent, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Header from '../Header'

describe('Header Component', () => {
  describe('Search To Browse', () => {
    const history = createMemoryHistory()
    it('should search with a term that navigates to Browse page', () => {
      render(
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      )

      const searchInput = screen.getByTestId('search-input')
      const searchButton = screen.getByTestId('search-button')

      fireEvent.change(searchInput, { target: { value: 'example' } })

      fireEvent.click(searchButton)

      expect(history.location.pathname).toBe('/Browse')
      expect(history.location.search).toBe('?searchTerm=example')
    })
  })

  describe('Search Stay', () => {
    it('should search with an empty term that does nothing', () => {
      const history = createMemoryHistory({
        initialEntries: ['/MovieLanding'],
      })

      render(
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      )

      const searchButton = screen.getByText('Search')
      fireEvent.click(searchButton)

      expect(history.location.pathname).toBe('/MovieLanding')
    })
  })
})
