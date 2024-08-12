<template>
    <div class="top-bar">
      <div class="first-agroupament">
        <div>Tipo</div>
        <div>|</div>
        <div>Categoria</div>
        <div>|</div>
        <div>Nome</div>
      </div>

      <div>|</div>
      <div>Forma de pagamento</div>
      <div>|</div>
      <div>Valor</div>
      <div>|</div>
      <div>Parcela</div>
      <div>|</div>
      <div>Data</div>
      <div>|</div>
    </div>
</template>
    
    
<script setup>
    
</script>

<style scoped>
  .top-bar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #FFF;
    border-radius: 41px;
    color: #25282c7b;
    padding: 5px 10px;
  }

  .first-agroupament {
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
</style>