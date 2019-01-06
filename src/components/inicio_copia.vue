<template>

  <div  class="container mt-5" id="app">
   <h3>CRUD USUARIOS</h3>
 <label class="form-check-label" for="exampleRadios2">
                  Datos personales
            </label>
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="NHC (Numero de historia clinica)*" v-model="nuevo_NHC">
           
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="Nombre *" v-model="nuevo_nombre">
           
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="1er Apellido *" v-model="nuevo_apellido1">
    
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="2do Apellido" v-model="nuevo_apellido2">
          <div class="form-check">
           <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Masculino"  v-model="nuevo_genero">
             <label class="form-check-label" for="exampleRadios1">
              Masculino
             </label>
          </div>
          <div class="form-check">
               <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Femenino" v-model="nuevo_genero">
               <label class="form-check-label" for="exampleRadios2">
                 Femenino
               </label>
          </div>
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="Fecha de nacimiento" v-model="nuevo_fecha_nacimiento">
    
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="Numero de identificacion" v-model="nuevo_identificacion">
          <label class="form-check-label" for="exampleRadios2">
                  Direccion
          </label>
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="Direccion" v-model="nuevo_direccion">
           
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="Barrio " v-model="nuevo_barrio">
           
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="Ciudad" v-model="nuevo_ciudad">
    
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="Departamento" v-model="nuevo_departamento">
          <label class="form-check-label" for="exampleRadios2">
                  Listado aseguradoras
          </label>
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="Nombre aseguradora" v-model="nuevo_nombre_aseguradora">
           
          <select class="form-control form-control-sm" v-model="nuevo_tipo_aseguradora">
              <option value="salud" >Salud</option>
              <option value="familiar">Familiar</option>
              <option value="dental">Dental</option>
         </select>
          <input type="text" class="form-control my-3" id="exampleFormControlInput1" placeholder="Numero tarjeta" v-model="nuevo_numero_tarjeta">
           
          <br><br>
          <button class="btn btn-primary" v-on:click="agregar_paciente">Agregar Paciente</button>
          <button type="button"  class="btn btn-primary" @click="nuevoPaciente">Nuevo Paciente</button>
         <div class="mt-3">
             
              <table class="table table-striped">
  <thead>
    <tr>
      <th>Index</th>
      <th>NHC</th>
      <th>nombre</th>
      <th>acciones</th>
    </tr>
  </thead>
  <tbody>

      <tr v-for="(paciente,index) in pacientes">
          <td v-text=index></td>
          <td v-text="paciente.NHC"></td>
          <td v-text="paciente.nombre"></td>     
          <td>
              <button class="btn btn-success">ver</button>
              <button class="btn btn-warning">editar</button>
              <button class="btn btn-danger">eliminar</button>
          </td>  
      </tr>
  </tbody>
</table>
              
          </div>
  </div>
</template>

<script>
export default {
  name: 'inicio',
  data () {

    return {
        pacientes: [],
        nuevo_NHC: '',
        nuevo_nombre: '', nuevo_apellido1: '',nuevo_apellido2: '',
        nuevo_genero: '', nuevo_fecha_nacimiento: '', nuevo_identificacion: '',
        nuevo_direccion: '', nuevo_barrio: '', nuevo_ciudad: '',
        nuevo_departamento: '', nuevo_nombre_aseguradora: '',
        nuevo_tipo_aseguradora: '', nuevo_numero_tarjeta: '',
        paciente: true
    }
  },
 methods: {
agregar_paciente(){
           this.pacientes.push(
                   {
                       NHC: this.nuevo_NHC, 
                       nombre: this.nuevo_nombre,
                       apellido1: this.nuevo_apellido1,
                       apellido2: this.nuevo_apellido2,
                       genero: this.nuevo_genero,
                       fecha_nacimiento: this.nuevo_fecha_nacimiento,
                       identificacion: this.nuevo_identificacion,
                       direccion: this.nuevo_direccion,
                       barrio: this.nuevo_barrio,
                       ciudad: this.nuevo_ciudad,
                       departamento: this.nuevo_departamento,
                       nombre_aseguradora: this.nuevo_nombre_aseguradora,
                       tipo_aseguradora: this.nuevo_tipo_aseguradora,
                       numero_tarjeta: this.nuevo_numero_tarjeta
                   }
                    );
           if(this.nuevo_NHC===''){
               swal('Falta el NHC','Es un dato obligatorio','warning');
           } else if(this.nuevo_nombre===''){
                swal('Falta el nombre','Es un dato obligatorio','warning');
           }else if(this.nuevo_apellido1===''){
               swal('Falta el 1er apellido','Es un dato obligatorio','warning');
           }else{ 
                       this.nuevo_NHC = '';
                       this.nuevo_nombre = '';
                       this.nuevo_apellido1 = '';
                       this.nuevo_apellido2 = '';
                       this.nuevo_genero = '';
                       this.nuevo_fecha_nacimiento = '';
                       this.nuevo_identificacion = '';
                       this.nuevo_direccion = '';
                       this.nuevo_barrio = '';
                       this.nuevo_ciudad = '';
                       this.nuevo_departamento = '';
                       this.nuevo_nombre_aseguradora = '';
                       this.nuevo_tipo_aseguradora = '';
                       this.nuevo_numero_tarjeta = '';
                       localStorage.setItem('usuarios-vue', JSON.stringify(this.pacientes));
                       swal('Guardado','los datos del paciente se guardaron','success');
           }
            
       },
    nuevoPaciente () {
      this.$router.push('/paciente');
    },
     created:function(){
     let datosDB = JSON.parse(localStorage.getItem('usuarios-vue')); 
     if(datosDB === null)
     {
         this.pacientes =[];
     }else{
         this.pacientes =datosDB;
     }
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
