let pastEvents=[];
pastEvent();





function pastEvent(){ 

  let htmlPastEvent ="";
  data.events.forEach(event => {
    let currentDate = new Date(data.currentDate);
  let date = new Date(event.date);
  if(currentDate > date){    
      htmlPastEvent = crearCard(event);
     document.querySelector('.past-card').innerHTML += htmlPastEvent;
     pastEvents.push(event);
  }
  });
}


