function makeBubble()
{
    let pbtm=document.querySelector("#pbtm")
    let clutter=""
    for(var i=0;i<152;i++)
    {
        let ran=Math.floor(Math.random()*10)
        clutter+=`<div id="bubble">${ran}</div>`
    } 
    pbtm.innerHTML=clutter
}
let timer=60
function runTimer()
{
    let timerValue=document.querySelector("#TimerVal")
    
    let interval=setInterval(() => {
        if(timer>0)
        {
            timer--;
            timerValue.innerHTML=timer;
        }
        else{
            clearInterval(interval)
            console.log('stop');
            let btmpnl=document.querySelector("#pbtm")
            btmpnl.innerHTML=`
                <h2>Game Over </h2>
                <div class="colorBlack">Your Score is ${document.querySelector("#scoreVal").innerHTML}</div>
            `
            
            
        }
    }, 1000);
}
function getNewHit()
{
    let ran=Math.floor(Math.random()*10)
    document.querySelector("#hitVal").innerHTML=ran
}

score=0
function increaseScore()
{
    score+=10;
    document.querySelector("#scoreVal").innerHTML=score
}

document.querySelector("#pbtm").addEventListener("click",(e)=>{
    if(timer>0)
    {
        let hitValue=document.querySelector("#hitVal").innerHTML
        if(e.target.innerHTML===hitValue)
        {
            increaseScore()
            getNewHit()
            makeBubble()

        }
    }
    
})

makeBubble()
runTimer();
getNewHit()
