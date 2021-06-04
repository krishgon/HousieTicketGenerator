function goToGenerator(){
    window.location.href = "generator.html"
}

function genRandomNum(){
    var x;
    x = getRandNum();
    while((x > 90) || (x == 0)){
        x = getRandNum();
    }

    document.getElementById("box").innerHTML = x;
}

function getRandNum(){
    return Math.floor(Math.random()*100);
}