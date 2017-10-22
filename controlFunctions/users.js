'use strict';

module.exports = function(_) {
    return {
        SetRouting: function(router) {
            router.get('/', this.IndexScreen);

        },

        IndexScreen: function(req, res) {
            return res.render('index', { test: 'This is a test' });
        }
    }
}