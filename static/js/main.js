function CardClass(id, text, state, board,) {
    this.id = id;
    this.text = text;
    this.state = state;
    this.board = board;
};

function loader() {


    var retrievedObject = JSON.parse(localStorage.getItem("ObjectCollector"));


    for (var i = 0; i < retrievedObject.length; i++) {


        if (retrievedObject[i].state === "new") {
            $("#newcollector").append("<li class='dragentries'><p>" + retrievedObject[i].text  + "</p><div class='trash' id='delete" + retrievedObject[i].id +"'></div><div class='edit' id='edit" + retrievedObject[i].id +"'></div></li>");

        }

        else if (retrievedObject[i].board === "in-progress") {
            $("#in-progesscollector").append("<li class='dragentries'><p>" + retrievedObject[i].text  + "</p><div class='trash' id='delete" + retrievedObject[i].id +"'></div><div class='edit' id='edit" + retrievedObject[i].id +"'></div></li>");

        }

        else if (retrievedObject[i].state === "review") {
            $("#reviewcollector").append("<li class='dragentries'><p>" + retrievedObject[i].text  + "</p><div class='trash' id='delete" + retrievedObject[i].id +"'></div><div class='edit' id='edit" + retrievedObject[i].id +"'></div></li>");

        }

        else if (retrievedObject[i].state === "done") {
            $("#donecollector").append("<li class='dragentries'><p>" + retrievedObject[i].text  + "</p><div class='trash' id='delete" + retrievedObject[i].id +"'></div><div class='edit' id='edit" + retrievedObject[i].id +"'></div></li>");

        }

    }
}

function adder() {

    var counter = 1;

    var ObjectCollector = [];

    $("#add_card").click(function () {

        var EntryObject = new CardClass(counter, $("#input-id").val(), "new", 1);

        ObjectCollector.push(EntryObject);
        
        $("#newcollector").append("<li class='dragentries'><p>" + EntryObject.text  + "</p><div class='trash' id='delete" + EntryObject.id +"'></div><div class='edit' id='edit" + EntryObject.id +"'></div></li>");

        localStorage.setItem('ObjectCollector', JSON.stringify(ObjectCollector));

        counter++
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
