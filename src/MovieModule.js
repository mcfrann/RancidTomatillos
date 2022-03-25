// import React, { Component } from "react"
// import "./MovieModule.css"
// import MovieData from "./MovieData"

// class MovieModule extends Component {
//   constructor(id) {
//     super(id)
//     this.state = {
//       id: '',
//       poster_path: '',
//       backdrop_path: '',
//       title: '',
//       average_rating: '',
//       release_date: ''
//     }
//   }

//   determineMovie = (id) => {
//     const movie = MovieData.indexOf(id)
//     this.setState({
//       id: movie.id,
//       poster_path: movie.poster_path,
//       backdrop_path: movie.backdrop_path,
//       title: movie.title,
//       average_rating: movie.average_rating,
//       release_date: movie.release_date
//     })
//     console.log(movie)
//   }

//   render() {
//     return(
//       console.log("Showing movie")
//     )
//   }
// }

// export default MovieModule