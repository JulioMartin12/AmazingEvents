//destructurar
const { createApp } = Vue;

createApp({
    data(){
        return {
            urlApi:'https://mindhub-xj03.onrender.com/api/amazing',
            datas:[],
            backupData:[],
            evento:undefined ,
                   
            
        }
    }, 
    created(){
    this.traerDatos()
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
        this.cargarDetails(this.datas)
     })
     .catch(error => console.log(error.message))
 },

cargarDetails (listaEventos){
    let queryString  = location.search;
   let param = new URLSearchParams(queryString);
  this.evento = listaEventos.find(events =>
    events._id == param.get('id')); 
  console.log(" Evento " +  param.get('id') + " "+ card)
 
  },
  
 asistenciaOestimado(event){
    if(event.hasOwnProperty('assistance')){
  return event.assistance;
    }else{
  return event.estimate;
    }
  },
           },
    
}).mount('#app')