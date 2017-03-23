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

function LocalCardStorageInit() {

    if (JSON.parse(localStorage.getItem("CardCollector")) === null) {

        localStorage.setItem('CardCollector', JSON.stringify([]));
    }
}

function LocalBoardStorageInit() {

    if (JSON.parse(localStorage.getItem("BoardCollector")) === null) {

        localStorage.setItem('BoardCollector', JSON.stringify([]));
    }
}

function CardLoader() {


    let retrievedCardObject = JSON.parse(localStorage.getItem("CardCollector"));


    for (let i = 0; i < retrievedCardObject.length; i++) {

        let LoadableCardEntry = "<li class='dragentries material'><p>" + retrievedCardObject[i].CardText + "</p><div class='trash' id='delete" + retrievedCardObject[i].CardId + "'></div><div class='edit' id='edit" + retrievedCardObject[i].CardId + "'></div></li>";


        if (retrievedCardObject[i].CardState === "new") {

            $("#newcollector").append(LoadableCardEntry);


        }

        else if (retrievedCardObject[i].CardState === "in-progress") {
            $("#in-progesscollector").append(LoadableCardEntry);

        }

        else if (retrievedCardObject[i].CardState === "review") {
            $("#reviewcollector").append(LoadableCardEntry);

        }

        else if (retrievedCardObject[i].CardState === "done") {
            $("#donecollector").append(LoadableCardEntry);

        }

    }
}

function BoardLoader() {


    let retrievedBoardObject = JSON.parse(localStorage.getItem("BoardCollector"));


    for (let i = 0; i < retrievedBoardObject.length; i++) {

        let LoadableBoardEntry = "<div class='dragentries col-lg-3 col-md-4 col-sm-6 col-xs-12'><div class='board-wrapper'> <p>" + retrievedBoardObject[i].BoardName + "</p><div class='trash' id='delete" + retrievedBoardObject[i].BoardId + "'></div><div class='edit' id='edit" + retrievedBoardObject[i].BoardId + "'></div></div></div>";


        $("#boardcollector").append(LoadableBoardEntry);


    }
}


function CardAdder() {

    let CardCounter = 1;


    let CardCollector = JSON.parse(localStorage.getItem("CardCollector"));


    $("#add-card").click(function () {

        let CardObject = new CardClass(CardCounter, $("#card-input").val(), "new", 1);

        CardCollector.push(CardObject);

        let AddableCardEntry = "<li class='dragentries'><p>" + CardObject.CardText + "</p><div class='trash' id='delete" + CardObject.CardId + "'></div><div class='edit' id='edit" + CardObject.CardId + "'></div></li>"

        $("#newcollector").append(AddableCardEntry);

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


function BoardAdder() {

    let BoardCounter = 1;

    let BoardCollector = JSON.parse(localStorage.getItem("BoardCollector"));

    $("#add-board").click(function () {

        let BoardObject = new BoardClass(BoardCounter, $("#board-input").val());

        BoardCollector.push(BoardObject);

        let AddableBoardEntry = "<div class='dragentries col-lg-3 col-md-4 col-sm-6 col-xs-12'><div class='board-wrapper'> <p>" + BoardObject.BoardName + "</p><div class='trash' id='delete" + BoardObject.BoardId + "'></div><div class='edit' id='edit" + BoardObject.BoardId + "'></div></div></div>";

        $("#boardcollector").append(AddableBoardEntry);

        localStorage.setItem('BoardCollector', JSON.stringify(BoardCollector));

        BoardCounter++
    });
}

function BoardDragger() {

    $(".board-entry").sortable({
        connectWith: ".card-entry",
        revert: true,
        dropOnEmpty: true
    })
}


/*
 function CardEdit {
 var text = $(this).html();
 var length = text.length;
 var editableText = $("<textarea />");
 editableText.val(text);
 $(this).replaceWith(editableText);
 editableText.focus();
 editableText.blur(editableTextBlurred);
 }

 function editableTextBlurred() {
 var html = $(this).val();
 var viewableText = $("<div>");
 viewableText.html(html);
 $(this).replaceWith(viewableText);
 $(viewableText).click(divClicked);
 }

 $('#x').live('click', divClicked);

 */


$(document).ready(function () {

    LocalCardStorageInit();

    LocalBoardStorageInit();

    CardDragger();

    BoardDragger();

    CardAdder();

    BoardAdder();

    CardLoader();

    BoardLoader();

});
