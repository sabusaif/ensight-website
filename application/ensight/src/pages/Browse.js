import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../assets/styles/pages/Browse.css'
import YearSelection from '../components/Selections/YearSelection.js'
import GenreSelection from '../components/Selections/GenreSelection.js'
import RatingSelection from '../components/Selections/RatingSelection.js'
import MovieResults from '../components/Results/MovieResults.js'
import ListResults from '../components/Results/ListResults.js'
import UserResults from '../components/Results/UserResults.js'

const Browse = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const searchTerm = queryParams.get('searchTerm')

  console.log(searchTerm)

  const [selectedRating, setSelectedRating] = useState('highest')
  const [searchRating, setSearchRating] = useState('highest')

  const [selectedGenre, setSelectedGenre] = useState({})
  const [searchGenre, setSearchGenre] = useState({})

  const [selectedYear, setSelectedYear] = useState({})
  const [searchYear, setSearchYear] = useState({})

  const [followedUsers, setFollowedUsers] = useState({})

  const handleFollowToggle = userNumber => {
    setFollowedUsers(prevFollowedUsers => ({
      ...prevFollowedUsers,
      [userNumber]: !prevFollowedUsers[userNumber],
    }))
  }

  useEffect(() => {
    console.log('Search Rating Updated:', searchRating)
    console.log('Search Genre Updated:', searchGenre)
    console.log('Search Year Updated:', searchYear)
    // You can perform any actions here that depend on the updated state
  }, [searchRating, searchGenre, searchYear])

  const handleRatingChange = rating => {
    setSelectedRating(rating)
  }

  const handleGenreChange = genre => {
    setSelectedGenre(genre)
  }

  const handleYearChange = year => {
    setSelectedYear(year)
  }

  const checkSelections = () => {
    setSearchRating(selectedRating)

    const selectedGenresArray = Object.keys(selectedGenre).filter(
      genre => selectedGenre[genre]
    )
    setSearchGenre(selectedGenresArray)

    const selectedYearArray = Object.keys(selectedYear).filter(
      year => selectedYear[year]
    )
    setSearchYear(selectedYearArray)
  }

  return (
    <div className="flex-container">
      <div className="BrowseFilter">
        <h2 className="BrowseTitle">Browse by</h2>
        <div className="CheckSelections">
          <YearSelection onYearChange={handleYearChange} />
          <GenreSelection onGenreChange={handleGenreChange} />
          <RatingSelection onRatingChange={handleRatingChange} />
        </div>
        {/* once search is clicked, any of the checkboxes are applied */}
        {/* if no checkboxes are picked for a selection, then add all */}
        <button className="BrowseSearch" onClick={checkSelections}>
          Search
        </button>
      </div>
      <div className="BrowseResults">
        <div>
          <h2>Films</h2>
          {/* replace with 4 movies */}
          <MovieResults rating={searchRating} />
          <MovieResults />
          <MovieResults />
          <MovieResults />
          <h3 className="SeeResults">
            <Link to="/DisplayMovie">See More Results</Link>
          </h3>
        </div>
        <div>
          <h2>Lists</h2>
          <div>
            {/* replace with 5 lists */}
            <ListResults />
            <ListResults />
            <ListResults />
            <ListResults />
            <ListResults />
          </div>
          <h3 className="SeeResults">
            <Link to="/DisplayList">See More Results</Link>
          </h3>
        </div>
        <div>
          <h2>Users</h2>
          <div>
            {/* replace with 5 users */}
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
          </div>
          <h3 className="SeeResults">
            <Link to="/DisplayUser">See More Results</Link>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Browse
