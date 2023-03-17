let eventos = [];
let urlApi ="https://mindhub-xj03.onrender.com/api/amazing"
obtenerCards();
async function obtenerCards(){
  try {
      const response = await fetch(urlApi);
      console.log(response);
      const data = await response.json();
      console.log(data);
      eventos = data.events;
      cargarDetails(eventos);
  }  catch(error) {
      console.log(error)
  }
}


 console.log(eventos)


function cargarDetails (listaEventos){
    let queryString  = location.search;
   let param = new URLSearchParams(queryString);
  
 //details(eventos.find(evento => evento == param.get('id')));
 let card = listaEventos.find(events =>
    events._id == param.get('id')); 
  console.log(" Evento " +  param.get('id') + " "+ card)
  details(card);
  }
  
  
  function details(evento){
    let htmlDetails = `
    <div class="col-12 col-md-6 center-text card-margin">
    <img src="${evento.image}" 
    class="cards-ditais img-fluid rounded-start rounded" alt="evento">
  </div>
  
  <div class=" textosCard col-12 col-md-6 center-text">
    <div class="card-body border-texto">
      <h3 class="card-title col-12">${evento.name}</h3>
       <p class="description col-12">${evento.description}</p>
       <div class="detallaInferio col-12 ">
         <p class=" col-12"><b> Place: </b>${evento.place}</p>
           <p class="col-12 "><b>Capacity: </b>${evento.capacity}</p>
           <p class="col-12 "><b>Assistance: </b>${evento.assistance}</p>
           <p class="col-12 "><b>Precio: </b>${evento.price}</p>
       </div>
       
    </div>
  </div>
</div>`;
  
    document.querySelector('.card-deatils').innerHTML = htmlDetails;
  
  }