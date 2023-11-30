import { render, fireEvent, screen } from '@testing-library/react'
import DisplayUser from '../DisplayUser'

describe('DisplayUser Component', () => {
  describe('Rendering DisplayUserResults Component', () => {
    it('should have a list of users with follow buttons when DisplayUser page is loaded', () => {
      render(<DisplayUser />)

      const displayUserResults = screen.getByTestId('display-user-results')
      expect(displayUserResults).toBeInTheDocument()

      const userNumberToTest = 1
      const followButton = screen.getByTestId(
        `follow-button-${userNumberToTest}`
      )
      expect(followButton).toBeInTheDocument()
    })
  })

  describe('Handle Toggle Follow', () => {
    it('should change Follow + to Following and vice versa', () => {
      render(<DisplayUser />)

      const userNumberToTest = 1
      const followButton = screen.getByTestId(
        `follow-button-${userNumberToTest}`
      )

      expect(followButton).toHaveTextContent('Follow +')

      fireEvent.click(followButton)

      expect(followButton).toHaveTextContent('Following')

      fireEvent.click(followButton)

      expect(followButton).toHaveTextContent('Follow +')
    })
  })
})
