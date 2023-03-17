obtenerCards();
let todasCategorias = [];

async function obtenerCards(){
    try {
        const response = await fetch(urlApi);
        console.log(response);
        const data = await response.json();
        console.log(data);
        cargarCards(data.events);
        cardsXcategorias(data.events)
        buscar(data.events)
        
    }  catch(error) {
       /*  console.log(error) */
    }
}














/* 
function cargarCardsFiltradas(eventos){
    document.querySelector('.add-card').innerHTML = "";
    cargarCards(eventos);
  
} */

/* cargarCardsFiltradas(cardsXcategorias(todasCategorias)); */