const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const stat1 = document.getElementById("statistic1");
const stat2 = document.getElementById("statistic2");
const stat3 = document.getElementById("statistic3");
const cube = document.getElementById("cube");
var img = ["img/kostka1.png" , "img/kostka2.png", "img/kostka3.png", "img/kostka4.png", "img/kostka5.png", "img/kostka6.png"];
var i = 0;
var hod;
var hody = [];
//let prumer = prumer();

function randomNumber(min = 0, max = 6) {
    return Math.ceil(Math.random()*(max - min)+min);
}

btn2.addEventListener("click",function(){
    hod = 0;
    hody = [];
    statistic();
    console.log(prumer);
});

btn1.addEventListener('click', function(){
    hod = randomNumber();
    hody.push(hod);
    cube.src = img[hod - 1];
    statistic(maximum(), minimum());
});
function maximum(){
    let max = 1 
    hody.forEach(function (value){
        if(value > max) max = value;
    });
    return max;
}
function minimum(){
    let min = 6;
    hody.forEach(function (value){
        if(value < min) min = value;
    });
    return min;
}
function suma(){
    let sum = 0;
    for(let i = 0; i < hody.length; i++){
    sum += hody[i];}
    return sum;
}
function prumer(){ 
    if(hody.length > 0){
        return suma() / hody.length;
    }else {
        return 0;
    }
}

function statistic(max = 0, min = 0) {
    stat1.innerHTML = `<p>Posledni hod: ${hod}</p>`;
    stat1.innerHTML += `<p>Počet hodů: ${hody.length}</p>`;
    stat2.innerHTML = `<p>Součet: ${suma()}</p>`;
    stat2.innerHTML += `<p>Průměr: ${prumer().toFixed(2)}</p>`;
    stat3.innerHTML = `<p>Maximum: ${max}</p>`;
    stat3.innerHTML += `<p>Minimum: ${min} </p>`;
}