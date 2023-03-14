
crearTable();
eventoMayorPorcentajeAsistencia(data.events)
eventoMenorPorcentajeAsistencia(data.events)
eventoMayorCapacidad(data.events)
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
        
        if(mayorCapacidad.length == 0){
            mayorCapacidad.push({name : event.name ,
                capacity:event.capacity,})
               } 
              else{
                 if(event.capacity > mayorCapacidad[mayorCapacidad.length -1].capacity)
              {  mayorCapacidad = [];
              
                mayorCapacidad.push({name : event.name ,
                    capacity : event.capacity,})
                     console.log("cambio " + mayorCapacidad.length)
              }else(Number(event.capacity) === Number(mayorCapacidad[mayorCapacidad.length -1].capacity))
              { console.log("Son Iguales " + event.capacity + " " + mayorCapacidad[mayorCapacidad.length -1].capacity)
                mayorCapacidad.push({name : event.name ,
                    capacity : event.capacity,})
                    console.log("agrego " + mayorCapacidad.length)
              }
            }
              
              /*  else if(event.capacity > mayorCapacidad[0].capacity)
          {  mayorCapacidad = [];
          
            mayorCapacidad.push({name : event.name ,
                capacity : event.capacity,})
                console.log("Es mayour "+event.capacity + " " + mayorCapacidad[0].capacity)
                console.log("cambio")
          }else(event.capacity == mayorCapacidad[0].capacity)
          { console.log("Son Iguales "+event.capacity + " " + mayorCapacidad[0].capacity)
            mayorCapacidad.push({name : event.name ,
                capacity:event.capacity,})
                console.log("agrego")
          } */
   
    }
let result="";
        for (const event of mayorCapacidad) {
            result += event.name + " " + event.capacity;
        }

        console.log("Cantidad " + mayorCapacidad.length);
        console.log("Mayor de capacidad" + result);
    }


/*evento con menor porcentaje de asistencia  */
function eventoMenorPorcentajeAsistencia(eventos){
    let menor = [];
    let currentDate = new Date(data.currentDate);
   
    let porcentaje = 0 ;
    for (const event of eventos) {
        
        let date = new Date(event.date);

         
          if(currentDate > date){    
           porcentaje = ((event.assistance * 100)/(event.capacity)).toFixed(3)
            console.log(event.name + " " + porcentaje)
             if(menor.length == 0 ){
                menor.push({name : event.name ,
                percentage:porcentaje,});

          }else if(porcentaje < menor[0].percentage)
          {  menor= [];
            menor.push({name : event.name ,
                percentage:porcentaje,})

          }else if(porcentaje == menor[0].percentage)
          {
            menor.push({name : event.name ,
                percentage:porcentaje,})
          }
   
        }
    }
let result="";
        for (const event of menor) {
            result += event.name + " " + event.percentage;
        }
        console.log("menor de todos " + result);
    }


/*  evento con mayor porcentaje de asistencia */
function eventoMayorPorcentajeAsistencia(eventos){
    let mayor = [];
    let currentDate = new Date(data.currentDate);
   
    let porcentaje = 0 ;
    for (const event of eventos) {
        
        let date = new Date(event.date);

         
          if(currentDate > date){    
           porcentaje = ((event.assistance * 100)/(event.capacity)).toFixed(3)
            console.log(event.name + " " + porcentaje)
             if(mayor.length == 0 ){
             mayor.push({name : event.name ,
                percentage:porcentaje,});

          }else if(porcentaje > mayor[0].percentage)
          {  mayor= [];
            mayor.push({name : event.name ,
                percentage:porcentaje,})

          }else if(porcentaje == mayor[0].percentage)
          {
            mayor.push({name : event.name ,
                percentage:porcentaje,})
          }
   
        }
    }
let result="";
        for (const event of mayor) {
            result += event.name + " " + event.percentage;
        }
        console.log(result);
    }



function crearTable (){
    let htmlTable = ` <tbody>
    <tr>
      <th scope="row" colspan="3" class="table-info border-dark titulos">Events Statics</th>
    </tr>
    <tr>
      <th>Events with the highest percentage of attendence</th>
      <th>Events with the lovest percentage of attendance</th>
      <th>Event with large capacity</th>
    </tr>
    <tr class="eventsPercentage" >
    </tr>
    
    <tr>
      <th scope="row" colspan="3" class="table-info border-dark titulos">Upcoming events statistics by category</th>
    </tr>
    <tr>
      <th>Categories</th>
      <th>Revenues</td>
      <th>Percentage of attendance</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
   
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row" colspan="3" class="table-info border-dark titulos">Past Events statics by category</th>
    </tr>
    <tr>
      <th>Categories</th>
      <th>Revenues</th>
      <th>Percentage of attendance</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>`

  document.querySelector('.table').innerHTML = htmlTable;
}