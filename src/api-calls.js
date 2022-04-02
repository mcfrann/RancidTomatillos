const fetchData = {

  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(
      response => {
        if(!response.ok) {
          if(response.status >= 500) {
            throw new Error(`Cannot load page. Try again.`)
          } else if (response.status === 404) {
            throw new Error(`Oh no! Looks like this does not exist.`)
          } else {
            throw new Error(`Uh oh! Please reload the page.`)
          }
        }
        return response.json()
      }
    )
  },

  getOneMovie(id) {
    let url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
    return fetch(url).then(
      response => {
        if(!response.ok) {
          if(response.status >= 500) {
            throw new Error(`This does not exist.`)
          } else if (response.status === 404) {
            throw new Error(`Oh no! This movie was not found.`)
          } else {
            throw new Error(`Uh oh! Please return home and try again.`)
          }
        }
        return response.json()
      }
    )
  },

  getTrailer(id) {
    let url = `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`
    return fetch(url).then(
      response => {
        if(!response.ok) {
          if(response.status >= 500) {
            throw new Error(`This does not exist.`)
          } else if (response.status === 404) {
            throw new Error(`Oh no! This movie was not found.`)
          } else {
            throw new Error(`Uh oh! Please return home and try again.`)
          }
        }
        return response.json()
      }
    )
  }
}

export default fetchData
