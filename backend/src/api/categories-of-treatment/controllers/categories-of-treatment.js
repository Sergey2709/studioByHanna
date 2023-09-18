"use strict";

/**
 * categories-of-treatment controller
 */

const { sanitize } = require("@strapi/utils");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::categories-of-treatment.categories-of-treatment",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const post = await strapi.entityService.findMany(
        "api::categories-of-treatment.categories-of-treatment",
        query
      );
      const { meta } = await super.find(ctx);
      const schema = strapi.getModel(
        "api::categories-of-treatment.categories-of-treatment"
      );
      const sanitizedEntity = await sanitize.contentAPI.output(post, schema);

      return this.transformResponse(sanitizedEntity[0], meta);
    },
  })
);
