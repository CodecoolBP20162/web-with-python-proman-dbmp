function CardClass(CardId, CardText, CardState, CardBoard) {
    this.CardId = CardId;
    this.CardText = CardText;
    this.CardState = CardState;
    this.CardBoard = CardBoard;
}

function CardAdderDatabase(json) {
    var cardObjectString;
    $("#add-card").click(function () {
        if (json.length === 0) {
            CardCounter = "1"
        }
        else {CardCounter = ++json[json.length - 1]["CardId"];}
        console.log(CardCounter);

        var CardObject = new CardClass(CardCounter, $("#card-input").val(), "new", 1);
        var AddableCardEntry = "<li class='dragentries' id='card" + CardObject.CardId + "\'><p>" + CardObject.CardText + "</p><div class='' id='delete" + CardObject.CardId + "\'></div></li>";

        $("#newcollector").append(AddableCardEntry);

        cardObjectString = JSON.stringify(CardObject);
        console.log(cardObjectString);
        PostJson('/card/postjson', cardObjectString);
    });
}

function CardLoaderDatabase(json) {
    var retrievedCardObject = json;

    for (var i = 0; i < retrievedCardObject.length; i++) {
        var LoadableCardEntry = "<li class='dragentries' id='card" + retrievedCardObject[i].CardId + "\'><p>" +
            retrievedCardObject[i].CardText + "</p><div class='' id='delete" + retrievedCardObject[i].CardId +
            "\'></div></li>";

        if (retrievedCardObject[i].CardState === "new") {
            $("#newcollector").append(LoadableCardEntry);
        } else if (retrievedCardObject[i].CardState === "in-progress") {
            $("#in-progresscollector").append(LoadableCardEntry);
        } else if (retrievedCardObject[i].CardState === "review") {
            $("#reviewcollector").append(LoadableCardEntry);
        } else if (retrievedCardObject[i].CardState === "done") {
            $("#donecollector").append(LoadableCardEntry);
        }
    }
}

function Dragger() {
    var oldList, newList, item;
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

function GetJson (url) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            console.log(data);
            // PostJson("/card/postjson", data);
            CardAdderDatabase(data);
            CardLoaderDatabase(data);
            Dragger();
        }
    });
}

function PostJson (url, json) {
    $.ajax({
        url: url,
        method: 'POST',
        data: json,
        success: function (data) {
            // console.log(data);
        }
    });
}

$(document).ready(function () {
    GetJson("/card/getjson");
});
