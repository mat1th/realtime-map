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

Router.route('/api/status', {
        where: 'server'
    })
    .get(function() {
        this.response.end(database.getStatus());
    });
