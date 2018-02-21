var assert = require("assert"); // core module
var array = require('../Javascript_Test/JavascriptQ');  // our module

describe('arrangeArray', function(){
  describe('Tests', function(){

    it('Check: sorting in descending in alphabetical order (elements are mixture of strings containing digits and special character)', function(){
      defaultArray = ['7--12', '007', '22zz'];
      assert.deepEqual(array.arrangeDArray(defaultArray), ["7--12", "22zz", "007"]);

    });

    it('Check: sorting in descending in alphabetical order (all elements are numbers as string)', function() {
   	    defaultArray = ['1', '2', '3','4'];
        assert.deepEqual(array.arrangeDArray(defaultArray), ['4','3', '2', '1']);
   		});

    it('Check: sorting in alphabetical order (elements do not start with upper case P)',function () {
        defaultArray = ['john', 'bob', 'tom'];
        assert.deepEqual(array.arrangeDArray(defaultArray), ['bob', 'john', 'tom']);
      });

    it('Check: sorting in descending alphabetical order (elements start with upper case P)',function () {
        defaultArray = ['Piano', 'Pig', 'Pong'];
        assert.deepEqual(array.arrangeDArray(defaultArray), ['Pong','Pig','Piano']);
      });

    it('Check: sorting the array of strings of the given sample test case (numbers-descending, upper case P- descending, not uppercase P - ascending)',function () {
        defaultArray = ['blah', 'param', '12dh', '-fdjskl', '8-4', 'Peter', '66', 'Pan'];
        assert.deepEqual(array.arrangeDArray(defaultArray), [ '8-4', '66', '12dh', '-fdjskl', 'blah', 'param', 'Peter', 'Pan' ]);
         });

  })
});
