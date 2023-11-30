import { render, fireEvent, screen } from '@testing-library/react'
import ListLanding from '../ListLanding'

describe('ListLanding Component', () => {
  describe('Opening Comment Popup', () => {
    it('should open the Comment Popup when the "Write a Comment" button is clicked', () => {
      render(<ListLanding />)

      const commentButton = screen.getByTestId('open-comment-button')
      fireEvent.click(commentButton)

      const commentPopup = screen.getByTestId('comment-popup')
      expect(commentPopup).toBeInTheDocument()
    })
  })

  describe('Submitting Comment', () => {
    it('should not close the Comment Popup if submitted with a blank comment', () => {
      render(<ListLanding />)

      const commentButton = screen.getByTestId('open-comment-button')
      fireEvent.click(commentButton)

      const commentPopup = screen.getByTestId('comment-popup')
      expect(commentPopup).toBeInTheDocument()

      const submitButton = screen.getByTestId('submit-comment-button')
      fireEvent.click(submitButton)

      expect(commentPopup).toBeInTheDocument()
    })

    it('should close the Comment Popup after submitting a comment', () => {
      render(<ListLanding />)

      const commentButton = screen.getByTestId('open-comment-button')
      fireEvent.click(commentButton)

      const commentPopup = screen.getByTestId('comment-popup')
      expect(commentPopup).toBeInTheDocument()

      const commentTextarea = screen.getByTestId('comment-textarea')
      fireEvent.change(commentTextarea, {
        target: { value: 'This is my comment.' },
      })

      const submitButton = screen.getByTestId('submit-comment-button')
      fireEvent.click(submitButton)

      expect(commentPopup).not.toBeInTheDocument()
    })
  })
})
