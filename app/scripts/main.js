/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        RegistView: './shumi/RegistView'
    }
});

require([
    'backbone',
    'RegistView'
], function (Backbone,RegistView) {
    Backbone.history.start();
    var registView = new RegistView({el: ".snInput"});
});
