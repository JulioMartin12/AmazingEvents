let htmlUpcomingEvent= "";

data.events.forEach(event => {
  let currentDate = new Date(data.currentDate);  
  let date = new Date(event.date);
  if(currentDate < date){    
          htmlUpcomingEvent = crearCard(event);
     document.querySelector('.upcomingEvent-card').innerHTML += htmlUpcomingEvent
}});

console.log(htmlUpcomingEvent);