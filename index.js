function next(){
    aaa = play.value ;
    bbb = p2.value;
    // document.getElementById("start").disabled = true;
    if ((aaa != "") && (bbb != "")) {
        document.getElementById("start").disabled = false;
    }
}


// start button
function start() {
    document.getElementById("start").disabled = true;
    player1.value = play.value;
    player2.value = p2.value;

    // sound effect
    var audio = new Audio('a1.wav');
    audio.play();

    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById("b4").disabled = false;
    document.getElementById("b5").disabled = false;
    document.getElementById("b6").disabled = false;
    document.getElementById("b7").disabled = false;
    document.getElementById("b8").disabled = false;
    document.getElementById("b9").disabled = false;
}
// diabled
function disabledMe1() {
    document.getElementById("b1").disabled = true;
    document.getElementById("b1").style.backgroundColor = "red";
    var audio = new Audio('a3.wav');
    audio.play();
}
function disabledMe2() {
    document.getElementById("b2").disabled = true;
    document.getElementById("b2").style.backgroundColor = "blue";
    var audio = new Audio('a2.wav');
    audio.play();
}
function disabledMe3() {
    document.getElementById("b3").disabled = true;
    document.getElementById("b3").style.backgroundColor = "yellow";
    var audio = new Audio('a3.wav');
    audio.play();
}
function disabledMe4() {
    document.getElementById("b4").disabled = true;
    document.getElementById("b4").style.backgroundColor = "pink";
    var audio = new Audio('a3.wav');
    audio.play();
}
function disabledMe5() {
    document.getElementById("b5").disabled = true;
    document.getElementById("b5").style.backgroundColor = "orangered";
    var audio = new Audio('a2.wav');
    audio.play();
}
function disabledMe6() {
    document.getElementById("b6").disabled = true;
    document.getElementById("b6").style.backgroundColor = "purple";
    var audio = new Audio('a3.wav');
    audio.play();
}
function disabledMe7() {
    document.getElementById("b7").disabled = true;
    document.getElementById("b7").style.backgroundColor = "gray";
    var audio = new Audio('a2.wav');
    audio.play();
}
function disabledMe8() {
    document.getElementById("b8").disabled = true;
    document.getElementById("b8").style.backgroundColor = "green";
    var audio = new Audio('a3.wav');
    audio.play();
}
function disabledMe9() {
    document.getElementById("b9").disabled = true;
    document.getElementById("b9").style.backgroundColor = "orangered";
    var audio = new Audio('a2.wav');
    audio.play();
}


// O/X function
let p1 = 1;
function clickme(event){
    if (p1== 1) {
        event.target.value= "X";
        p1 = 0;
        
    }else {
        event.target.value = "O";
        p1 = 1;
    }
}

