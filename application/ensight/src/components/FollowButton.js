import React from 'react'
import '../assets/styles/components/FollowButton.css'

const FollowButton = ({ UserNumber, style, isFollowing, onFollowToggle }) => {
  return (
    <button
      data-testid={UserNumber}
      style={style}
      className={`button ${isFollowing ? 'following' : 'follow'}`}
      onClick={onFollowToggle}
    >
      {isFollowing ? 'Following' : 'Follow +'}
    </button>
  )
}

export default FollowButton
