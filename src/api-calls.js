const fetchData = {
  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
  },

  getOneMovie(id) {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + id)
      .then(response => response.json())
  }
}

export default fetchData
