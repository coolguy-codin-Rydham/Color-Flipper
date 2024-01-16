const colors = ["green", "red", "rgba(133,122,200)","#f15025","#f1f5f8"];

const btn=document.getElementById('btn');

const color=document.querySelector(".color");

btn.addEventListener('click',()=>{
    // Get a random Number between 0-4 
    const randomNumber=getRandom();

    document.body.style.backgroundColor = colors[randomNumber];
    color.innerHTML=colors[randomNumber];


})


const getRandom = ()=>{
    return Math.floor(Math.random()*colors.length);
}