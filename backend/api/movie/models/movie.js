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
  let response = await result.json()
  let movie = {}
  for (let key in response) {
    if (!response.hasOwnProperty(key)) continue;
    switch (key) {
      case "Title": movie.title = response[key]; break;
      case "Year": movie.year = parseInt(response[key], 10); break;
      case "Rated": movie.rated = response[key]; break;
      case "Released": movie.released = response[key]; break;
      case "Runtime": movie.runtime = response[key]; break;
      case "Genre": movie.genre = response[key]; break;
      case "Director": movie.director = response[key]; break;
      case "Writer": movie.writer = response[key]; break;
      case "Actors": movie.actors = response[key]; break;
      case "Plot": movie.plot = response[key]; break;
      case "imdbRating": movie.imdbRating = parseFloat(response[key]); break;
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
      const model = await strapi.query('movie').findOne({ id: params.id });
      if (data.fetchDataFromRemote) {
        const movie = await fetchMovie(data.imdbID)
        console.log(movie)
        for (let key in movie) {
          data[key] = movie[key]
        }
        data.fetchDataFromRemote = false
      }
      if (!model.slug) {
        const title = data.title ? data.title : model.title
        if (title) {
          data.slug = slugify(title, {lower: true}) + '-' + params.id;
        }
      }
    },
    async afterCreate(model) {
      if (model.fetchDataFromRemote) {
        const movie = fetchMovie(model.imdbID)
        movie.fetchDataFromRemote = false
        await strapi.query('movie').update({ id: model.id }, movie)
      }
      if (!model.slug) {
        let slug = slugify(model.title, {lower: true}) + '-' + model.id;
        await strapi.query('movie').update({ id: model.id }, { slug })
      }
    },
  },
};
