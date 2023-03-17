let pastEvents=[];
let todasCategorias = [];


obtenerCards();

async function obtenerCards(){
  try {
      const response = await fetch(urlApi);
      console.log(response);
      const data = await response.json();
      console.log(data);
      pastEvent(data);  
      cardsXcategorias(pastEvents)
buscar(pastEvents);  
  }  catch(error) {
      console.log(error)
  }
}


function pastEvent(data){ 

  let htmlPastEvent ="";
  data.events.forEach(event => {
    let currentDate = new Date(data.currentDate);
  let date = new Date(event.date);
  if(currentDate > date){    
      htmlPastEvent += crearCard(event);
    
     pastEvents.push(event);
  }
  });
  document.querySelector('.add-card').innerHTML = htmlPastEvent;
}


