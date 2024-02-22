function setRotate(element, angle) {
  element.style.transform = `rotate(${angle}deg)` ;
}

// Récupération des différentes aiguilles 
const hour = document.querySelector('.hour') ;
const minute = document.querySelector('.minute') ;
const second = document.querySelector('.second') ;

document.addEventListener('DOMContentLoaded', (e) => {
  // Synchronisation avec l'heure actuelle 
  const currentDate = new Date();

  const clock = {
    currentHour: currentDate.getHours(),
    currentMinute: currentDate.getMinutes(),
    currentSecond: currentDate.getSeconds(),
    validHour: null,
    validHourDecimal: null,

    play: () => {

      // Convertir l'heure de format 24h en 12h
      clock.validHour = clock.currentHour > 13 ? clock.currentHour - 12 : clock.currentHour ;
      clock.validHourDecimal = (clock.currentMinute / 60).toFixed(2) ;
    
      clock.validHour += +clock.validHourDecimal ;

      setRotate(hour, clock.validHour * 30) ;
      setRotate(minute, clock.currentMinute * 6) ;
      setRotate(second, clock.currentSecond * 6) ;
      
      setInterval(() => {

        if(clock.currentSecond == 59) {
          clock.currentSecond = - 1;
          clock.currentMinute++;
        }
        
        if(clock.currentMinute == 59) {
          clock.currentMinute = -1 ;
          clock.currentHour++ ;
        }
        
        ++clock.currentSecond ;
        
        clock.validHour = clock.currentHour > 13 ? clock.currentHour - 12 : clock.currentHour ;
        clock.validHourDecimal = (clock.currentMinute / 60).toFixed(2) ;
      
        clock.validHour += +clock.validHourDecimal ;

        setRotate(hour, clock.validHour * 30) ;
        setRotate(minute, clock.currentMinute * 6) ;
        setRotate(second, clock.currentSecond * 6) ;

      }, 1000);

    }
  }

  clock.play() ;
})
