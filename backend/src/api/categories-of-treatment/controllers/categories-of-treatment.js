"use strict";

/**
 * categories-of-treatment controller
 */

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
        query,
      );

      return this.transformResponse({
        posts: post[0].treatments,
        title: post[0].title,
      });
    },
  })
);
