const fetchData = {
  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(
      response => response.json()
    )
  },

  getOneMovie(id) {
    let url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
    return fetch(url).then(response => response.json())
  },
}

export default fetchData
