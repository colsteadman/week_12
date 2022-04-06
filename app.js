let userNum = document.getElementById("input");
userNum.addEventListener("keydown", function (e){
    if(e.keyCode == 13) {
        run(e)
    }
})


userNum.focus()

let count = 0

function run(){
compare()
}

function randnum(){
    let ran = Math.floor(Math.random() * 10) + 1;
    return ran
}

function usernum(){
    let user = document.getElementById("input").value ;
    return user
}

function compare(){
    a = randnum()
    b = usernum()

    if(a != b){
        document.getElementById("compare").innerHTML = `The numbers are not the same. the computer guessed ${a} and you guessed ${b}`
        document.getElementById("compare").style.backgroundColor = "#c23434";
        count++;
        document.getElementById("counter").innerHTML = `you have tried ${count} times`
    } else if(a == b){
        document.getElementById("compare").innerHTML = `The numbers are the same. the computer guessed ${a} and you guessed ${b}`
        document.getElementById("compare").style.backgroundColor = "#32a852";
        document.getElementById("counter").innerHTML = `you have tried ${count} times to get it right`
        count = 0;
    }
    resetinput()
}

function resetinput(){
    document.getElementById("input").value = ""
}

