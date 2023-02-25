let htmlEvent= "";

for (const event of data.events) {
    htmlEvent = `
    <div class="col">
    <div class="card-completa"> 
    <div class="card">
      <img src="${event.image}" class= card-img-top img-fluid" " alt="Maraton" style ="width: 15rem; height: 13rem;">
    </div>
      <div class="card-body">
        <h5 class="card-title col-row-6">${event.name}</h5>
        <p class="col-row-12">${event.description}</p>  
        <p col-row-6>Precio $${event.price}</p><button type="button" class="btn col-row-6 btn-primary">More...</button>    
      </div>
    </div>
  </div> `

    document.querySelector('.add-card').innerHTML += htmlEvent;

}

console.log(htmlEvent);


