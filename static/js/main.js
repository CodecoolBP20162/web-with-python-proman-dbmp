function CardClass(CardId, CardText, CardState, CardBoard) {
    this.CardId = CardId;
    this.CardText = CardText;
    this.CardState = CardState;
    this.CardBoard = CardBoard;
}

function BoardClass(BoardId, BoardName) {
    this.BoardId = BoardId;
    this.BoardName = BoardName;
}

function Initer() {


    if (JSON.parse(localStorage.getItem("CardCollector")) === null) {

        localStorage.setItem('CardCollector', JSON.stringify([]));
    }


    if (JSON.parse(localStorage.getItem("BoardCollector")) === null) {

        localStorage.setItem('BoardCollector', JSON.stringify([]));
    }


    if (JSON.parse(localStorage.getItem("CardCounter")) === null) {

        localStorage.setItem('CardCounter', 1);
    }


    if (JSON.parse(localStorage.getItem("BoardCounter")) === null) {

        localStorage.setItem('BoardCounter', 1);
    }


}


function CardLoader() {


    let retrievedCardObject = JSON.parse(localStorage.getItem("CardCollector"));


    for (let i = 0; i < retrievedCardObject.length; i++) {


        let LoadableCardEntry = "<li class='dragentries' id='card" + retrievedCardObject[i].CardId + "\'><p>" + retrievedCardObject[i].CardText + "</p><div class='trash' id='delete" + retrievedCardObject[i].CardId + "\'></div></li>";



        if (retrievedCardObject[i].CardState === "new") {

            $("#newcollector").append(LoadableCardEntry);


        } else if (retrievedCardObject[i].CardState === "in-progress") {
            $("#in-progesscollector").append(LoadableCardEntry);

        } else if (retrievedCardObject[i].CardState === "review") {
            $("#reviewcollector").append(LoadableCardEntry);

        } else if (retrievedCardObject[i].CardState === "done") {
            $("#donecollector").append(LoadableCardEntry);

        }

    }
}

function BoardLoader() {


    let retrievedBoardObject = JSON.parse(localStorage.getItem("BoardCollector"));


    for (let i = 0; i < retrievedBoardObject.length; i++) {

        let LoadableBoardEntry = "<div class='dragentries col-lg-3 col-md-4 col-sm-6 col-xs-12'><div class='board-wrapper'> <p>" + retrievedBoardObject[i].BoardName + "</p><div class='trash' id='delete" + retrievedBoardObject[i].BoardId + "'></div></div></div>";


        $("#boardcollector").append(LoadableBoardEntry);


    }
}


function CardAdder() {

    $("#add-card").click(function () {

        CardCounter = localStorage.getItem("CardCounter");

        CardCollector = JSON.parse(localStorage.getItem("CardCollector"));

        let CardObject = new CardClass(CardCounter, $("#card-input").val(), "new", 1);

        CardCollector.push(CardObject);

        let AddableCardEntry = "<li class='dragentries' id='card" + CardObject.CardId + "\'><p>" + CardObject.CardText + "</p><div class='trash' id='delete" + CardObject.CardId + "\'></div></li>";

        $("#newcollector").append(AddableCardEntry);

        localStorage.setItem('CardCollector', JSON.stringify(CardCollector));

        localStorage.setItem('CardCounter', ++CardCounter);

    });
}


function BoardAdder() {

    $("#add-board").click(function () {

        BoardCounter = localStorage.getItem("BoardCounter");

        BoardCollector = JSON.parse(localStorage.getItem("BoardCollector"));

        let BoardObject = new BoardClass(BoardCounter, $("#board-input").val());

        BoardCollector.push(BoardObject);

        let AddableBoardEntry = "<div class='dragentries col-lg-3 col-md-4 col-sm-6 col-xs-12'><div class='board-wrapper'> <p>" + BoardObject.BoardName + "</p><div class='trash' id='delete" + BoardObject.BoardId + "'></div></div></div>";

        $("#boardcollector").append(AddableBoardEntry);

        localStorage.setItem('BoardCollector', JSON.stringify(BoardCollector));

        localStorage.setItem('BoardCounter', ++BoardCounter);
    });
}

function Dragger() {


    let oldList, newList, item;
    $('.sortable').sortable({
        start: function (event, ui) {
            item = ui.item;
            newList = oldList = ui.item.parent().parent();
        },
        change: function (event, ui) {
            if (ui.sender) newList = ui.placeholder.parent().parent();
        },
        connectWith: ".sortable"
    }).disableSelection();

}


$(document).ready(function () {

    Initer();

    Dragger();

    CardAdder();

    BoardAdder();

    CardLoader();

    BoardLoader();

});