/**
 * Created by dry on 2017. 03. 20..
 */
$(document).ready(function () {
    var boardcard = '<div class="col-lg-3 col-md-4 col-xs-12 board"><p>Helloodasdad</p><button>save</button></div>';


    $("#adder").click(function () {
        $("#filler").append(boardcard);
    });
});



