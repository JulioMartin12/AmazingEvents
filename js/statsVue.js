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
            mayor:{category:'',
                    porcentaje:0,}
           
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
        this.upcomingEvent = this.devolverEventosSegunTiempo(true,this.currentDate,this.datas);
        this.pasEvent = this.devolverEventosSegunTiempo(false,this.currentDate,this.datas)
        console.log(this.pasEvent)
        this.obtenerMayor();
  
     })
     .catch(error => console.log(error.message))
 },

 extraerEventos(){

 },

devolverEventosSegunTiempo(tiempo, date, events){
    if(tiempo){
      return events.filter(event => new Date(event.date) > date)
    }else {
      return events.filter(event => new Date(event.date)< date)
    }
  
  },

  obtenerMayor(){
    this.pasEvent.forEach(element => {
        console.log((element.assistance*100)/element.capacity)
        
    });
  }


    },
    computed:{
   
        retornarPorcentaje(){
        
            this.pasEvent.forEach(element => {
                console.log((element.assistance*100)/element.capacity);
                if(this.mayor.porcentaje < ((element.assistance*100)/element.capacity)){
                  this.mayor.category = element.category;
                  this.mayor.porcentaje = ((element.assistance*100)/element.capacity);
                }
            });
           return  this.mayor.category + " " + this.mayor.porcentaje ;
        }

           },
    
}).mount('#app')