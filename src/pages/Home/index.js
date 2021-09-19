import React, { useState, useEffect } from 'react';
import dateFormat from 'dateformat';

import { getGenres, getLatest, getTrending, filterByGenre } from '../../services/movies';
import Filters from '../../components/Filters';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner'
import './home.scss';

const Home = () => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'
  const [genres, setGenres] = useState([]);
  const [genreSelected, setGenreSelected] = useState('all');
  const [latest, setLatest] = useState();
  const [trending, setTrending] = useState([]);
  const [isTrendingLoading, setIsTrendingLoading] = useState(false);
  const [isLatestLoading, setIsLatestLoading] = useState(false);

  useEffect(() => {
    loadGenres();
    loadLatest();
    loadTrending();
  }, []);

  const loadGenres = async() => {
    const { genres } = await getGenres();
    const allGenres = { id: 'all', name: 'All genres' };
    if (genres.length) {
      setGenres([allGenres, ...genres]);
    }
  }

  const loadLatest = async () => {
    setIsLatestLoading(true);
    const latest = await getLatest();
    if (latest) {
      setLatest(latest);
      setIsLatestLoading(false);
    }
  }

  const loadTrending = async () => {
    setIsTrendingLoading(true);
    const { results } = await getTrending();
    if (results.length) {
      setTrending(results);
      setIsTrendingLoading(false);
    }
  }

  const getDate = (date) => {
    let formattedDate = date;
    if (date) {
      const dateTime = new Date(date);
      formattedDate = dateFormat(dateTime, 'mmm d, yyyy')
    }
    return formattedDate;
  }

  const getTrendingGenres = (genreIds) => {
    return genres.filter(gen => genreIds.includes(gen.id));
  }

  const getMoviesFiltered = async(genreIds) => {
    if (genreIds !== 'all') {
      const { results } = await filterByGenre(genreIds);
      if (results.length) {
        setTrending(results);
      }
    } else {
      loadTrending();
    }

    setGenreSelected(genreIds);
  }

  return (
    <div className="container">
      <h1 className="mt-5 line pb-4 mb-5 home-title">What’s your favorite Movie?</h1>
      {genres.length > 0 &&
        <Filters
          filterLabel="Filter by Movie Genre"
          filterList={genres}
          currentSelected={genreSelected}
          onSelected={getMoviesFiltered}
        />
      }

      {isLatestLoading && <Spinner />}
      {latest &&
        genreSelected === 'all' &&
        !isLatestLoading &&
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
        {isTrendingLoading && <Spinner />}
        {trending.length > 0 &&
          !isTrendingLoading &&
          trending.map(movie => (
          <Card
            key={movie.id}
            title={movie.title}
            date={getDate(movie.release_date)}
            imgAlt={movie.title}
            imgUrl={`${imageBaseUrl}${movie.backdrop_path}`}
            genresList={getTrendingGenres(movie.genre_ids)}
            description={movie.overview}
          />
        ))}
      </div>
    </div>
  )
}

export default Home