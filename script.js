const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');
const newyearDate='1 jan 2024';
function countdown(){
    const newyear=new Date(newyearDate);
      const currentdate=new Date();
      const totalSec=(newyear-currentdate)/1000;

      const days=Math.floor(totalSec/3600/24);
      const hours=Math.floor(totalSec/3600)%24;
      const mins=Math.floor(totalSec/60)%60;
      const sec=Math.floor(totalSec)%60;

      daysEl.innerHTML=correct(days);
      hoursEl.innerHTML=correct(hours);
      minsEl.innerHTML=correct(mins);
      secondsEl.innerHTML=correct(sec);
}
function correct(time) {
    // return time<10 ? (`0${time}`) : time ;
    return time<10 ? '0'+time : time ;
}
countdown();
setInterval(countdown,1000);
