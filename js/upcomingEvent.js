
let todasCategorias = [];
let upcomingEvents = [];


obtenerCards();


async function obtenerCards(){
  try {
      const response = await fetch(urlApi);
      console.log(response);
      const data = await response.json();
      console.log(data);
      upcomingEvent(data) 
      cardsXcategorias(upcomingEvents)
buscar(upcomingEvents)
       
  }  catch(error) {
      console.log(error)
  }
}




cardsXcategorias(upcomingEvents)
buscar(upcomingEvents)



function upcomingEvent(data) {
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