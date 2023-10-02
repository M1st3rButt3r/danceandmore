'use strict';

/**
 * show-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::show-page.show-page');
