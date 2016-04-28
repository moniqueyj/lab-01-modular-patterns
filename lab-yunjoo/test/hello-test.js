'use strict';
const greet = require(__dirname + '/../lib/greet');
const assert = require('assert');
describe('testing module lib/greet.js',function(){
  describe('testing function greet()',function(){
    it('should return "Hello yunjoo"', function(){
      assert.equal(greet(), 'Hello yunjoo'); 
    });
  });
});
