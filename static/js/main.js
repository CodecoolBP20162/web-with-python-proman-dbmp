function CardClass(CardId, CardText, CardState, CardBoard,) {
    this.CardId = CardId;
    this.CardText = CardText;
    this.CardState = CardState;
    this.CardBoard = CardBoard;
};

function BoardClass(BoardId, BoardName,) {
    this.BoardId = BoardId;
    this.BoardName = BoardName;

};

function CardLoader() {


    var retrievedCardObject = JSON.parse(localStorage.getItem("CardCollector"));


    for (var i = 0; i < (retrievedCardObject.length); i++) {


        if (retrievedCardObject[i].CardState === "new") {
            $("#newcollector").append("<li class='dragentries'><p>" + retrievedCardObject[i].CardText  + "</p><div class='trash' id='delete" + retrievedCardObject[i].CardId +"'></div><div class='edit' id='edit" + retrievedCardObject[i].CardId +"'></div></li>");

        }

        else if (retrievedCardObject[i].CardState === "in-progress") {
            $("#in-progesscollector").append("<li class='dragentries'><p>" + retrievedCardObject[i].CardText  + "</p><div class='trash' id='delete" + retrievedCardObject[i].CardId +"'></div><div class='edit' id='edit" + retrievedCardObject[i].CardId +"'></div></li>");

        }

        else if (retrievedCardObject[i].CardState === "review") {
            $("#reviewcollector").append("<li class='dragentries'><p>" + retrievedCardObject[i].CardText  + "</p><div class='trash' id='delete" + retrievedCardObject[i].CardId +"'></div><div class='edit' id='edit" + retrievedCardObject[i].CardId +"'></div></li>");

        }

        else if (retrievedCardObject[i].CardState === "done") {
            $("#donecollector").append("<li class='dragentries'><p>" + retrievedCardObject[i].CardText  + "</p><div class='trash' id='delete" + retrievedCardObject[i].CardId +"'></div><div class='edit' id='edit" + retrievedCardObject[i].CardId +"'></div></li>");

        }

    }
}

function CardAdder() {

    var CardCounter = 1;

    var CardCollector = [];

    $("#add-card").click(function () {

        var CardObject = new CardClass(CardCounter, $("#input-id").val(), "new", 1);

        CardCollector.push(CardObject);
        
        $("#newcollector").append("<li class='dragentries'><p>" + CardObject.CardText  + "</p><div class='trash' id='delete" + CardObject.CardId +"'></div><div class='edit' id='edit" + CardObject.CardId +"'></div></li>");

        localStorage.setItem('CardCollector', JSON.stringify(CardCollector));

        CardCounter++
    });
}

function CardDragger() {


    $(".card-entry").sortable({
        connectWith: ".card-entry",
        revert: true,
        dropOnEmpty: true
    })
}


$(document).ready(function () {

    CardDragger()

    CardAdder()

    
    CardLoader()




});
