'use strict';

jest.dontMock('../main/hello-world');

describe('HelloWorld', function() {

  var HelloWorld;

  beforeEach(function() {
    HelloWorld = require('../main/hello-world');
  });

  it('demo test', function() {
    expect('Hello World').toEqual('Hello World');
  });

  it('should be mock', function() {

    var helloWorld = new HelloWorld();

    helloWorld.beenCalled = jest.genMockFunction();
    helloWorld.beenCalled.mockReturnValue('Hello World');

    expect(helloWorld.beenCalled()).toEqual('Hello World');
  });
});
