let categoria = [];
let contador =1;
let htmlCategory ="";
for (const event of data.events) {
    if(categoria.indexOf(event.category)== -1){
        categoria.push(event.category)
       htmlCategory =  `<div class="centrar form-check form-check-inline ">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox${contador}" value="option${contador}">
        <label class="form-check-label" for="inlineCheckbox">${event.category}</label>
      </div>`
      document.querySelector('.categoria').innerHTML += htmlCategory;
      contador++;
   
    }
}
