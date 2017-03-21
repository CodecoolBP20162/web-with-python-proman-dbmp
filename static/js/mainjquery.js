/**
 * Created by dry on 2017. 03. 20..
 */
$(document).ready(function () {
    var boardcard = '<div class="col-lg-3 col-md-4 col-xs-12 board"><p>Helloodasdad</p><button>save</button></div>';


    $("#adder").click(function () {
        $("#filler").append(boardcard);
    });
});



var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));