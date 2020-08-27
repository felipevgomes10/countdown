import Countdown from "./countdown.js";

export default (function event() {
  const date = document.querySelector('#date');
  const event = document.querySelector('#event');

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  function monthName(number) {
    return months[number - 1];
  };

  function handleDate(event) {
    const value = event.target.value;
    const name = event.target.name;
    
    let [year, month, day] = value.split('-');
    
    month = monthName(month);
    
    let targetDay = new Countdown(`${day} ${month} ${year} 00:00:00 GMT-0300`);
   
    const timer = document.querySelectorAll('.container .timer span');
    
    function countdown() {
      const count = setInterval(() => {
        timer[0].innerText = targetDay.total.days + ':';
        timer[1].innerText = targetDay.total.hours + ':';
        timer[2].innerText = targetDay.total.minutes + ':';
        timer[3].innerText = targetDay.total.seconds;
      }, 1000);
      
      function reset() {
        clearInterval(count);
        
        timer[0].innerText = '00:';
        timer[1].innerText = '00:';
        timer[2].innerText = '00:';
        timer[3].innerText = '00';
      }
      
      const btn = document.querySelector('.zero');
      btn.addEventListener('click', reset);
    }
    
    countdown();
};

function handleEvent(event) {
  const eventName = document.querySelector('.event');
  const value = event.target.value;
  eventName.innerText = value;
};

date.addEventListener('change', handleDate);
event.addEventListener('change', handleEvent);

})();