function goToGenerator() {
    window.location.href = "generator.html"
}

function genNewTicket() {
    var table = document.getElementById("ticket");

    for (let row of table.rows) {
        for (let cell of row.cells) {
            cell.innerText = generateHousieNumber();
        }
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