'use strict';

/**
 * blog-api router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blog-api.blog-api');
