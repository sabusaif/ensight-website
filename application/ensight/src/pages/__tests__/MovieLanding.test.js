import { render, fireEvent, screen } from '@testing-library/react'
import MovieLanding from '../MovieLanding'

describe('MovieLanding Component', () => {
  describe('Opening Review Popup', () => {
    it('should open the Review Popup when the "Write a Review" button is clicked', () => {
      render(<MovieLanding />)

      const reviewButton = screen.getByTestId('open-review-button')
      fireEvent.click(reviewButton)

      const reviewPopup = screen.getByTestId('review-popup')
      expect(reviewPopup).toBeInTheDocument()
    })
  })

  describe('Submitting Review', () => {
    it('should not close the Review Popup if submitted with a blank review', () => {
      render(<MovieLanding />)

      const reviewButton = screen.getByTestId('open-review-button')
      fireEvent.click(reviewButton)

      const reviewPopup = screen.getByTestId('review-popup')
      expect(reviewPopup).toBeInTheDocument()

      const submitButton = screen.getByTestId('submit-review-button')
      fireEvent.click(submitButton)

      expect(reviewPopup).toBeInTheDocument()
    })

    it('should close the Review Popup after submitting a review', () => {
      render(<MovieLanding />)

      const reviewButton = screen.getByTestId('open-review-button')
      fireEvent.click(reviewButton)

      const reviewPopup = screen.getByTestId('review-popup')
      expect(reviewPopup).toBeInTheDocument()

      const reviewTextarea = screen.getByTestId('review-textarea')
      fireEvent.change(reviewTextarea, {
        target: { value: 'This is my review.' },
      })

      const submitButton = screen.getByTestId('submit-review-button')
      fireEvent.click(submitButton)

      expect(reviewPopup).not.toBeInTheDocument()
    })
  })
})
