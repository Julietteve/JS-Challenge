function setDate(){

    const secondHand= document.querySelector(".hand-sec")
    const minuteHand= document.querySelector(".hand-min")
    const hoursHand=document.querySelector(".hand-hour")
    
    const now = new Date();
    //seconds
    const seconds = now.getSeconds()
    const secondsDegree = ((seconds/60)*360)+90
    secondHand.style.transform= `rotate(${secondsDegree}deg)`
    //minutes
    const minutes = now.getMinutes()
    const minutesDegree = ((minutes/60)*360)+90
    minuteHand.style.transform=`rotate(${minutesDegree}deg)` //assign the degrees to the property
    //hours
    const hours=now.getHours()
    const hoursDegree = ((hours/12)*360)+90
    hoursHand.style.transform= `rotate(${hoursDegree}deg)`

}

setInterval(setDate, 1000)