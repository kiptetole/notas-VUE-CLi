<template lang="html">
  <div>
    <br/>
    <p class="display-4 text-left">ProyectoVUE.js - Jose Notario Millan</p>
    <entradaNota @anadirnota="indexar"></entradaNota>
    <br/>
    <hr/>
    <div>
      hay un total de {{todo.length}} notas
    </div>
    <ul class="list-group">
      <li v-for="(nota,index) in todo" v-bind:key="index" class="list-group-item">
        <detalleNota v-bind:msg="nota.msg" v-bind:prioridad="nota.prioridad" v-bind:fecha="nota.fecha"></detalleNota>
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
      indexar: function (msg, prioridad, fecha) {
        var nota={
          msg: msg,
          prioridad: prioridad,
          fecha: fecha
        }
        this.todo.push(nota);
        this.guardarInformacion();
      },
      guardarInformacion: function(){
          const infoJSON = JSON.stringify(this.todo)
          localStorage.setItem('todo', infoJSON)
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

