<template lang="html">
<nav class="navbar navbar-expand-sm navbar-light bg-secondary fixed-top">
  <img src="../assets/aros.svg" style="height: 2.5rem; width: 2.5rem">
  <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/listanotas">lista Notas</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/tokyo2020">Tokyo 2020</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sobre nosotros</a>
      </li>
    </ul>
  </div>
    <form class="form-inline my-2 my-lg-0 justify-content-between">
      <button class="btn btn-success my-2 my-sm-0">Login</button>
      <button class="btn btn-success my-2 my-sm-0">Registro</button>
    </form>
</nav>
</template>

<script lang="js">

  export default  {
    name: 'cabecera',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>
