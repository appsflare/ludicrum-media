/**
 * Category.js
 *
 * @description :: Model that defines the data structure of a category
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        description: {
            type: 'text',
            required: true
        },
        parent: {
            type: 'string'
        },
        medias: {
            collection: 'Media',
            via: 'category'
        }
    }
};

