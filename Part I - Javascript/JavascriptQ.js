/*
 * @param {strings[]} arrayOfStrings
 * @throws throw an error if array element is non string or not a string array
 * @return {strings[]}
  * */
  function arrangeArray(arrayOfStrings){
    var result = [];

    var pArray = [];
    var checkArray = [];
    var noPArray = [];
    var checkArray;
    //checks to see if the input is an array
  if(Array.isArray(arrayOfStrings)){
      //Checks to see if the arary is of only strings
    checkArray = arrayOfStrings.every(
      function (i) {
         return typeof i === 'string';
       });
  }else{
    throw {
        type: 'Error',
        message: 'Input must be an string array'
      };
  }

    if(checkArray){  //checks to see if the array is only strings
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
          message: 'Only string arrays can be inputed'
        };
    }

      return result;

    }
