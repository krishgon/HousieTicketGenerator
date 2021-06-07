window.onload = function() {
    genNewTicket();
};


function goToGenerator() {
    window.location.href = "generator.html"
}

function genNewTicket() {
    var ticketCells = document.getElementsByClassName("closed");
    var ticketNumbers = getNumberList();

    // console.log("next will be the original value");
    ticketNumbers.sort((a,b)=>a-b);
    console.log(ticketNumbers);

    for(var i = 0, len = ticketCells.length; i < len; i++){
        var numberArea = ticketCells[i].getElementsByTagName("span")[0];
        numberArea.innerHTML = ticketNumbers[i];
    }
}

function getNumberList(){
    var generatedNumbers = [];

    while(generatedNumbers.length<43){
        var number = generateHousieNumber();

        if(generatedNumbers.length == 0){
            generatedNumbers.push(number);
        }else{
            while(generatedNumbers.includes(number)==true){
                number = generateHousieNumber();
            }
            generatedNumbers.push(number);
        }
    }
    // console.log(generatedNumbers);
    return generatedNumbers;
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


var counter = 0;
var quantity = 0;

function getDownloadableTickets(){
    quantity = parseInt(prompt("Kitni टिकट chahie ?", "50"));
    if((quantity != null) && (quantity!="0")){
        counter = 0;
        downloadTicket();
    }
}

function downloadTicket(){
    counter = counter + 1;

    console.log("the value of counter is " + counter);
    console.log("the value of quantity is " + quantity);
    
    if(counter < quantity+1){
        genNewTicket();
        var node = document.getElementById("ticketContainer");

        domtoimage.toPng(node, {bgcolor: "#46535e"})
            .then(function(dataUrl){
                var img = new Image();
                img.src = dataUrl;
                downloadURI(dataUrl, "ticket.png")
            }).catch(function(error){
                console.error("daya, kuch toh gadbad hai", error);
            });
    }
}


function downloadURI(uri, name){
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
    console.log("downloaded")
    downloadTicket();
}



