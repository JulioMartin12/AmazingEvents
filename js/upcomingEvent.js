let upcomingEvents = [];
upcomingEvent()
cardsXcategorias(upcomingEvents)
//buscar(upcomingEvents)

function upcomingEvent() {
  let htmlUpcomingEvent = "";
  data.events.forEach(event => {
    let currentDate = new Date(data.currentDate);
    let date = new Date(event.date);
    if (currentDate < date) {
      htmlUpcomingEvent += crearCard(event);
      upcomingEvents.push(event);
    }
  });
  document.querySelector('.add-card').innerHTML = htmlUpcomingEvent;
}