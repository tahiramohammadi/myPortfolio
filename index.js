
let skillInfo=document.querySelector('.skill-info');
let progressValue = document.querySelector('.progress-value');


let startValue=0,
endValue=100,
speed=100;

let progress=setInterval(()=>{
    startValue++
    progressValue.textContent=`${startValue}%`
    skillInfo.style.background=`conic-gradient(#ffc400 ${ startValue * 3.6}deg, #343534 0deg)`
    if(startValue==endValue){
        clearInterval(progress)
    }
},speed)