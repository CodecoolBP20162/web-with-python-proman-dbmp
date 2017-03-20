/**
 * Created by dry on 2017. 03. 20..
 */
$(document).ready(function () {
    $("#cloner").click(function () {
        $("#duplicate").clone().appendTo("#filler:last");
    });
});
