let htmlUpcomingEvent= "";

for (const event of data.events) {
    let currentDate = new Date(data.currentDate);  
let date = new Date(event.date);
if(currentDate < date){    
        htmlUpcomingEvent += `<div class="col">
    <div class="card">
    <img src="${event.image}" class="rounded float-start card-img-top" alt="Maraton">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
    <p>${event.description}</p>
    <p>Precio $${event.price}</p><button type="button" class="btn     btn-primary">More...</button>
    </div>
    </div>
    </div> `
   
}
}
console.log(htmlUpcomingEvent);