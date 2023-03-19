let urlApi ="https://mindhub-xj03.onrender.com/api/amazing"
let data =[];
obtenerDatos()


async function obtenerDatos(){
  try {
      const response = await fetch(urlApi);
      console.log(response);
      const dato = await response.json();
      console.log(dato);
      data=dato;
      crearTable(data);
      upcomingEventsStatisticsByCategory(data)
      pastEventsStatisticsByCategory(data);
  
  }  catch(error) {
   /*    console.log(error) */
  }
}
/* pastEventsStatisticsByCategory() */
/* eventoMayorPorcentajeAsistencia(data.events);
eventoMenorPorcentajeAsistencia(data.events);

eventoMayorCapacidad(data.events) */



/* - Rellenar las estadísticas dinámicamente. Sólo dejar en el HTML 
la tabla y los th, pero todos los tr con información se insertan dinámicamente.
 Traducción de los th:
Estadísticas de eventos: evento con mayor porcentaje de asistencia, 
evento con menor porcentaje de asistencia, evento con mayor capacidad.

Estadísticas de eventos futuros por categoría: categoría, ganancias de la categoría,
 porcentaje de asistencia de la categoría.

Estadísticas de eventos pasados por categoría: categoría, ganancias de la categoría, 
porcentaje de asistencia de la categoría. */




/* evento con mayor capacidad */
function eventoMayorCapacidad(eventos){
    let mayorCapacidad = [];

    for (const event of eventos) {
                 
        let cantiPersonas = event.capacity;
      
       /*   console.log(event.name + " " +  cantiPersonas) */
               if(mayorCapacidad.length == 0 ){
                mayorCapacidad.push({name : event.name ,
                  capacity:cantiPersonas,});
  
            }else if(cantiPersonas > Number(mayorCapacidad[0].capacity)){
                 mayorCapacidad = [];
                 mayorCapacidad.push({name : event.name ,
                  capacity:cantiPersonas,});
            } else if(cantiPersonas === Number(mayorCapacidad[0].capacity)){
              mayorCapacidad.push({name : event.name ,
                capacity:cantiPersonas,});
            }
          }    
   
    
/* let result="";
        for (const event of mayorCapacidad) {
            result += event.name + " " + event.capacity + " ";
        }

        console.log("Cantidad " + mayorCapacidad.length);
        console.log("Mayor de capacidad" + result); */

        return mayorCapacidad;
    }


/*evento con menor porcentaje de asistencia  */
function eventoMenorPorcentajeAsistencia(eventos){
    let menor = [];
    for (const event of eventos) {  
      let cantiPersonas = asistenciaOestimado(event);
      let porcentaje = ((cantiPersonas * 100)/(event.capacity)).toFixed(2);
      /* console.log(event.name + " " + porcentaje)  */
      if(menor.length === 0  ){
         menor.push({name : event.name ,
          percentage : porcentaje});
          }else{ 
        if(porcentaje < Number(menor[0].percentage) ){
         
          menor = [];
           menor.push({name : event.name ,
            percentage : porcentaje});
          
       
        }else{
          /* console.log(porcentaje + " " + menor[0].percentage) */
            if(porcentaje == Number(menor[0].percentage)){
                menor.push({name : event.name,
                percentage : porcentaje});
               
            }
        }
      }
        
    }
/* let result="";
        for (const event of menor) {
            result += event.name + " " + event.percentage + "% ";
        }
        console.log("menor de todos " + result); */
        return menor;
    }


/*  evento con mayor porcentaje de asistencia */
function eventoMayorPorcentajeAsistencia(eventos){
    let mayor = [];
     for (const event of eventos) {
         let cantiPersonas = asistenciaOestimado(event);
          let porcentaje = ((cantiPersonas * 100)/(event.capacity)).toFixed(2);
         /*  console.log(event.name + " " + porcentaje)  */
          if(mayor.length === 0  ){
            mayor.push({name : event.name ,
              percentage : porcentaje});
              }else{ 
            if(porcentaje > Number(mayor[0].percentage) ){
              mayor = [];
              mayor.push({name : event.name ,
                percentage : porcentaje});
           
            }else{
                if(porcentaje == Number(mayor[0].percentage)){
                   mayor.push({name : event.name ,
                    percentage : porcentaje});
                }
            }
          }
           
        }
        
    
/* let result="";
        for (const event of mayor) {
            result +=  " " +event.name + " " + event.percentage + "% ";
        }
        console.log("eventoMayorPorcentajeAsistencia: "+ result ); */
        return  mayor;
    }





