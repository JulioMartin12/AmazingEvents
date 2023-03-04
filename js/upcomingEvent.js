let upcomingEvents=[];

let htmlUpcomingEvent= "";

data.events.forEach(event => {
  let currentDate = new Date(data.currentDate);  
  let date = new Date(event.date);
  if(currentDate < date){    
          htmlUpcomingEvent = crearCard(event);
     document.querySelector('.add-card').innerHTML += htmlUpcomingEvent
     upcomingEvents.push(event);
}});

console.log(htmlUpcomingEvent);

cardsXcategorias(upcomingEvents)

buscar(upcomingEvents)