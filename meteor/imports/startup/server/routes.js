'use strict';
import {
    moment
} from 'meteor/momentjs:moment';
import {
    database
} from '../../api/data/index.js';

Router.route('/api', {
        where: 'server'
    })
    .post(function() {
        database.set(this.request.body);
        this.response.end('post acepted\n');
    });

Router.route('/api/data', {
        where: 'server'
    })
    .get(function() {
        this.response.end(database.get(100));
    });

Router.route('/api/data/:id', {
        where: 'server'
    })
    .get(function() {
        this.response.end(database.get(100, this.params.id));
    });

Router.route('/api/status', {
        where: 'server'
    })
    .get(function() {
        this.response.statusCode = 200;
        this.response.setHeader("Content-Type", "text/html; charset=utf-8");
        this.response.setHeader("Content-Length", database.getStatus().length);
        this.response.setHeader("Access-Control-Allow-Origin", "*");
        this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        this.response.end(database.getStatus());
    });
