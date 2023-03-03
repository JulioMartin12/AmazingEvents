/* ---------Categorias------- */

cargarCategorias();

function cargarCategorias(){
  let categoria = [];
  let contador =1;
  let htmlCategory ="";
  
  data.events.forEach(evento => {
    if(!categoria.includes(evento.category)){
      console.log(evento.category)
      categoria.push(evento.category);
      htmlCategory +=  crearCategoria(evento,contador++)  
     }
     document.querySelector('.categoria').innerHTML = htmlCategory;
  });

}



function cardsXcategorias(eventos){
  let categorias = [];
  let checks = document.querySelectorAll('.form-check-input');
checks.forEach((check) => {
     check.addEventListener('change', ()=>{
     if(check.checked){
      document.querySelector('.add-card').innerHTML=" ";
      console.log("seleccionada" + check.labels[0].outerText);
      categorias.push(check.labels[0].outerText);
      console.log(categorias)
      cargarCards(eventos.filter(evento =>
       categorias.includes(evento.category)
      
    ))
      
     }else{
      categorias = categorias.filter(categoria => categoria !=check.labels[0].outerText)
      console.log("Deleccionada" )
      if(categorias.length == 0){
        document.querySelector('.add-card').innerHTML="";
        cargarCards(eventos) ;
        console.log(eventos)
      }else{
       
        categorias = categorias.filter(categoria => categoria !=check.labels[0].outerText)
        console.log(categorias.length)
        document.querySelector('.add-card').innerHTML="";
        cargarCards( eventos.filter(evento =>
          categorias.includes(evento.category))
       )
      }
      }
   
});
});
}




function crearCategoria(evento,contador) {
   return`<div class="centrar form-check form-check-inline ">
   <label class="form-check-label" >
   <input class="form-check-input" type="checkbox" id="inlineCheckbox${contador}" value="option${contador}">
   ${evento.category}</label>
  </div>`
  
}



/* -------Cards----------- */


function cargarCards(eventos){
  let htmlEvent= "";
  eventos.forEach(evento => {
      htmlEvent = crearCard(evento);
      document.querySelector('.add-card').innerHTML += htmlEvent;
    
  });
 }



 function crearCard(event) {
  return `<div class="col">
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
 
}






