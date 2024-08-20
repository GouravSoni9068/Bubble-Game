
let pbtm=document.querySelector("#pbtm")
let clutter=""
for(var i=0;i<152;i++)
{
    let ran=Math.floor(Math.random()*10)
    clutter+=`<div id="bubble">${ran}</div>`
} 
pbtm.innerHTML=clutter