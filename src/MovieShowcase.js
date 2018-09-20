import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map((movie, i) => {
      const { poster, title, genres, IMDBRating } = movie;
      return (
        <MovieCard
          poster={poster}
          title={title}
          genres={genres}
          IMDBRating={IMDBRating}
          key={i}
        />
      );
    });
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
