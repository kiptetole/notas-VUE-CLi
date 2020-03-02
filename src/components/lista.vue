<template lang="html">
  <div>
    <br/>
    <p class="display-4 text-left">ProyectoVUE.js - Jose Notario Millan</p>
    <entradaNota @anadirnota="indexar"></entradaNota>
    <br/>
    <hr/>
    <div>
      hay un total de {{todo.length}} notas y hay {{tareasHechas()}} tareas completadas.
      <button type="button" class="btn btn-success" @click="borrarTareasCompletadas">Borrar las tareas completadas</button>
    </div>
    <br/>
    <ul class="list-group">
      <li v-for="(nota,index) in todo" v-bind:key="index" class="list-group-item">
        <detalleNota v-bind:msg="nota.msg" v-bind:prioridad="nota.prioridad" v-bind:fecha="nota.fecha" v-bind:hecho="nota.hecho" @hecho="hechono" @borrar="borrarNota" 
        @prBaja="cambiaPrioridad" @prNormal="cambiaPrioridad" @prAlta="cambiaPrioridad"></detalleNota>
      </li>
    </ul>
  </div>

</template>

<script lang="js">
import detalleNota from "./detalleNota";
import entradaNota from './entradaNota';

  export default  {
    name: 'listado-socios',
    props: [],
    mounted () {
      if(localStorage.getItem('todo')){
        try{
          this.todo = JSON.parse(localStorage.getItem('todo'))
        }catch(e){
          localStorage.removeItem('todo')
        }
      }
    },
    data () {
      return {
        todo: []
      }
    },
    methods: {
      guardarInformacion: function(){
          const infoJSON = JSON.stringify(this.todo)
          localStorage.setItem('todo', infoJSON)
        },
      indexar: function (msg, prioridad, fecha) {
        var nota={
          msg: msg,
          prioridad: prioridad,
          fecha: fecha,
          hecho: false
        }
        this.todo.push(nota);
        this.guardarInformacion();
      },
      hechono: function(hecho,fecha){
        var nota = 0
        for (let i=0; i<this.todo.length; i++){
          if (this.todo[i].fecha == fecha){
            nota = i;
          }
        }
        this.todo[nota].hecho = hecho
        this.guardarInformacion()
      },
      borrarNota: function(fecha){
        var nota = 0
        for (let i=0; i<this.todo.length; i++){
          if (this.todo[i].fecha == fecha){
            nota = i;
          }
        }
        if (this.todo[nota].hecho){
          this.todo.splice( nota, 1 );
        }
        this.guardarInformacion()
      },
      tareasHechas: function () {
        var result=0;
        for(let i=0;i<this.todo.length;i++){
          if(this.todo[i].hecho){
            result++;
          }
        }
        return result;
      },
      borrarTareasCompletadas: function(){
        for(let i=0; i<this.todo.length; i++){
          if (this.todo[i].hecho){
            this.todo.splice( i, 1 );
          }
        }
      },
      cambiaPrioridad: function (fecha,prioridad) {
        var nota = 0
        for (let i=0; i<this.todo.length; i++){
          if (this.todo[i].fecha == fecha){
            nota = i;
          }
        }
        this.todo[nota].prioridad = prioridad
        this.guardarInformacion()
      }  
    },
    computed: {

    },
    components: {
    detalleNota,
    entradaNota,
  }
}
</script>