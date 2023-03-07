let eventos = data.events;
 console.log(eventos)
cargarDetails(eventos);

function cargarDetails (listaEventos){
    let queryString  = location.search;
   let param = new URLSearchParams(queryString);
  
 //details(eventos.find(evento => evento == param.get('id')));
 let card = data.events.find(events =>
    events._id == param.get('id')); 
  console.log(" Evento " +  param.get('id') + " "+ card)
  details(card);
  }
  
  
  function details(evento){
    let htmlDetails = `<div class="row g-2 p-2 details">
    <div class="col-12 col-md-6 center-text">
       <img src="${evento.image}" 
       class="cards cards-ditais img-fluid rounded-start rounded" alt="evento">
     </div>
     
     <div class="col-12 col-md-6 center-text">
       <div class="card-body border-texto">
         <h3 class="card-title col-12">${evento.name}</h3>
          <p class="card-text col-12">${evento.description}</p>
          <p class="card-text col-12"><b>Place:</b>${evento.place}</p>
          <p class="card-text col-12"><b>Capacity:</b>${evento.capacity}</p>
          <p class="card-text col-12"><b>Assistance:</b>${evento.assistance}</p>
          <p class="card-text col-12"><b>Precio:</b>$${evento.price}</p>
       </div>
     </div>
   </div> `;
  
    document.querySelector('.card-deatils').innerHTML = htmlDetails;
  
  }