<template lang="html">

  <div>
    <entradaNota @anadirnota="indexar"></entradaNota>
    <br/>
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
      indexar: function (nota) {
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

