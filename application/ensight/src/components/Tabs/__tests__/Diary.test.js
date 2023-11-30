import { render, fireEvent, screen } from '@testing-library/react'
import Diary from '../Diary'

describe('Diary Component', () => {
  describe('Liking Diary Button', () => {
    it('should increase the like count by one and toggles checked state when like button is clicked', () => {
      const initialLikes = 5
      render(<Diary likes={initialLikes} />)

      // console.log('Is checked:', screen.getByTestId('like-button').checked)

      const likeButton = screen.getByTestId('like-button')
      fireEvent.click(likeButton)

      // console.log('Is checked:', screen.getByTestId('like-button').checked)

      expect(screen.getByTestId('likes-count').textContent).toBe('6 likes')
      expect(likeButton).toBeChecked()
    })
  })

  describe('Unliking Diary Button', () => {
    it('should increase the like count by 1 then subtract by 1 when checking and uncheching the like button', () => {
      const initialLikes = 5
      render(<Diary likes={initialLikes} />)

      const likeButton = screen.getByTestId('like-button')
      fireEvent.click(likeButton)
      fireEvent.click(likeButton)

      expect(screen.getByTestId('likes-count').textContent).toBe('5 likes')
      expect(screen.getByTestId('like-button')).not.toHaveAttribute('checked')
    })
  })
})
