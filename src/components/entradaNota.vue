<template lang="html">

  <div>
    <input v-model="nota.msg" @keyup.enter="indexar">
    <button @click="indexar">Añadir</button>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'entrada-datos',
    props: [],
    mounted () {

    },
    data () {
      return {
        nota: {
          msg: "", 
          prioridad: 0,
          fecha: new Date()
        }
      }
    },
    methods: {
      indexar:function() {
        this.$emit("anadirnota", this.nota)

      }
    },
    computed: {

    }
}


</script>

