import React, { useState, useEffect } from 'react';

import { getGenres, getLatest, getPopular } from '../../services/movies';
import Header from "../../components/Header"
import Filters from '../../components/Filters';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import './home.scss';

const Home = () => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'
  const [genres, setGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState('all');
  const [latest, setLatest] = useState();
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    loadGenres();
    loadLatest();
    loadPopular();
  }, []);

  const loadGenres = async() => {
    const { genres } = await getGenres();
    const allGenres = { id: 'all', name: 'All genres' };
    if (genres.length) {
      setGenres([allGenres, ...genres]);
    }
  }

  const loadLatest = async () => {
    const latest = await getLatest();
    if (latest) {
      setLatest(latest);
      console.log(latest)
    }
  }

  const loadPopular = async () => {
    const { results } = await getPopular();
    if (results.length) {
      setPopular(results);
    }
  }

  const getDate = (date) => {
    let formattedDate = date;
    if (date) {
      const dateTime = new Date(date).getTime();
      formattedDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium'}).format(dateTime);
    }
    return formattedDate;
  }

  const getPopularGenres = (genreIds) => {
    return genres.filter(gen => genreIds.includes(gen.id));
  }

  const handleOnSelectFilter = (filter) => {
    const result = popular.filter(fil => filter === fil.id);
    setGenreSelected(filter);
    setPopular(result);
    console.log(result)
  }

  return (
    <>
      <Header />
      <h1 className="mt-5 line pb-4 mb-5 home-title">What’s your favorite Movie?</h1>
      {genres.length > 0 &&
        <Filters
          filterLabel="Filter by Movie Genre"
          filterList={genres}
          currentSelected={genreSelected}
          onSelected={handleOnSelectFilter}
        />
      }

      {latest && genreSelected === 'all' &&
        <Banner
          title={latest.title}
          date={getDate(latest.release_date)}
          imgAlt={latest.title}
          imgUrl={latest.poster_path ? `${imageBaseUrl}${latest.poster_path}`: null}
          genresList={latest.genres}
          description={latest.overview}
        />
      }

      <div className="row mt-4">
        {popular.length > 0 &&
          popular.map(movie => (
          <Card
            key={movie.id}
            title={movie.title}
            date={getDate(movie.release_date)}
            imgAlt={movie.title}
            imgUrl={`${imageBaseUrl}${movie.backdrop_path}`}
            genresList={getPopularGenres(movie.genre_ids)}
            description={movie.overview}
          />
        ))}
      </div>
    </>
  )
}

export default Home