const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


const btn = document.getElementById("btn");

const color = document.querySelector('.color');

btn.addEventListener('click',()=>{
    let hexColor = '#';

    for(let a=0;a<6;a++){
        let ran=Math.floor(Math.random()*hex.length);
        hexColor+=hex[ran];
    }

    color.innerHTML=hexColor;
    document.body.style.backgroundColor = hexColor

})