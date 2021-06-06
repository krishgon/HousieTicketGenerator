var generatedNumbers = [];

var ticketNumbers = [];


function goToGenerator() {
    window.location.href = "generator.html"
}

function genNewTicket() {
    var ticketCells = document.getElementsByClassName("closed");

    while(ticketNumbers.length<43){
        var numberOfBox = getUniqueNumber().toString();
        ticketNumbers.push(numberOfBox);
    }

    console.log("next will be the original value");
    ticketNumbers.sort()
    console.log(ticketNumbers)

    for(var i = 0, len = ticketCells.length; i < len; i++){
        var numberArea = ticketCells[i].getElementsByTagName("span")[0];
        numberArea.innerHTML = ticketNumbers[i];
    }
}

function getUniqueNumber(){
    var number = generateHousieNumber();
    
    if(generatedNumbers.length == 0){
        generatedNumbers.push(number);
    }else{
        while(generatedNumbers.includes(number)==true){
            number = generateHousieNumber();
        }
    }
    // console.log();
    return number;
    // console.log(generatedNumbers.includes(number));
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