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

function CardLoader() {
    let retrievedCardObject = JSON.parse(localStorage.getItem("CardCollector"));

    for (let i = 0; i < retrievedCardObject.length; i++) {
        let AppendableEntry = "<li class='dragentries'><p>" + retrievedCardObject[i].CardText + "</p><div class='trash' id='delete" + retrievedCardObject[i].CardId + "'></div><div class='edit' id='edit" + retrievedCardObject[i].CardId + "'></div></li>";

        if (retrievedCardObject[i].CardState === "new") {
            $("#newcollector").append(AppendableEntry);
        }

        else if (retrievedCardObject[i].CardState === "in-progress") {
            $("#in-progesscollector").append(AppendableEntry);
        }

        else if (retrievedCardObject[i].CardState === "review") {
            $("#reviewcollector").append(AppendableEntry);
        }

        else if (retrievedCardObject[i].CardState === "done") {
            $("#donecollector").append(AppendableEntry);
        }
    }
}

function CardAdder() {
    let CardCounter = 1;
    let CardCollector = [];

    $("#add-card").click(function () {
        let CardObject = new CardClass(CardCounter, $("#card-input").val(), "new", 1);
        CardCollector.push(CardObject);

        $("#newcollector").append("<li class='dragentries'><p>" + CardObject.CardText + "</p><div class='trash' id='delete" + CardObject.CardId + "'></div><div class='edit' id='edit" + CardObject.CardId + "'></div></li>");
        localStorage.setItem('CardCollector', JSON.stringify(CardCollector));
        CardCounter++;
    });
}

function CardDragger() {
    $(".card-entry").sortable({
        connectWith: ".card-entry",
        revert: true,
        dropOnEmpty: true
    })
}

function BoardAdder() {
    let BoardCounter = 1;
    let BoardCollector = [];

    $("#add-board").click(function () {
        let BoardObject = new BoardClass(BoardCounter, $("#board-input").val());
        BoardCollector.push(BoardObject);
        let AddableEntry = "<div class='dragentries col-lg-3 col-md-4 col-sm-6 col-xs-12'><div class='board-wrapper'> <p>" + BoardObject.BoardName + "</p><div class='trash' id='delete" + BoardObject.BoardId + "'></div><div class='edit' id='edit" + BoardObject.BoardId + "'></div></div></div>";

        $("#boardcollector").append(AddableEntry);
        localStorage.setItem('BoardCollector', JSON.stringify(BoardCollector));
        BoardCounter++;
    });
}

function BoardDragger() {
    $(".board-entry").sortable({
        connectWith: ".card-entry",
        revert: true,
        dropOnEmpty: true
    })
}


$(document).ready(function () {
    CardDragger();
    BoardDragger();
    CardAdder();
    BoardAdder();
    CardLoader();
});
