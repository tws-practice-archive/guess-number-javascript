'use strict'

var HelloWorld = require('../main/hello-world')

describe('HelloWorld', function() {

  it('demo test', function() {
    expect('Hello World').toEqual('Hello World')
  })

  it('should be mock', function() {

    var helloWorld = new HelloWorld()

    helloWorld.beenCalled.mockReturnValue('Hello World')

    expect(helloWorld.beenCalled()).toEqual('Hello World')
  })
})
