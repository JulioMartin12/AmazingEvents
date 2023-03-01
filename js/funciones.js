/* ---------Categorias------- */

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
});;

let inputs = document.getElementsByTagName('input');
console.log(inputs);
 
for (let index = 0; index < inputs.length; index++) {
  let input = inputs[index];
  input.addEventListener('change',function() {
    console.log("se selecciono la categotia: " + input.value);
    if(input.checked)
    console.log("Seleccionado")
    else
    console.log("Deseleccionado")
    
  })
  
}



function crearCategoria(evento,contador) {
   return`<div class="centrar form-check form-check-inline ">
    <input class="form-check-input" type="checkbox" id="inlineCheckbox${contador}" value="option${contador}">
    <label class="form-check-label" for="inlineCheckbox">${evento.category}</label>
  </div>`
  
}



/* -------Cards----------- */

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





