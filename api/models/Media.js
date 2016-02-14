/**
 * Media.js
 *
 * @description :: Model for persisting extra Media information like category it falls under, description,
 * actual file stored in "Files" collection, who created it, who updated it, comments made, likes etc
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        title: {
            type: 'string',
            unique: true
        },
        type: {
            type: 'string',
            defaultsTo: 'video'
        },
        mediaId: {
            type: 'string',
            required: true,
            unique: true
        },
        status: {
            type: 'string',
            enum: ['draft', 'published', 'unpublished', 'deleted'],
            required: true,
            defaultsTo: 'draft'
        },
        description: {
            type: 'text',
            required: true
        },
        category: {
            model: 'Category',
            required: true
        },
        file: {
            type: 'string',
            required: true
        }
    }
};

