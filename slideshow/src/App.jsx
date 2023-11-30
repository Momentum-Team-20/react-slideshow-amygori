import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import filmData from './data/film-data.json'

function App() {
  return (
    <>
      <h1>Hello Vite + React!</h1>
      <>
        {filmData.map((film) => (
          <FilmCard
            filmTitle={film.title}
            filmOriginalTitle={film.original_title}
            key={film.id}
          />
        ))}
      </>
      {/* if I only wanted to show one film card, I could do this: */}
      {/* <FilmCard
        filmTitle={filmData[1].title}
        filmOriginalTitle={filmData[1].original_title}
        expanded={false}
        key={filmData[1].id}
      /> */}
    </>
  )
}

export default App

const FilmCard = ({ filmOriginalTitle, filmTitle }) => {
  return (
    <div className="card">
      <h1>{filmTitle}</h1>
      <p>{filmOriginalTitle}</p>
    </div>
  )
}
