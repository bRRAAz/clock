function clock()
{
    var date = new Date()
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var h = String(hours).length === 1? `0${hours}`: hours;
    var m = String(min).length === 1? `0${min}`: min;
    var s = String(sec).length === 1? `0${sec}`: sec;

    var num = document.getElementById("num")
    var time = `${h}:${m}:${s}`
    num.innerHTML = time

    if(sec==0){
        num.style.animation = "pisca .2s 2"
    }
    else
    {
        num.style.animation = "none"
    }

}
setInterval(clock, 500)
