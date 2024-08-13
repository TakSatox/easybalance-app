<template>
<div class="transaction-type-container">
    <div class="images-container">
      <img :src="imgTypeUrl" alt="">
      <img :src="imgCategoryeUrl" alt="">
      <p>{{ name }}</p>
    </div>


    <div class="info-container">
      <p>{{ paymentType }}</p>

      <p>{{ currency }} {{ value }}</p>

      <p>{{ portion }}</p>

      <p>{{ date }}</p>
    </div>

    <!-- TODO: Change here to coreect edit icon -->
    <div class="icon">
      <img src="../assets/home/arrow-down.png">
    </div>
</div>
</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        imgType: String,
        imgCategory: String,
        name: String,
        paymentType: String,
        value: String,
        portion: String,
        date: String
    })

    const currency = ref("R$")

    const imgTypeUrl = ref('')
    const imgCategoryeUrl = ref('')


    onMounted(() => {
        imgTypeUrl.value = getImageTypeUrl()
        imgCategoryeUrl.value = getImageCategoryeUrl()
    });

    function getImageTypeUrl() {
        return new URL(`../assets/home/${props.imgType}`, import.meta.url).href
    }

    function getImageCategoryeUrl() {
        return new URL(`../assets/home/${props.imgCategory}`, import.meta.url).href
    }
    
</script>

<style scoped>

.icon {
  display: flex;
  align-items: center;
}

.info-container {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  .transaction-type-container .info-container p {
    margin-left: 150px;
  }

  .transaction-type-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #FFF;
    padding: 10px 10px;
    border-radius: 24px;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    box-shadow: 0 3.49px 7px #4a556854;
  }

  .transaction-type-container p {
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;
    
  }  

  .images-container {
    display: flex;
  }

  .images-container img {
    width: 60px;
    margin-right: 10px;
  }
</style>