<template lang="html">

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <sedesPrincipales></sedesPrincipales>
      </div>
      <div class="col-md-4">
        <listaAtletas></listaAtletas>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import listaAtletas from "./listaAtletas";
import sedesPrincipales from "./sedesPrincipales";

  export default  {
    name: 'contenido',
    data() {
      return {
      }
    },
    props: {
    msg: String
    },
    methods: {
    },
    components: {
     listaAtletas,
     sedesPrincipales
    }
}
</script>
