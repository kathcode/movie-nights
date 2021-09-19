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

export const getPopular = async(page) => {
  try {
    const request = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`);
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
