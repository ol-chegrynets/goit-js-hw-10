import{e as m}from"./assets/error-d6adae77.js";/* empty css                      */import{f as l,i as u}from"./assets/vendor-77e16229.js";const e={timeInput:document.querySelector("#datetime-picker"),startTimerBtn:document.querySelector("[data-start]"),timer:document.querySelector(".timer"),daysElem:document.querySelector("[data-days]"),hoursElem:document.querySelector("[data-hours]"),minutesElem:document.querySelector("[data-minutes]"),secondsElem:document.querySelector("[data-seconds]")},f={title:"Error",titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",message:"Please choose a date in the future",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",iconUrl:m,theme:"dark"};e.startTimerBtn.disabled=!0;let s="";const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const n=t[0],r=Date.now();n<r?(e.startTimerBtn.disabled=!0,e.startTimerBtn.classList.remove("active-btn"),u.error(f)):(s=n,e.startTimerBtn.classList.add("active-btn"),e.startTimerBtn.disabled=!1)}};l(e.timeInput,h);e.startTimerBtn.addEventListener("click",T);function T(){e.startTimerBtn.classList.remove("active-btn"),e.startTimerBtn.disabled=!0,e.timeInput.disabled=!0;const t=setInterval(()=>{const n=s-Date.now();if(n<=0){clearInterval(t),e.timeInput.disabled=!1,e.startTimerBtn.disabled=!1;return}const r=y(n);e.daysElem.textContent=o(r.days),e.hoursElem.textContent=o(r.hours),e.minutesElem.textContent=o(r.minutes),e.secondsElem.textContent=o(r.seconds)},1e3);setTimeout(()=>{clearInterval(t),e.timeInput.disabled=!1},s-Date.now())}function y(t){const a=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:i,minutes:c,seconds:d}}function o(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map