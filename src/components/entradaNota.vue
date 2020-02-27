<template lang="html">
  <div>
    <br/>
    <div class="form-row justify-content-center">
      <div class="col-5">
        <input class="form-control" v-model="msg" @keyup.enter="indexar" placeholder="¿Que quieres recordar?">
      </div>
      <div class="col-4 d-flex justify-content-start">
        <button class="btn btn-success" @click="indexar">Añadir Nota</button>
      </div>
    </div>
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
        msg: ""
      }
    },
    methods: {
      indexar:function() {
        this.$emit("anadirnota", this.msg, 0, new Date())
        this.msg = "";
      }
    },
    computed: {

    }
}


</script>

