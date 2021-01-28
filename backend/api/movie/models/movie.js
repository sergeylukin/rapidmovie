'use strict';
const fs = require('fs')
const slugify = require('slugify')
const fetch = require('node-fetch');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
const fetchMovie = async (imdbID) => {
  const result = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=c21b2407`)
  let response = result.json()
  let movie = {}
  for (let key of response) {
    switch (key) {
      case "Title": movie.title = reponse[key]; break;
      case "Year": movie.year = reponse[key]; break;
      case "Rated": movie.rated = reponse[key]; break;
      case "Released": movie.released = reponse[key]; break;
      case "Genre": movie.genre = reponse[key]; break;
      case "Director": movie.director = reponse[key]; break;
      case "Writer": movie.writer = reponse[key]; break;
      case "Actors": movie.actors = reponse[key]; break;
      case "Plot": movie.plot = reponse[key]; break;
      case "imdbRating": movie.imdbRating = reponse[key]; break;
    }
  }
  return movie
}

module.exports = {
  lifecycles: {
    // Called before an entry is created
    async beforeCreate(data) {
      if (!data.imdbID) {
        throw new Error('IMDB id should not be blank')
      }
    },
    async beforeUpdate(params, data) {
      console.log(strapi.config)
      if (!data.title) {
        const movie = fetchMovie(data.imdbID)
        console.log(movie)
        data = {...data, ...movie}
      }
      if (!data.slug) {
        data.slug = slugify(data.title, {lower: true}) + '-' + params.id;
      }
    },
    async afterCreate(model) {
      console.log(model)
      if (!model.title) {
        const movie = fetchMovie(model.imdbID)
        await strapi.query('movie').update({ id: model.id }, movie)
      }
      if (!model.slug) {
        let slug = slugify(model.title, {lower: true}) + '-' + model.id;
        await strapi.query('movie').update({ id: model.id }, { slug })
      }
    },
  },
};
