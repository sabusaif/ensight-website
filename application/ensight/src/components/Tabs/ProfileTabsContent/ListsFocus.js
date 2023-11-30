import React, { useState } from 'react'
import '../../../assets/styles/components/ProfileTabs.css'

const ListsFocus = () => {
  const [isEditing, setIsEditing] = useState(true)
  const [addedMovies, setAddedMovies] = useState([])
  const numberOfLists = 2
  const movieTitles = [
    'Movie Title 1',
    'Movie Title 2',
    'Movie Title 3',
    'Movie Title 4',
    'Movie Title 5',
    'Movie Title 6',
    'Movie Title 7',
  ]

  const handleEditClick = () => {
    setIsEditing(false)
  }

  const handleCancelClick = () => {
    setIsEditing(true)
    setAddedMovies([])
  }

  const handleSubmitClick = () => {
    if (addedMovies.length >= 5) {
      setIsEditing(true)
      setAddedMovies([])
    }
  }

  const handleAddMovie = movieTitle => {
    if (!addedMovies.includes(movieTitle)) {
      setAddedMovies([...addedMovies, movieTitle])
    }
  }

  const handleRemoveMovie = movieTitle => {
    // Create a new array without the clicked movie title
    const updatedMovies = addedMovies.filter(title => title !== movieTitle)
    setAddedMovies(updatedMovies)
  }

  const renderMovieSection = index => (
    <div className="ListOverlap" key={index}>
      <div className="PostersGrid">
        {[1, 2, 3, 4, 5].map(movieIndex => (
          <h6
            key={movieIndex}
            className={`ListMoviePoster ListMovie${movieIndex}`}
          >
            Movie
          </h6>
        ))}
      </div>
      <div className="movie-info">
        <div className="movie-user">User</div>
        <div className="movie-title">Movie Title</div>
      </div>
    </div>
  )

  return (
    <div className="Content">
      <div className={isEditing ? 'ListView' : 'ListEdit'}>
        {isEditing ? (
          <>
            <div className="GridContainer GridList">
              {[...Array(numberOfLists).keys()].map(index =>
                renderMovieSection(index)
              )}
              {/* this should be kept so the user can add more movies unless viewing a profile */}
              <button className="MovieList AddList" onClick={handleEditClick}>
                <h3>+</h3>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="ListInfo">
              <h2 className="ProfileTitle">Title</h2>
              {/* users can change their name here */}
              <input className="TitleInput" placeholder="Title"></input>
            </div>
            <div className="ListInfo">
              <h2 className="ProfileTitle">Description</h2>
              {/* users can change their bio here */}
              <textarea className="BioText" placeholder="Description" />
            </div>
            {/* search is implemented here where it will display all movies with same keywords */}
            <div className="AddingFilms">
              <div className="FilmAdd">
                <h2 className="ListAddFilm">Add Films</h2>
                <div class="MovieSearch">
                  <input
                    className="SearchInput"
                    type="text"
                    placeholder="Add Item"
                  />
                  <button class="SearchButton">Search</button>
                </div>
                <div className="MovieResults">
                  {movieTitles.map((title, index) => (
                    <div key={index}>
                      <button
                        className="MovieWatchlist WatchButton"
                        onClick={() => handleAddMovie(title)}
                      >
                        Movie
                      </button>
                      <h4 className="MovieText">{title}</h4>
                    </div>
                  ))}
                </div>
              </div>
              <div className="FilmAdded">
                <h3 className="ProfileTitle">Films Added</h3>
                <ul className="FilmsAdded">
                  {addedMovies.map((movie, index) => (
                    <li
                      className="FilmAddedList"
                      key={index}
                      onClick={() => handleRemoveMovie(movie)}
                    >
                      {movie}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="ListButtons">
              {/* will create the list */}
              <button className="Button RightB" onClick={handleSubmitClick}>
                Create
              </button>
              {/* will go back to lists without saving anything */}
              <button className="Button LeftB" onClick={handleCancelClick}>
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ListsFocus
