
document.body.style.backgroundColor = "#ffffff";

function changeColor(){

    let y = "#";
    let colorChange = Math.random().toString(16).substring(2,8);
    y += colorChange;
    console.log(y)
    document.getElementById("backgroundChange").style.backgroundColor = y;
    document.getElementById("colorCode").innerHTML = y;
}
