/* ---------Categorias------- */
let categoriasCheched = [];
cargarCategorias();

function cargarCategorias(){
  let categoria = [];
  let contador =1;
  let htmlCategory ="";
  
  data.events.forEach(evento => {
    if(!categoria.includes(evento.category)){
      categoria.push(evento.category);
      htmlCategory +=  crearCategoria(evento,contador++)  
     }
     document.querySelector('.categoria').innerHTML = htmlCategory;
  });

}

function cardsXcategorias(eventos){
 
  let checks = document.querySelectorAll('.form-check-input');
  checks.forEach((check) => {
     check.addEventListener('change', ()=>{
     if(check.checked){
      document.querySelector('.add-card').innerHTML=" ";
      categoriasCheched.push(check.labels[0].outerText);
      cargarCards(eventos.filter(evento =>
        categoriasCheched.includes(evento.category)
      
    ))
      
     }else{
      categoriasCheched = categoriasCheched.filter(categoria => categoria !=check.labels[0].outerText)
      if(categoriasCheched.length == 0){
        document.querySelector('.add-card').innerHTML="";
        cargarCards(eventos) ;
        
        }else{
       
          categoriasCheched = categoriasCheched.filter(categoria => categoria !=check.labels[0].outerText)
        document.querySelector('.add-card').innerHTML="";
        cargarCards( eventos.filter(evento => 
          categoriasCheched.includes(evento.category))
       )
      }
      }   
});
});
}

function cardXtexto(eventos, texto){
  let flag =false;
   eventos.forEach(evento => {
      if((evento.name.toLowerCase().includes(texto) ||
       evento.description.toLowerCase().replaceAll(",", " ").split(" ").includes(texto))){
        document.querySelector('.add-card').innerHTML="";
        cargarCards(eventos.filter(evento => ((evento.name.toLowerCase().includes(texto) ||evento.description.toLowerCase().replaceAll(",", " ").split(" ").includes(texto) && categoriasCheched.includes(evento.category))))) 
        flag= true;
      }
   } )
   
    if(!flag){  
      document.querySelector('.add-card').innerHTML="";
      alert("Mejore su busqueda con datos más especificos.");
      cargarCards(eventos);
    }
}

function buscar(eventos){
  let boton = document.querySelector('.icon-busqueda');
  let input = document.querySelector('.form-control');
  boton.addEventListener('click',(e) => {
    e.preventDefault();
    console.log(input.value.toLowerCase())
    cardXtexto(eventos , input.value.toLowerCase());      
  })

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
      <p col-row-6>Precio $${event.price}</p>
      <a class="botonEnlace" href="../details.html?id=${event._id}">More...</a>
    </div>
  </div>
</div> `
}
/* <button type="button" class="btn col-row-6 btn-primary">More...</button>     */








