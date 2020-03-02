<template lang="html">

  <div class="conatiner-fluid">
    <div class="row">
      <div class="col-1">
        <img class="completo icon" v-if="hecho == true" src="../assets/check2.png" @click="hacer">
        <img class="incomp icon" v-else src="../assets/check1.png" @click="hacer">
      </div>
      <div class="col-10 d-flex justify-content-start" v-bind:class="{checked: hecho}">
        <p class="d-inline display-4 ">{{msg}}</p>
      </div>
      <div class="col-1">
        <img class="borrar icon" src="../assets/borrar.png" @click="borrar">
      </div>
    </div>
    <div class="row">
      <div class="col-3 d-flex justify-content-start">
				<button v-if="prioridad=='0'" @click="prBaja" class="pr baja col-xs-12">Baja</button>
        <button v-else @click="prBaja" class="pr disable col-xs-12">Baja</button>
        <button v-if="prioridad=='1'" @click="prNormal" class="pr normal col-xs-12">Normal</button>
        <button v-else @click="prNormal" class="pr disable col-xs-12">Normal</button>
        <button v-if="prioridad=='2'" @click="prAlta" class="pr alta col-xs-12">Alta</button>
        <button v-else @click="prAlta" class="pr disable col-xs-12">Alta</button>
      </div>
      <div class="col-5 d-flex justify-content-start">
        <p class="d-inline">{{fecha}}</p>
      </div>
    </div>
  </div>

</template>

<script lang="js">

  export default  {
    name: 'detalle-socio',
    props: ['msg', 'fecha', 'prioridad', 'hecho'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      hacer: function () {
        this.$emit("hecho", !(this.hecho), this.fecha)
      },
      borrar: function() {
        this.$emit("borrar", this.fecha)
      },
      prBaja: function(){
        this.$emit("prBaja", this.fecha, 0)
      },
      prNormal: function(){
        this.$emit("prNormal", this.fecha, 1)
      },
      prAlta: function(){
        this.$emit("prAlta", this.fecha, 2)
      },
    },
    computed: {

    }
}


</script>

<style>
.info {
  display: inline;
}

.checked {
    color: #28a745;
    text-decoration: line-through;
}

.icon{
  height: 3rem;
  width: 3rem;
}
.pr.baja,.pr.normal,.pr.alta{
		-moz-border-radius:6px;
		-webkit-border-radius:6px;
		border-radius:6px;
		display:inline-block;
		cursor:pointer;
		color:black;
		font-size:10px;
		font-weight:bold;
		padding:6px 15px;
		text-decoration:none;
	}
	.disable{
		background-color:#dadada;
		-moz-border-radius:6px;
		-webkit-border-radius:6px;
		border-radius:6px;
		border:1px solid #464545;
		display:inline-block;
		cursor:pointer;
		color:white;
		font-family:Arial;
		font-size:10px;
		font-weight:bold;
		padding:6px 15px;
		text-decoration:none;
	}
	.pr.baja{
		background-color:#17a2b8;
		border:1px solid #17a2b8;
	}
	.pr.normal{
		background-color:#375a7f;
		border:1px solid #375a7f;
	}
	.pr.pr.alta{
		background-color:#e74d3d;
		border:1px solid #e74d3d;
  }
</style>