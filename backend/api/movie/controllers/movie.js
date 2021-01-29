'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async findOne(ctx) {
    const { imdbID } = ctx.params;

    let entity = await strapi.query('movie').findOne({ imdbID });
    if (!entity) {
      if (/(ch|co|ev|nm|tt)\d{6,}/.test(imdbID)) {
        entity = await strapi.query('movie').create({
          imdbID,
          fetchDataFromRemote: true
        });
        console.log('loaded via API')
        console.log(entity)
      } else {
        throw strapi.errors.badRequest("Not found")
      }
    } else {
        console.log('loaded from DB')
    }
    return sanitizeEntity(entity, { model: strapi.models.movie });
  },
};
