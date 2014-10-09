'use strict';

function HelloWorld() {

}

HelloWorld.prototype.beenCalled = function() {
  return 'Leave me alone.';
};

exports.HelloWorld = HelloWorld;
