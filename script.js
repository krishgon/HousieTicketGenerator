function goToGenerator() {
    window.location.href = "generator.html"
}

function genNewTicket() {
    var ticketCells = document.getElementsByClassName("closed");
    for(var i = 0, len = ticketCells.length; i < len; i++){
        var cellNumber = ticketCells[i].getElementsByTagName("span")[0];
        cellNumber.innerHTML = generateHousieNumber();
    }
}

function generateHousieNumber() {
    var x;
    x = getRandNum();
    while ((x > 90) || (x == 0)) {
        x = getRandNum();
    }

    return x;
}

function getRandNum() {
    return Math.floor(Math.random() * 100);
}