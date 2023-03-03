let pastEvents=[];
pastEvent();
cardsXcategorias(pastEvents)
console.log(pastEvents);



function pastEvent(){ 

  let htmlPastEvent ="";
  data.events.forEach(event => {
    let currentDate = new Date(data.currentDate);
  let date = new Date(event.date);
  if(currentDate > date){    
      htmlPastEvent = crearCard(event);
     document.querySelector('.add-card').innerHTML += htmlPastEvent;
     pastEvents.push(event);
  }
  });
}


