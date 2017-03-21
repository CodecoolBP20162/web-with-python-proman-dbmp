/**
 * Created by dry on 2017. 03. 20..
 */
$(document).ready(function () {
    var $template = $("#board_template")
    var counter = 0;
    $template.hide();

    $("#adder").click(function () {
        $template.clone().attr("id", "board" + (++counter)).appendTo("#filler").show();
        $("#board" + counter + " .add_card").click(function () {
    	    var cardName = $('#board' + counter + ' input[name=card-name]').val();
            $('#board' + counter + " .card-entry").append("<p>"+cardName+"</p>");
        });
    });
});
