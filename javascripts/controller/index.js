'use strict';

var app = require('angular').module('socialFeedApp');

app.controller('globalController', require('./global'));
app.controller('mainController', require('./main'));
app.controller('feedController', require('./feed/feed.js'));
app.controller('friendsController', require('./friends/friends.js'));
