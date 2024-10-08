


let inputFile = document.getElementById("input-file");
let T1 = document.getElementById("T1")
let A1 = document.getElementById("A1")
let T2 = document.getElementById("T2")
let H = document.getElementById("H")
let V = document.getElementById("V")
let A2 = document.getElementById("A2")

let mode = document.getElementById("mode");

let modeCount = 0;

mode.addEventListener("click", ()=>{
    if(modeCount%2==0){
        document.body.style.backgroundColor = "#313131";
    }else{
        document.body.style.backgroundColor = "#fff";
    }
    modeCount+=1
})

let x=122;
let y=40;

function left(){
    x-=1;
    T1.style.backgroundPositionX =x+"px";
    A1.style.backgroundPositionX =x+"px";
    T2.style.backgroundPositionX =x+"px";
    H.style.backgroundPositionX =x+"px";
    V.style.backgroundPositionX =x+"px";
    A2.style.backgroundPositionX =x+"px";
}
function right(){
    x+=1;
    T1.style.backgroundPositionX =x+"px";
    A1.style.backgroundPositionX =x+"px";
    T2.style.backgroundPositionX =x+"px";
    H.style.backgroundPositionX =x+"px";
    V.style.backgroundPositionX =x+"px";
    A2.style.backgroundPositionX =x+"px";
}
function up(){
    y-=1;
    T1.style.backgroundPositionY =y+"px";
    A1.style.backgroundPositionY =y+"px";
    T2.style.backgroundPositionY =y+"px";
    H.style.backgroundPositionY =y+"px";
    V.style.backgroundPositionY =y+"px";
    A2.style.backgroundPositionY =y+"px";
}
function down(){
    y+=1;
    T1.style.backgroundPositionY =y+"px";
    A1.style.backgroundPositionY =y+"px";
    T2.style.backgroundPositionY =y+"px";
    H.style.backgroundPositionY =y+"px";
    V.style.backgroundPositionY =y+"px";
    A2.style.backgroundPositionY =y+"px";
}




inputFile.onchange = function(){
    let url = URL.createObjectURL(inputFile.files[0]);
    T1.style.backgroundImage = "url("+url+")";
    A1.style.backgroundImage = "url("+url+")";
    T2.style.backgroundImage = "url("+url+")";
    H.style.backgroundImage = "url("+url+")";
    V.style.backgroundImage = "url("+url+")";
    A2.style.backgroundImage = "url("+url+")";
}