//destructurar
const { createApp } = Vue;

createApp({
    data(){
        return {
            urlApi:'https://mindhub-xj03.onrender.com/api/amazing',
            currentDate: '',
            datas:[],
            backupData:[],
            texto:'',
            categorias:[],
            upcomingEvent:[],
            pasEvent:[],
            mayor:[],
            menor:[],
            mayorCapacity:[],
            arrayResultados:[],
            pastEventsStatistics:[],
            upcomingEventsStatistics:[],
                 
        }
    }, 
    created(){
    this.traerDatos();
    },
    mounted(){

    },

 methods:{
  traerDatos(){
    fetch(this.urlApi)
     .then(response => response.json())
     .then(datos => {
        this.currentDate = new Date(datos.currentDate)
        this.datas = datos.events;
        this.backupData = this.datas;
        this.upcomingEvent = this.devolverEventosSegunTiempo(true,this.currentDate,this.datas);
        this.pasEvent = this.devolverEventosSegunTiempo(false,this.currentDate,this.datas);
        this.mayor=this.recorrerYCargar(this.datas,true,this.mayor);
        this.menor=this.recorrerYCargar(this.datas,false,this.menor);
       
        this.mayorCapacity=this.calcularMayorCapacidad(this.datas,this.mayorCapacity);
        
        this.arrayResultados= this.actualizar();
        console.log("mayor capacidad")  
        this.pastEventsStatistics=this.eventBycategory(this.pasEvent,this.pastEventsStatistics);
        console.log("Actualizar")
        this.upcomingEventsStatistics=this.eventBycategory( this.upcomingEvent,this.upcomingEventsStatistics);
     
       })
     .catch(error => console.log(error.message))
 },

 obtenerArrayConMayorElementos(){
   let cantidad = Math.max(this.mayor.length,this.menor.length,this.mayorCapacity.length);
 return cantidad;
 },

calcularMayorCapacidad(events,capacidad){
events.forEach(event => {
     if(capacidad.length === 0){
        capacidad.push(event);
        console.log("primero")
     }else {
        if(event.capacity === capacidad[0].capacity){
          capacidad.push(event);
          console.log("Son iguales")
        }else{
          if(event.capacity > capacidad[0].capacity){
            console.log("Es mayor")
            capacidad = [];
            capacidad.push(event);
          }
        }
     }
});
    capacidad.forEach(event =>{
       console.log(event.name + " :"+ event.capacity)
    })
    return capacidad;
},

devolverEventosSegunTiempo(tiempo, date, events){
  console.log("entro: ")  
  if(tiempo){
      console.log("Futuros: "+ events.filter(event => new Date(event.date) > date));
      return events.filter(event => new Date(event.date) > date)
    }else {
      console.log("Pasados: "+events.filter(event => new Date(event.date) < date));
      return events.filter(event => new Date(event.date) < date)
    }
  
  },

/*   calcularEventos(arrayEvento,tiempo,arrayCalculo){
 if(tiempo){
  this.recorrerYCargar(arrayEvento,tiempo,arrayCalculo)
   
 }else {
  this.recorrerYCargar(arrayEvento,tiempo,arrayCalculo)
 }
 console.log(arrayCalculo)
  }, */

  recorrerYCargar(arrayEvento,tiempo,arrayCalculo){
   
    arrayEvento.forEach(event =>{
      if(arrayCalculo.length === 0){
         this.cargarUneventoNuevo(event,arrayCalculo);
       
      }else
      {if(Number(arrayCalculo[0].porcentaje) === Number(this.retornarElPorcentaje(event))){
        arrayCalculo = this.cargarUneventoNuevo(event,arrayCalculo);
            }else{
         arrayCalculo = this.setearArrayCargar(event,arrayCalculo,tiempo);
      }
    }
    });
    console.log( "Cantidad " +arrayCalculo.length)
    arrayCalculo.forEach(event => {
       console.log(event.nombre + " " + event.porcentaje)
    })
    return arrayCalculo;
  },
 
  retornarElPorcentaje(element){
    let porcentaje =(((element.assistance|| element.estimate)*100)/element.capacity).toFixed(2);
 return  porcentaje;
  },

  obtenerPorcentaje(eventos,tiempo){
    if(tiempo){
     eventos.forEach(element => {
       console.log(this.retornarElPorcentaje(element))
     })
    }else{
     eventos.forEach(element => {
       console.log(this.retornarElPorcentaje(element))
    })
   
   }

 },
 

setearArrayCargar(evento,arrayCalculo,tiempo){

  if(tiempo){
    if(Number(arrayCalculo[0].porcentaje) < Number(this.retornarElPorcentaje(evento))){
     
      arrayCalculo = [];
       arrayCalculo = this.cargarUneventoNuevo(evento,arrayCalculo);
    
    }else{
    
    }
  }else{
   

    if(Number(arrayCalculo[0].porcentaje) >  Number(this.retornarElPorcentaje(evento))){
    arrayCalculo = [];
   
    arrayCalculo = this.cargarUneventoNuevo(evento,arrayCalculo);
   
  }
}

return arrayCalculo;
},

cargarUneventoNuevo(evento,arrayCalculo){
  arrayCalculo.push({
   nombre:evento.name,
   porcentaje:(this.retornarElPorcentaje(evento)),
  }
  );
  return arrayCalculo;
},

actualizar(){
  console.log("entro a la funcion " + this.obtenerArrayConMayorElementos())
  let array = [];
  for (let index = 0; index < this.obtenerArrayConMayorElementos(); index++) {
    console.log("entro a la funcion " + index)
   array.push({mayorPorc:this.devolverValorPorIndice(index,this.mayor),
   menorPorc:this.devolverValorPorIndice(index,this.menor),
   mayorCapacidad:this.devolverValorPorIndiceCapacidad(index,this.mayorCapacity),
   })
    
  }

  array.forEach(element => {
    console.log(element.mayorPorc  + " "+ element.menorPorc + " " + element.mayorCapacidad )
    
  });
 return array;
 },
    
 devolverValorPorIndice(indice,array){
   /*  if(array[indice] !=undefined){ */
      if(array.length-1 >= indice ){
        return array[indice].nombre + " " + (array[indice].porcentaje /* || array[index].capacidad */ )+"%";
      }else
      return " ";
     /*  else{
      return " ";
    }
   */
 
 },
 
 devolverValorPorIndiceCapacidad(indice,array){
  console.log("entro mayour capacidad")
  if(array.length-1 >= indice ){
    return (array[indice].name  + " " +  array[indice].capacity);
  }else
  return " ";
},
    
//desde Acá

 pastEventsStatisticsByCategory(data,events){
  events = this.devolverEventosSegunTiempo(false, this.currentDate ,data.events)
  events.forEach(event => {
    console.log(" lista pasado" + event.category + "  asistencia " + this.asistenciaOestimado(event)) +" capacidad "+ event.capacity;
   })
  return this.eventBycategory(events);
},



/*  upcomingEventsStatisticsByCategory(events){
  console.log("entro upcoming")
   events = this.devolverEventosSegunTiempo(true, this.currentDate, data.events)
  events.forEach(event => {
   console.log(" lista presente " + event.category + "  asistencia " + this.asistenciaOestimado(event) +" capacidad "+ event.capacity);
  })
  console.log("upcoming")
 return this.eventBycategory(events);
},
 */

 eventBycategory(eventsByCategory,eventXCategorias){ 
  console.log("mayor capacidad 654")  
  eventsByCategory.forEach(event => {
    if(eventXCategorias.length == 0){
     console.log("Array Vacio")
      eventXCategorias.push({category: event.category,
      revenues: (event.price * this.asistenciaOestimado(event)),
      assistance: this.asistenciaOestimado(event),
      porcentajeAsistencia : 0, 
      capacity : event.capacity,
    
    });
  
    }else {   console.log("mayor capacidad 654")  
      if(this.verificarExiste(eventXCategorias, event)){
        console.log("verdadero")
        
      }else{
        console.log("falso" )
        eventXCategorias.push({category: event.category,
          revenues: (event.price * this.asistenciaOestimado(event)),
          assistance: this.asistenciaOestimado(event),
         
          porcentajeAsistencia : 0, 
          capacity : event.capacity,
        });
        console.log(event);
      }
    
    } 
       
  });

  
      for (const event of eventXCategorias) {
           event.porcentajeAsistencia =  (event.assistance *100) / event.capacity 
        /*   console.log(event.estimate + " " + event.capacity);
          result +=  " " +event.category + " $" + event.revenues + " " +  event.porcentajeAsistencia.toFixed(2) + "% "; */
      }
  
    return eventXCategorias;
},

verificarExiste(eventos, evento){
  let band = false;
  let asistencia = 0;
  eventos.forEach(event => {
    if(event.category === evento.category){
      console.log( "categorias iguales: "+ event.category + " " +evento.category)
      event.revenues += (evento.price *this.asistenciaOestimado(evento));
      console.log("asistencia Acumulada " + event.assistance +" " + this.asistenciaOestimado(evento))
      asistencia=this.asistenciaOestimado(evento);
      event.assistance += asistencia;
      console.log("asistencia Acumulada " + event.assistance +" " + this.asistenciaOestimado(evento))
      event.capacity += evento.capacity;
      band= true;
 
    }
    
  })
  return band;
},


/* pasamos por referencia el tiempo , true para los upcoming y false para los past, devuelve un array con los elementos según su tiempo */
/*  devolverEventosSegunTiempo(tiempo, date, events){
  if(tiempo){
    return events.filter(event => new Date(event.date) > date)
  }else {
    return events.filter(event => new Date(event.date)< date)
  }

}, */


    /* Retorna la asistencia o el estimado */
    asistenciaOestimado(event){
      if(event.hasOwnProperty('assistance')){
        console.log("assistance "+event.assistance)
    return Number(event.assistance);
      }else{
        console.log("estimate "+event.assistance)
    return Number(event.estimate);
      }
    },

  },
    computed:{    
     

     },
    
}).mount('#app')