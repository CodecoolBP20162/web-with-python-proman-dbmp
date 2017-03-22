function CardClass (info, state, board,) {
    this.info = info;
    this.state = state;
    this.board = board;
    };

$(document).ready(function () {

    var ObjectCollector = [];
    $("#add_card").click(function () {

        var EntryObject = new CardClass($("#input-id").val(), "new", 1);

        ObjectCollector.push(EntryObject);

        var cardName = $("#input-id").val();
        $("#newcollector").append("<li class='dragentries'><p>" + cardName + "</p></li>");

        localStorage.setItem('ObjectCollector', JSON.stringify(ObjectCollector));

    });


     $(".card-entry").sortable({connectWith: ".card-entry", revert: true, dropOnEmpty: true})

});


