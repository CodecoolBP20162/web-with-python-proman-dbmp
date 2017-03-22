function CardClass(info, state, board,) {
    this.info = info;
    this.state = state;
    this.board = board;
};

function loader() {


    var retrievedObject = JSON.parse(localStorage.getItem("ObjectCollector"));


    for (var i = 0; i < retrievedObject.length; i++) {


        if (retrievedObject[i].state === "new") {
            $("#newcollector").append("<li class='dragentries'><p>" + retrievedObject[i].info + "</p></li>");

        }

        else if (retrievedObject[i].board === "in-progress") {
            $("#in-progesscollector").append("<li class='dragentries'><p>" + retrievedObject[i].info + "</p></li>");

        }

        else if (retrievedObject[i].state === "review") {
            $("#reviewcollector").append("<li class='dragentries'><p>" + retrievedObject[i].info + "</p></li>");

        }

        else if (retrievedObject[i].state === "done") {
            $("#donecollector").append("<li class='dragentries'><p>" + retrievedObject[i].info + "</p></li>");

        }

    }
}

function adder() {


    var ObjectCollector = [];

    $("#add_card").click(function () {

        var EntryObject = new CardClass($("#input-id").val(), "new", 1);

        ObjectCollector.push(EntryObject);

        var cardName = $("#input-id").val();
        $("#newcollector").append("<li class='dragentries'><p>" + cardName + "</p></li>");

        localStorage.setItem('ObjectCollector', JSON.stringify(ObjectCollector));

    });
}

function dragging() {


    $(".card-entry").sortable({
        connectWith: ".card-entry",
        revert: true,
        dropOnEmpty: true
    })
}


$(document).ready(function () {

    loader()

    adder()

    dragging()

});



