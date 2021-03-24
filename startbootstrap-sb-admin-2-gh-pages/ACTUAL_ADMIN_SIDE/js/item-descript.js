$(document).ready(function () {
    $(".switch").on("click", function () {
        let txt = $("#status-text").text();

        if(txt === "Status Available"){
            $("#status-text").text("Status Avail");
        }
        else if(txt === "Status Avail"){
            $("#status-text").text("Status Unavailable");
        }
        else if(txt === "Status Unavailable"){
            $("#status-text").text("Status unavail");
        }
        else{
            $("#status-text").text("Status Available");
        }
    });
});

