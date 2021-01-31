'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async findOne(ctx) {
    const { imdbID } = ctx.params;

    let entity = await strapi.query('movie').findOne({ imdbID });
    if (!entity) {
      if (/\w{2}\d{6,}/.test(imdbID)) {
        try {
          entity = await strapi.query('movie').create({
            imdbID,
            fetchDataFromRemote: true
          });
        } catch (err) {
          throw strapi.errors.notFound("Not found")
        }
      } else {
        throw strapi.errors.badRequest("Not found")
      }
    }
    return sanitizeEntity(entity, { model: strapi.models.movie });
  },
};
