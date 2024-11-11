'use strict';

/**
 * blog-api service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-api.blog-api');
