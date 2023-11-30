import { render, fireEvent, screen } from '@testing-library/react'
import MovieLanding from '../MovieLanding'

describe('MovieLanding Component', () => {
  describe('Opening Rating Popup', () => {
    it('should open the Rating Popup when the "Rate" text is clicked', () => {
      render(<MovieLanding />)

      const ratingButton = screen.getByTestId('open-rating-button')
      fireEvent.click(ratingButton)

      const ratingPopup = screen.getByTestId('rating-popup')
      expect(ratingPopup).toBeInTheDocument()
    })
  })

  describe('Give a Movie a Rating', () => {
    it('should close the pop up and print the rating', () => {
      render(<MovieLanding />)

      const ratingButton = screen.getByTestId('open-rating-button')
      fireEvent.click(ratingButton)

      const ratingPopup = screen.getByTestId('rating-popup')

      const stars = screen.getAllByAltText('star-unfilled')
      expect(stars.filter(star => star).length).toBe(5)

      const thirdStar = screen.getAllByAltText('star-unfilled')[2]
      fireEvent.click(thirdStar)
      const updatedStars = screen.getAllByAltText('star-filled')

      const rateButton = screen.getByTestId('submit-rating-button')
      fireEvent.click(rateButton)

      expect(updatedStars.filter(star => star).length).toBe(3)
      expect(ratingPopup).not.toBeInTheDocument()
    })
  })
})
