/*
 * @param {strings[]} arrayOfStrings
 * @throws throw an error if array element is non string
 * @return {strings[]}
  * */
var arrangeArray = {};
arrangeArray.arrangeDArray = function arrangeArray(arrayOfStrings){
  'use strict';
  var result = [];

  var checkArray;
  var noPArray = [];
  var pArray = [];

  checkArray = arrayOfStrings.every(function (i) {
       return typeof i === 'string';
     });

  if(checkArray && Array.isArray(arrayOfStrings)){  //checks to see if the array is only strings
    for (var i = 0; i < arrayOfStrings.length; i++) {

      if(arrayOfStrings[i].match(/^\d/)){ //chekck for all items that begin with a digit
        result.push(arrayOfStrings[i]);
      } else if(!arrayOfStrings[i].match(/^\P/) && !arrayOfStrings[i].match(/^\d/)){ //checks for all items that do not begin with a capital "P"
        noPArray.push(arrayOfStrings[i]);
      } else if(arrayOfStrings[i].match(/^\P/)){  // //checks for all items that do begin with a capital "P"
        pArray.push(arrayOfStrings[i]);
      }
    }
    result.sort();
    result.reverse();

    noPArray.sort();
    result = result.concat(noPArray);

    pArray.sort();
    pArray.reverse();
    result = result.concat(pArray);
  } else {
    throw {
      type: 'Error',
      message: 'only strings can be the element for this array'
    };
  }

    return result;

  }

  module.exports = ;
