const apiKey = '8fafefc74c838929434d71d5c003635d'
const baseUrl = 'https://api.themoviedb.org/3';

export const getGenres = async () => {
  try {
    const request = await fetch(`${baseUrl}/genre/movie/list?api_key=${apiKey}`);
    const data = request.json();
  
    return data
  } catch (error) {
    throw(error);
  }
}

export const getTrending = async(page) => {
  try {
    const request = await fetch(`${baseUrl}/trending/all/day?api_key=${apiKey}`);
    const data = request.json();
  
    return data;
  } catch (error) {
    throw(error)
  }
}

export const filterByGenre = async(genre) => {
  try {
    const request = await fetch(`${baseUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=${genre}`);
    const data = request.json();
  
    return data;
  } catch (error) {
    throw(error)
  }
}

export const getLatest = async() => {
  try {
    const request = await fetch(`${baseUrl}/movie/latest?api_key=${apiKey}&language=en-US`);
    const data = request.json();

    return data;
  } catch (error) {
    throw(error)
  }
}
