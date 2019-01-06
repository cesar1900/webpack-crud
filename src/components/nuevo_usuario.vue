<template>
  <div class="container mt-5" id="app">
     <form name='newForm' id="newForm">
            <div class='form-group'>
              <label>Tipo</label>
              <select class='form-control' v-model='tipo'>
                <option value='paciente'>Paciente</option>
                <option value='profesional'>Profesional</option>
              </select>
            </div>
     <div v-if='tipo == "paciente"'>
      <div>
          <h3>Nuevo paciente</h3>
          <router-link to="/"> inicio </router-link>
      </div>
            <label class="form-check-label" for="exampleRadios2">
                  Datos personales
            </label>
          <input type="text" class="form-control my-3" placeholder="NHC (Numero de historia clinica)*" v-model="nuevo_NHC">   
          <input type="text" class="form-control my-3"   placeholder="Nombre *" v-model="nuevo_nombre">
          <input type="text" class="form-control my-3"   placeholder="1er Apellido *" v-model="nuevo_apellido1">
          <input type="text" class="form-control my-3"   placeholder="2do Apellido" v-model="nuevo_apellido2">
          <div class="form-check">
           <input class="form-check-input" type="radio" name="exampleRadios"  value="Masculino"  v-model="nuevo_genero">
             <label class="form-check-label" for="exampleRadios1">
              Masculino
             </label>
          </div>
          <div class="form-check">
               <input class="form-check-input" type="radio" name="exampleRadios"   value="Femenino" v-model="nuevo_genero">
               <label class="form-check-label" for="exampleRadios2">
                 Femenino
               </label>
          </div>
          <input type="text" class="form-control my-3"   placeholder="Fecha de nacimiento" v-model="nuevo_fecha_nacimiento">
    
          <input type="text" class="form-control my-3"   placeholder="Numero de identificacion" v-model="nuevo_identificacion">
          <label class="form-check-label" for="exampleRadios2">
                  Direccion
          </label>
          <input type="text" class="form-control my-3"   placeholder="Direccion" v-model="nuevo_direccion">
           
          <input type="text" class="form-control my-3"   placeholder="Barrio " v-model="nuevo_barrio">
           
          <input type="text" class="form-control my-3"   placeholder="Ciudad" v-model="nuevo_ciudad">
    
          <input type="text" class="form-control my-3"   placeholder="Departamento" v-model="nuevo_departamento">
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
             <div class="mt-3">
             
              <ul>
                  <li v-for="paciente in pacientes">
                      <div class="alert alert-primary" role="alert">
                        {{paciente.NHC}}
                         <small>{{paciente.nombre}}</small>
                      </div>   
                     
                      
                  </li>
              </ul>
          </div>
         </div>
        
         <div v-if='tipo == "profesional"'>
          <div>
          <h3>Nuevo profesional</h3>
          <router-link to="/"> inicio </router-link>
      </div>
            <label class="form-check-label" for="exampleRadios2">
                  Datos personales
            </label>
           <input type="text" class="form-control my-3" placeholder="Nº tarjeta profesional *" v-model="nuevo_tarjeta">   
          <input type="text" class="form-control my-3"   placeholder="Nombre *" v-model="nuevo_nombre_pr">
          <input type="text" class="form-control my-3"   placeholder="1er Apellido *" v-model="nuevo_apellido1_pr">
          <input type="text" class="form-control my-3"   placeholder="2do Apellido" v-model="nuevo_apellido2_pr">
          <div class="form-check">
           <input class="form-check-input" type="radio" name="exampleRadios"  value="Masculino"  v-model="nuevo_genero_pr">
             <label class="form-check-label" for="exampleRadios1">
              Masculino
             </label>
          </div>
          <div class="form-check">
               <input class="form-check-input" type="radio" name="exampleRadios"   value="Femenino" v-model="nuevo_genero_pr">
               <label class="form-check-label" for="exampleRadios2">
                 Femenino
               </label>
          </div>
          <input type="text" class="form-control my-3"   placeholder="Fecha de nacimiento" v-model="nuevo_fecha_nacimiento_pr">
    
          <input type="text" class="form-control my-3"   placeholder="Numero de identificacion" v-model="nuevo_identificacion_pr">
           <select class="form-control form-control-sm" v-model="nuevo_tipo_pr">
              <option value="medico" >Medico</option>
              <option value="enferemro">Enfermero</option>
              <option value="administrativo">Administrativo</option>
         </select>
          <label class="form-check-label" for="exampleRadios2">
                  Direccion
          </label>
          <input type="text" class="form-control my-3"   placeholder="Direccion" v-model="nuevo_direccion_pr">
           
          <input type="text" class="form-control my-3"   placeholder="Barrio " v-model="nuevo_barrio_pr">
           
          <input type="text" class="form-control my-3"   placeholder="Ciudad" v-model="nuevo_ciudad_pr">
    
          <input type="text" class="form-control my-3"   placeholder="Departamento" v-model="nuevo_departamento_pr">
          <br><br>
          <button class="btn btn-primary" v-on:click="agregar_profesional">Agregar profesional</button>
         </div>
        </form>
      </div>
