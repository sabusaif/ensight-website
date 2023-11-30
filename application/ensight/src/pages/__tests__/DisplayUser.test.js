import { render, fireEvent, screen } from '@testing-library/react'
import DisplayUser from '../DisplayUser'

describe('DisplayUser Component', () => {
  describe('Rendering DisplayUserResults Component', () => {
    const numberOfTests = 5

    for (let i = 1; i <= numberOfTests; i++) {
      it(`should have a follow button for user ${i}`, () => {
        render(<DisplayUser />)

        const displayUserResults = screen.getByTestId('display-user-results')
        expect(displayUserResults).toBeInTheDocument()

        const followButton = screen.getByTestId(`follow-button-${i}`)
        expect(followButton).toBeInTheDocument()
      })
    }

    it(`should not have a follow button for user 6 or above`, () => {
      render(<DisplayUser />)

      const displayUserResults = screen.getByTestId('display-user-results')
      expect(displayUserResults).toBeInTheDocument()

      const userNumberToTest = 6

      expect(
        screen.queryByTestId(`follow-button-${userNumberToTest}`)
      ).not.toBeInTheDocument()
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
