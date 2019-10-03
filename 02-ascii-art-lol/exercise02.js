/**
 * The code below adds an image to the page, sorta.
 * That image doesn't look right on the page.
 *
 * Look at the code in scramble.js and use your knowledge
 * of arrays to rebuild the array before writeAscii() 
 * is called.
 */

(function() {


    //your code here
    let orig = document.querySelector('#dolla-bill');
    let linesArray = orig.innerHTML.split('\n');
    orig.innerHTML = '';
    let yeahArray = [];
     //loop through the linesArray and prepend lol 40x to each line
  //before adding to the new line yeahArray
  for(let i=0; i < linesArray.length; i++){
    yeahArray.push(linesArray[i], 'lol'.repeat(40));
  }

  //turn the yeahArray back into a string using the join() function using
  //the newline character (\n) as the glue and inster it into the element with the
  //id of fixed
  document.querySelector('#fixed').innerHTML = yeahArray.join('\n');

  //make artArray and writeAscii availble to the exercise02.js script
  window.artArray = yeahArray;
  window.writeAscii = writeAscii;
  
  //function we use in exercise02.js to display our ascii art
  function writeAscii(arr) {
    document.querySelector('#fixed').innerHTML = arr.join('\n');
  }


    writeAscii(artArray);

})();


