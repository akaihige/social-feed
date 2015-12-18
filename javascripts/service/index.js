'use strict';

var app = require('angular').module('socialFeedApp');

app.service('Feed', require('./api/feed'));
app.service('Circle', require('./api/circle'));
