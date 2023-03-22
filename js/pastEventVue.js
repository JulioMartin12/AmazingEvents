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
            categoriasSeleccionadas: [],
            mensaje:"",
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
        console.log(this.currentDate)
        this.datas = this.extraerEventosPasados(datos.events);
        this.backupData = this.datas;
        this.extraerCategorias(this.backupData);
       ;
     })
     .catch(error => console.log(error.message))
 },

 extraerEventosPasados(array){
   return array.filter(element => new Date(element.date) < this.currentDate);
 },

 extraerCategorias(array){
    array.forEach(element => {
        if(!this.categorias.includes(element.category)){
            this.categorias.push(element.category);
        }
        
    });
    console.log(this.categorias);

 }, 
 cargarMensaje(){
    this.mensaje="Mejore la busqueda, no se encontró ninguna coincidencia"
   },
 
    },
    computed:{

           filtroDoble(){
            let primerFiltro = this.backupData.filter(event => (event.name.toLowerCase().includes(this.texto.toLowerCase()) || event.description.toLowerCase().includes(this.texto.toLowerCase()) ));

            if(this.categoriasSeleccionadas.length !=0){
                this.datas = primerFiltro.filter(event =>
                    this.categoriasSeleccionadas.includes(event.category));
            }else{
                this.datas = this.backupData;
            }
            
        },

           },
    
}).mount('#app')