let todasCategorias = [];

cargarCards(data.events);





function cargarCards(eventos){
    let htmlEvent= "";
    eventos.forEach(evento => {
        htmlEvent = crearCard(evento);
        document.querySelector('.add-card').innerHTML += htmlEvent;
        todasCategorias.push(evento);
    });
   }






function cargarCardsFiltradas(eventos){
    document.querySelector('.add-card').innerHTML = "";
    cargarCards(eventos);
  
}
