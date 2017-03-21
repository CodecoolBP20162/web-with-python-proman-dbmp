/**
 * Created by dry on 2017. 03. 20..
 */
$(document).ready(function () {
    var $template = $("#board_template")
    var counter = 0;
    $template.hide();

    $("#adder").click(function () {
        $template.clone().attr("id", "board" + (++counter)).appendTo("#filler").show()
        $("#filler").sortable({
            connectWith: "#filler",
            revert: true,
            dropOnEmpty: true
        })
        ;

        $(".card-entry").sortable({
            connectWith: ".card-entry",
            revert: true,
            dropOnEmpty: true
        })
        $("#board" + counter + " .add_card").click(function () {
            var cardName = $('#board' + counter + ' input[name=card-name]').val();
            $('#board' + counter + " .card-entry").append("<li class='dragentries'><p>" + cardName + "</p></li>");


        });


    });

});


