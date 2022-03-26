const fetchData = {
  getAllMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => console.log('API calls', data.movies))
  },
}

export default fetchData