</template>

<script>
export default {
  
  data () {

    return {
        pacientes: [],
        profesional:[],
        nuevo_NHC: '',
        nuevo_nombre: '', nuevo_apellido1: '',nuevo_apellido2: '',
        nuevo_genero: '', nuevo_fecha_nacimiento: '', nuevo_identificacion: '',
        nuevo_direccion: '', nuevo_barrio: '', nuevo_ciudad: '',
        nuevo_departamento: '', nuevo_nombre_aseguradora: '',
        nuevo_tipo_aseguradora: '', nuevo_numero_tarjeta: '',

        nuevo_tarjeta: '',
        nuevo_nombre_pr: '', nuevo_apellido1_pr: '',nuevo_apellido2_pr: '',
        nuevo_genero_pr: '', nuevo_fecha_nacimiento_pr: '', nuevo_identificacion_pr: '',
        nuevo_tipo_pr: '', nuevo_direccion_pr: '', nuevo_barrio_pr: '', nuevo_ciudad_pr: '',
        nuevo_departamento_pr: '',
        paciente: true,
        tipo: ''
    }
  },
methods:{
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
                       localStorage.setItem('usuarios-vue', JSON.stringify(this.usuarios));
                       swal('Guardado','los datos del paciente se guardaron','success');
           }
            
       },
agregar_profesional(){
           this.pacientes.push(
                   {
                       tarjeta_pr: this.nuevo_tarjeta, 
                       nombre_pr: this.nuevo_nombre_pr,
                       apellido1_pr: this.nuevo_apellido1_pr,
                       apellido2_pr: this.nuevo_apellido2_pr,
                       genero_pr: this.nuevo_genero_pr,
                       fecha_nacimiento_pr: this.nuevo_fecha_nacimiento_pr,
                       identificacion_pr: this.nuevo_identificacion_pr,
                       tipo_pr: this.nuevo_tipo_pr,
                       direccion_pr: this.nuevo_direccion_pr,
                       barrio_pr: this.nuevo_barrio_pr,
                       ciudad_pr: this.nuevo_ciudad_pr,
                       departamento_pr: this.nuevo_departamento_pr,
                       
                   }
                    );
           if(this.tarjeta_pr===''){
               swal('Falta el Nº de tarjeta','Es un dato obligatorio','warning');
           } else if(this.nuevo_nombre_pr===''){
                swal('Falta el nombre','Es un dato obligatorio','warning');
           }else if(this.nuevo_apellido1_pr===''){
               swal('Falta el 1er apellido','Es un dato obligatorio','warning');
           }else{
                       this.nuevo_tarjeta = '';
                       this.nuevo_nombre_pr = '';
                       this.nuevo_apellido1_pr = '';
                       this.nuevo_apellido2_pr = '';
                       this.nuevo_genero_pr = '';
                       this.nuevo_fecha_nacimiento_pr = '';
                       this.nuevo_identificacion_pr = '';

                       this.nuevo_direccion_pr = '';
                       this.nuevo_barrio_pr = '';
                       this.nuevo_ciudad_pr = '';
                       this.nuevo_departamento_pr = '';
                      
                       localStorage.setItem('usuarios-vue', JSON.stringify(this.usuarios));
                       swal('Guardado','los datos del profesional se guardaron','success');
           }
            
       },
created:function(){
     let datosDB = JSON.parse(localStorage.getItem('usuarios-vue')); 
     if(datosDB === null)
     {
         this.usuarios =[];
          
     }else{
         this.usuarios =datosDB;
     }
    }
}
}
</script>


<style scoped>

</style>
