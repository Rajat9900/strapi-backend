'use strict';

/**
 * blog-api controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-api.blog-api');
