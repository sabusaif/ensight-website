import React, { useState } from 'react'
import '../assets/styles/pages/DisplayUser.css'
import DisplayUserResults from '../components/Results/DisplayUserResults.js'

const Browse = () => {
  const totalUser = 34
  const numberOfUsersPerButton = 5

  const buttonPlacesDisplayData = []
  let remainingUsers = totalUser

  for (let i = 1; i <= Math.floor(totalUser / numberOfUsersPerButton); i++) {
    buttonPlacesDisplayData.push({
      number: i,
      totalUser: numberOfUsersPerButton,
    })
    remainingUsers -= numberOfUsersPerButton
  }

  if (remainingUsers > 0) {
    buttonPlacesDisplayData.push({
      number: buttonPlacesDisplayData.length + 1,
      totalUser: remainingUsers,
    })
  }

  const [selectedButton, setSelectedButton] = useState(1)

  // Use an object to store the followed users for each page
  const [followedUsers, setFollowedUsers] = useState({})

  const handleButtonClick = buttonNumber => {
    setSelectedButton(buttonNumber)
  }

  const handleFollowToggle = userNumber => {
    setFollowedUsers(prev => ({
      ...prev,
      [selectedButton]: {
        ...(prev[selectedButton] || {}),
        [userNumber]: !prev[selectedButton]?.[userNumber],
      },
    }))
  }

  return (
    <div data-testid="display-user-results" className="DisplayUserResults">
      <div className="DisplayOuter">
        {Array(buttonPlacesDisplayData[selectedButton - 1].totalUser)
          .fill()
          .map((_, index) => (
            <DisplayUserResults
              UserNumber={
                index + 1 + (selectedButton - 1) * numberOfUsersPerButton
              }
              isFollowing={
                followedUsers[selectedButton]?.[
                  index + 1 + (selectedButton - 1) * numberOfUsersPerButton
                ]
              }
              onFollowToggle={() =>
                handleFollowToggle(
                  index + 1 + (selectedButton - 1) * numberOfUsersPerButton
                )
              }
              key={index}
            />
          ))}
      </div>
      <div className="DisplayButtonPlaceWrapper">
        {buttonPlacesDisplayData.map(buttonData => (
          <h3
            data-testid={`button-${buttonData.number}`}
            className={`DisplayButtonPlace ${
              selectedButton === buttonData.number ? 'selected' : ''
            }`}
            onClick={() => handleButtonClick(buttonData.number)}
            key={buttonData.number}
          >
            {buttonData.number}
          </h3>
        ))}
      </div>
    </div>
  )
}

export default Browse
