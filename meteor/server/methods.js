'use strict';
import { check } from 'meteor/check'

Meteor.methods({
  foo: function (name, location, gps) {
    check(name, String);
    check(location, String);


    return "some return value";
  }
});