pl1.value = 0;
pl2.value = 0;
// checkmate
function checkMate() {
        bb1 = b1.value;
        bb2 = b2.value;
        bb3 = b3.value;
        bb4 = b4.value;
        bb5 = b5.value;
        bb6 = b6.value;
        bb7 = b7.value;
        bb8 = b8.value;
        bb9 = b9.value;

        
        
        // player 1
        if (((bb1 == "X") && (bb2 == "X")  && (bb3 == "X"))) {
            // display_score unit
            display_score.innerText = play.value + " won";

            // then, disable the rest
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            
            pl1.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            

        } else if (((bb4 == "X") && (bb5 == "X")  && (bb6 == "X"))) {
            // display unit
            display_score.innerText = play.value + " won";

            // then, disable the rest
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;

            pl1.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            

        } else if (((bb7 == "X") && (bb8 == "X")  && (bb9 == "X"))) {
            // display unit
            display_score.innerText = play.value + " won";

            // then, disable the rest
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;

            pl1.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if (((bb1 == "X") && (bb4 == "X")  && (bb7 == "X"))) {
            // display unit
            display_score.innerText = play.value + " won";

            // then, disable the rest
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            
            pl1.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if (((bb2 == "X") && (bb5 == "X")  && (bb8 == "X"))) {
            // display unit
            display_score.innerText = play.value + " won";

            // then, disable the rest
            document.getElementById("b1").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b9").disabled = true;
            
            pl1.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if (((bb3 == "X") && (bb6 == "X")  && (bb9 == "X"))) {
            // display unit
            display_score.innerText = play.value + " won";

            // then, disable the rest
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            
            pl1.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if ((bb1 == "X") && (bb5 == "X")  && (bb9 == "X")){
            // display unit
            display_score.innerText = play.value + " won";

            // then, disable the rest
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            
            pl1.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if ((bb3 == "X") && (bb5 == "X")  && (bb7 == "X")){
            // display unit
            display_score.innerText = play.value + " won";

            // then, disable the rest
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            
            pl1.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        }
        


        // player 2
        else if (((bb1 == "O") && (bb2 == "O")  && (bb3 == "O"))) {
            // display unit
            display_score.innerText = p2.value + "  won";

            // then, disable the rest
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            
            pl2.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if (((bb4 == "O") && (bb5 == "O")  && (bb6 == "O"))) {
            // display unit
            display_score.innerText = p2.value + "  won";

            // then, disable the rest
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            
            pl2.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if (((bb7 == "O") && (bb8 == "O")  && (bb9 == "O"))) {
            // display unit
            display_score.innerText = p2.value + "  won";

            // then, disable the rest
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            
            pl2.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if (((bb1 == "O") && (bb4 == "O")  && (bb7 == "O"))) {
            // display unit
            display_score.innerText = p2.value + "  won";

            // then, disable the rest
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            
            pl2.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if (((bb2 == "O") && (bb5 == "O")  && (bb8 == "O"))) {
            // display unit
            display_score.innerText = p2.value + "  won";

            // then, disable the rest
            document.getElementById("b1").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b9").disabled = true;
            
            pl2.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if (((bb3 == "O") && (bb6 == "O")  && (bb9 == "O"))) {
            // display unit
            display_score.innerText = p2.value + "  won";

            // then, disable the rest
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;0
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            
            pl2.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if ((bb1 == "O") && (bb5 == "O")  && (bb9 == "O")){
            // display unit
            display_score.innerText = p2.value + "  won";

            // then, disable the rest
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            
            pl2.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if ((bb3 == "O") && (bb5 == "O")  && (bb7 == "O")){
            // display unit
            display_score.innerText = p2.value + "  won";

            // then, disable the rest
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            
            pl2.value ++;
            var audio = new Audio('laugh.wav');
            audio.play();

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
            
        } else if ((bb1=="X" || bb1 == "O") && (bb2=="X" || bb2 == "O")  && (bb3=="X" || bb3 == "O") && (bb4=="X" || bb4 == "O") && (bb5=="X" || bb5 == "O") && (bb6=="X" || bb6 == "O") && (bb7=="X" || bb7 == "O") && (bb8=="X" || bb8 == "O") && (bb9=="X" || bb9 == "O")){
            // display unit
            display_score.innerText = "DRAW";

            // display_container unit
            document.getElementById("display_unit").hidden = false;
            
        }
    } 


    // reset function
    function reset(){
        let empty= "";
        b1.value= empty;
        b2.value= empty;
        b3.value= empty;
        b4.value= empty;
        b5.value= empty;
        b6.value= empty;
        b7.value= empty;
        b8.value= empty;
        b9.value= empty;

        // sound effect
        var audio = new Audio('a1.wav');
        audio.play();

        document.getElementById("b1").style.backgroundColor = "transparent";
        document.getElementById("b2").style.backgroundColor = "transparent";
        document.getElementById("b3").style.backgroundColor = "transparent";
        document.getElementById("b4").style.backgroundColor = "transparent";
        document.getElementById("b5").style.backgroundColor = "transparent";
        document.getElementById("b6").style.backgroundColor = "transparent";
        document.getElementById("b7").style.backgroundColor = "transparent";
        document.getElementById("b8").style.backgroundColor = "transparent";
        document.getElementById("b9").style.backgroundColor = "transparent";
        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = false;
        document.getElementById("b3").disabled = false;
        document.getElementById("b4").disabled = false;
        document.getElementById("b5").disabled = false;
        document.getElementById("b6").disabled = false;
        document.getElementById("b7").disabled = false;
        document.getElementById("b8").disabled = false;
        document.getElementById("b9").disabled = false;

        // display unit
        document.getElementById("display_unit").hidden = true;
    } 