function crearTable (data){
    let htmlTable = ` <tbody>
    <tr>
      <th scope="row" colspan="3" class="table-info border-dark titulos">Events Statics</th>
    </tr>
    <tr>
      <th>Events with the highest percentage of attendence</th>
      <th>Events with the lovest percentage of attendance</th>
      <th>Event with large capacity</th>
    </tr>`
   htmlTable += cargarEventsStatics(data);
 /*   console.log(cargarEventsStatics()) */

   htmlTable +=`<tr class="eventsPercentage" >
    </tr>
    
    <tr>
      <th scope="row" colspan="3" class="table-info border-dark titulos">Upcoming events statistics by category</th>
    </tr>
    <tr>
      <th>Categories</th>
      <th>Revenues</td>
      <th>Percentage of attendance</th>
    </tr>`
    htmlTable +=eventsStatics(upcomingEventsStatisticsByCategory(data));
    htmlTable +=`  <tr>
      <th scope="row" colspan="3" class="table-info border-dark titulos">Past Events statics by category</th>
    </tr>
    <tr>
      <th>Categories</th>
      <th>Revenues</th>
      <th>Percentage of attendance</th>
    </tr>`
    htmlTable +=eventsStatics(pastEventsStatisticsByCategory(data));
    htmlTable +=`</tbody>`

  document.querySelector('.table').innerHTML = htmlTable;
}


/* La función crea los tr y sus td para los eventosStatics y retorna un string con todo. */
function cargarEventsStatics(){
  let mayorCapacidad = eventoMayorCapacidad(data.events)
  let mayorPorcentajeAsistencia = eventoMayorPorcentajeAsistencia(data.events);
  let menorPorcentajeAsistencia = eventoMenorPorcentajeAsistencia(data.events);
  let htmlEventsStatics = ""
  let mayor= "";
  let menor = "";
  let mayorCap= "";

 /*  console.log("Max: " + mayorCantidadElementos() ) */
for (let index = 0; index < mayorCantidadElementos(); index++) {
  htmlEventsStatics +=`<tr>`
   if(mayorPorcentajeAsistencia[index]!=null){
      mayor=mayorPorcentajeAsistencia[index].name + " : " + mayorPorcentajeAsistencia[index].percentage + "%"
    htmlEventsStatics +=` <td>${mayor}</td>`
   }else{
    htmlEventsStatics +=` <td></td>`
   }
   if(menorPorcentajeAsistencia[index]!=null){
    menor=menorPorcentajeAsistencia[index].name + " : " + menorPorcentajeAsistencia[index].percentage + "%"
   htmlEventsStatics +=` <td>${menor}</td>`
  }else{
   htmlEventsStatics +=` <td></td>`
  }
  if(mayorCapacidad[index]!=null){
    mayorCap=mayorCapacidad[index].name + " : " +mayorCapacidad[index].capacity 
   htmlEventsStatics +=` <td>${mayorCap}</td>`
  }else{
   htmlEventsStatics +=` <td></td>`
  }
  htmlEventsStatics +=`</tr>`
}
  return   htmlEventsStatics; /*  ` <tr>
  <td></td>
  <td></td>
  <td></td>
  </tr>` */
}



function eventsStatics(eventos){
  let htmlEventsStatics = "";
  let events = eventos;
 events.forEach(categoria => {
  htmlEventsStatics += `<tr>
    <td>${categoria.category}</td>
    <td>$${categoria.revenues}</td>
    <td>${categoria.porcentajeAsistencia.toFixed(2)}%</td>
    </tr>
    `
  })
  return htmlEventsStatics;
/*  ` <tr>
  <td></td>
  <td></td>
  <td></td>
  </tr>` */
}



