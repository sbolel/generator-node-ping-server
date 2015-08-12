'use strict';

var debug = require('debug')('firebase-admin'),
    Firebase = require('firebase'),
    FirebaseTokenGenerator = require('firebase-token-generator'),
    Q = require('q'),
    Events = require('events'),
    emitter = new Events.EventEmitter(),
    _FIREBASE_URL = process.env.FIREBASE_URL,
    _FIREBASE_TOKEN = process.env.FIREBASE_SECRET,
    _FIREBASE_REF = new Firebase(_FIREBASE_URL);

var setup = {
  admin: function() {
    return authenticateTrustedServer();
  }
};

module.exports = {
  firebase: {
    url: _FIREBASE_URL,
    ref: _FIREBASE_REF
  },
  init: initialize
};

function initialize() {
  debug("Connecting to Firebase: "+_FIREBASE_URL);
  var promises = [];
  promises.push(setup.admin());
  Q.all(promises).then(function(){
    debug("FIREBASE READY");
    emitter.emit('firebaseReady');
  });
}

function authenticateTrustedServer(){
  var deferred = Q.defer();
  _FIREBASE_REF.authWithCustomToken(_FIREBASE_TOKEN, function(error, authData) {
    if (error) {
      debug("Auth " + _FIREBASE_URL + " error:", error);
      deferred.reject(error);
    } else {
      debug("Auth " + _FIREBASE_URL + " successful.");
      deferred.resolve(authData);
    }
  });
  return deferred.promise;
}
