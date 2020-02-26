<template lang="html">

  <div class="sedesPrincipales">
    <div class="row">
      <div class="col-sm-8">
        <h4 class="text-left">Atenas 1896</h4>
        <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere mauris nec augue mattis, 
          sit amet viverra mauris interdum. Integer vehicula ac lorem at porttitor. Sed ut nisi ac lacus 
          tincidunt finibus ultrices vel massa. Sed vel suscipit libero. Fusce facilisis nibh in dui gravida, 
          at venenatis lectus rhoncus. Proin mattis felis at odio bibendum aliquet non vitae urna. In convallis nibh ultrices sapien porta, 
          et blandit arcu efficitur.</p>
      </div>
      <div class="col-sm-4">
        <img src="../assets/atenas1896.jpeg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="Atenas 1896">
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sm-4">
        <img src="../assets/paris1900.jpeg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="Paris 1900">
      </div>
      <div class="col-sm-8">
        <h4 class="text-left">Paris 1900</h4>
        <p class="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere mauris nec augue mattis, 
          sit amet viverra mauris interdum. Integer vehicula ac lorem at porttitor. Sed ut nisi ac lacus 
          tincidunt finibus ultrices vel massa. Sed vel suscipit libero. Fusce facilisis nibh in dui gravida, 
          at venenatis lectus rhoncus. Proin mattis felis at odio bibendum aliquet non vitae urna. In convallis nibh ultrices sapien porta, 
          et blandit arcu efficitur.</p>
      </div>
    </div>
  </div>
  
</template>

<script lang="js">

  export default  {
    name: 'sedesPrincipales',
    data() {
      return {
      }
    },
    props: {
    msg: String
    },
    methods: {
  }
}
</script>