function mayorCantidadElementos(){
  return Math.max(eventoMayorCapacidad(data.events).length,
  eventoMayorPorcentajeAsistencia(data.events).length,eventoMenorPorcentajeAsistencia(data.events).length)
}


function pastEventsStatisticsByCategory(data){
  let events = devolverEventosSegunTiempo(false, new Date(data.currentDate),data.events)
  events.forEach(event => {
    console.log(" lista pasado" + event.category + "  asistencia " + asistenciaOestimado(event)) +" capacidad "+ event.capacity;
   })
  return eventBycategory(events);
}


/* function pastEventsStatics(){
  let events = devolverEventosSegunTiempo(false, new Date(data.currentDate),data.events);
  events.forEach(event => {
    console.log(" lista pasado" + event.category + "  asistencia " + asistenciaOestimado(event)) +" capacidad "+ event.capacity;
   })
 return eventBycategory(events);
} */


function upcomingEventsStatisticsByCategory(data){
  let events = devolverEventosSegunTiempo(true, new Date(data.currentDate), data.events)
  events.forEach(event => {
   console.log(" lista presente " + event.category + "  asistencia " + asistenciaOestimado(event) +" capacidad "+ event.capacity);
  })
 return eventBycategory(events);
}


function eventBycategory(eventsByCategory){ 
  let eventXCategorias = [];
  eventsByCategory.forEach(event => {
    if(eventXCategorias.length == 0){
      let prueba = event;
      console.log("Array Vacio")
      eventXCategorias.push({category: event.category,
      revenues: (event.price * asistenciaOestimado(event)),
      assistance: asistenciaOestimado(event),
      porcentajeAsistencia : 0, 
      capacity : event.capacity,
    
    });
   /*  console.log(prueba.category + " " + ); */
    }else {
      if(verificarExiste(eventXCategorias, event)){
        console.log("verdadero")
        
      }else{
        console.log("falso" )
        eventXCategorias.push({category: event.category,
          revenues: (event.price * asistenciaOestimado(event)),
          assistance: asistenciaOestimado(event),
         
          porcentajeAsistencia : 0, 
          capacity : event.capacity,
        });
        console.log(event);
      }
    
    } 
       
  });

    let result="";
      for (const event of eventXCategorias) {
           event.porcentajeAsistencia =  (event. assistance *100) / event.capacity 
          console.log(event.estimate + " " + event.capacity);
          result +=  " " +event.category + " $" + event.revenues + " " +  event.porcentajeAsistencia.toFixed(2) + "% ";
      }
   /*    console.log("Categorias : "+ result ); */
    return eventXCategorias;
}

function verificarExiste(eventos, evento){
  let band = false;
  let asistencia = 0;
  eventos.forEach(event => {
    if(event.category === evento.category){
      console.log( "categorias iguales: "+ event.category + " " +evento.category)
      event.revenues += (evento.price *asistenciaOestimado(evento));
      console.log("asistencia Acumulada " + event.assistance +" " + asistenciaOestimado(evento))
      asistencia=asistenciaOestimado(evento);
      event.assistance += asistencia;
      console.log("asistencia Acumulada " + event.assistance +" " + asistenciaOestimado(evento))
      event.capacity += evento.capacity;
      band= true;
  /*     console.log("Tamaño de arreglo "+eventos.length+" categoria "+event.category + " Capacidad vieja"+  + evento.capacity + " capacidad acumulada "+ event.capacity+ " asistencia nueva "+asistenciaOestimado(evento) )+
      " asistencia Acumulada " + event.assistance; */
    }
    
  })
  return band;
}


/* pasamos por referencia el tiempo , true para los upcoming y false para los past, devuelve un array con los elementos según su tiempo */
function devolverEventosSegunTiempo(tiempo, date, events){
  if(tiempo){
    return events.filter(event => new Date(event.date) > date)
  }else {
    return events.filter(event => new Date(event.date)< date)
  }

}


    /* Retorna la asistencia o el estimado */
    function asistenciaOestimado(event){
      if(event.hasOwnProperty('assistance')){
        console.log("assistance "+event.assistance)
    return Number(event.assistance);
      }else{
        console.log("estimate "+event.assistance)
    return Number(event.estimate);
      }
    }