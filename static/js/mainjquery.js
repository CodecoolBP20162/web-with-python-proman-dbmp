/**
 * Created by dry on 2017. 03. 20..
 */
$(document).ready(function () {

    $("#add_card").click(function () {

        var cardName = $("#input-id").val();
        $("#newcollector").append("<li class='dragentries'><p>" + cardName + "</p></li>");

    });


     $(".card-entry").sortable({connectWith: ".card-entry", revert: true, dropOnEmpty: true})

});


