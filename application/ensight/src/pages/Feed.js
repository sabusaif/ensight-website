// MovieCarousels.js
import React, { useState } from 'react'
import 'matchmedia-polyfill'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../assets/styles/pages/Feed.css' // Your custom stylesA
import UserResults from '../components/Results/UserResults'

function Feed() {
  // Settings for the "Popular in Theaters" and "Popular in Streaming" carousels
  const moviesSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  }

  // Settings for the "Popular Lists" carousel
  const listsSettings = {
    ...moviesSettings,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  // Placeholder data
  const moviesPlaceholderData = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    title: `Movie ${index + 1}`,
  }))

  const listsPlaceholderData = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    title: `List ${index + 1}`,
  }))

  const [followedUsers, setFollowedUsers] = useState({})

  const handleFollowToggle = userNumber => {
    setFollowedUsers(prevFollowedUsers => ({
      ...prevFollowedUsers,
      [userNumber]: !prevFollowedUsers[userNumber],
    }))
  }

  return (
    <div className="movie-carousels-container">
      <CarouselSection
        title="Popular in Theaters"
        placeholderData={moviesPlaceholderData}
        settings={moviesSettings}
      />
      <CarouselSection
        title="Popular in Streaming"
        placeholderData={moviesPlaceholderData}
        settings={moviesSettings}
      />
      <CarouselSection
        title="Popular Lists"
        placeholderData={listsPlaceholderData}
        settings={listsSettings}
        isList
      />
      <div className="user-title">Popular Users</div>
      <div className="user-container">
        <UserResults
          userNumber={1}
          isFollowing={followedUsers[1]}
          onFollowToggle={() => handleFollowToggle(1)}
        />
        <UserResults
          userNumber={2}
          isFollowing={followedUsers[2]}
          onFollowToggle={() => handleFollowToggle(2)}
        />
        <UserResults
          userNumber={3}
          isFollowing={followedUsers[3]}
          onFollowToggle={() => handleFollowToggle(3)}
        />
        <UserResults
          userNumber={4}
          isFollowing={followedUsers[4]}
          onFollowToggle={() => handleFollowToggle(4)}
        />
        <UserResults
          userNumber={5}
          isFollowing={followedUsers[5]}
          onFollowToggle={() => handleFollowToggle(5)}
        />
        <UserResults
          userNumber={6}
          isFollowing={followedUsers[6]}
          onFollowToggle={() => handleFollowToggle(6)}
        />
        <UserResults
          userNumber={7}
          isFollowing={followedUsers[7]}
          onFollowToggle={() => handleFollowToggle(7)}
        />
      </div>
    </div>
  )
}

// CarouselSection component
function CarouselSection({ title, placeholderData, settings, isList }) {
  return (
    <div className="carousel-section">
      <h2 className="carousel-title">{title}</h2>
      <Slider {...settings}>
        {placeholderData.map(item => (
          <div key={item.id} className="carousel-slide">
            <div className={isList ? 'list-placeholder' : 'movie-placeholder'}>
              <span className="placeholder-content">{item.title}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Feed
