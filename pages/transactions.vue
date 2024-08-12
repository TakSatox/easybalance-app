<template>
  <div style="margin-left: 270px;"> </div>
  <div class="container">
    
    <div class="status-card">
      <MoneyCard  
      v-for="statusCard in statusCards" 
      :key="statusCard.id" 
      :img-filename="statusCard.imgFilename"
      :title="statusCard.title"
      :value="statusCard.value" 
      />
    </div>

    <TopBar class="top-bar"/>

    <div class="transaction-type-card-container">
      
      <TransactionTypeCard
        v-for="transaction in transactions"
        :key="transaction.id"
        :imgType="transaction.imgType"
        :imgCategory="transaction.imgCategory"
        :name="transaction.name"
        :paymentType="transaction.paymentType"
        :value="transaction.value"
        :portion="transaction.portion"
        :date="transaction.date"
      />

    </div>

  </div>
        
</template>


<script setup>

const statusCards =  ref([
    {
        imgFilename: "income.png",
        // TODO comes from API
        title: "Receita",
        value: "2700.50"
    },
    {
        imgFilename: "income.png",
        // TODO comes from API
        title: "Cartao de Credito",
        value: "50.00"
    },
    {
        imgFilename: "income.png",
        // TODO comes from API
        title: "Cartao de Débito",
        value: "50.00"
    },
    {
        imgFilename: "income.png",
        // TODO comes from API
        title: "Dinheiro",
        value: "6000.00"
    }
])

const transactions =  ref([
    {
      imgType: "income.png",
      imgCategory: "income.png",
      // TODO comes from API
      name: "Pizza",
      paymentType: "Dinheiro",
      value: "50,50",
      portion: "1/1",
      date: "Jan 2023"
    },
    {
      imgType: "income.png",
      imgCategory: "income.png",
      // TODO comes from API
      name: "Pizza",
      paymentType: "Dinheiro",
      value: "50,50",
      portion: "1/1",
      date: "Jan 2023"
    },
    {
      imgType: "income.png",
      imgCategory: "income.png",
      // TODO comes from API
      name: "Pizza",
      paymentType: "Dinheiro",
      value: "50,50",
      portion: "1/1",
      date: "Jan 2023"
    },
    {
      imgType: "income.png",
      imgCategory: "income.png",
      // TODO comes from API
      name: "Pizza",
      paymentType: "Dinheiro",
      value: "50,50",
      portion: "1/1",
      date: "Jan 2023"
    },
    {
      imgType: "income.png",
      imgCategory: "income.png",
      // TODO comes from API
      name: "Pizza",
      paymentType: "Dinheiro",
      value: "50,50",
      portion: "1/1",
      date: "Jan 2023"
    },
    {
      imgType: "income.png",
      imgCategory: "income.png",
      // TODO comes from API
      name: "Pizza",
      paymentType: "Dinheiro",
      value: "50,50",
      portion: "1/1",
      date: "Jan 2023"
    },
])

useHead({
  titleTemplate: 'EasyBalance - Transações'
})
</script>

<style>
  .transaction-type-card-container {
    width: 100%;
    overflow: scroll;
    flex-wrap: wrap;
    background-color: #FFF;
    height: 50vh;
  }

  .top-bar {
    margin-bottom: 10px;
  }

  /* Right cards */
 .status-card {
    display: flex;
    justify-content: center;
}

 .status-card .money-card {
    justify-content: center;
    display: flex;
    background-color: #FFF;
    width: 300px;
    border: 1px solid #DDDDDD;
    border-radius: 24px;
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    margin: 50px 10px;
    box-shadow: 0px 3px 7px #4a556850;
    align-items: center;
  }

 .status-card img {
    width: 60px;
}

 .status-card .money-card .text {
    display: flex;
    align-self: center;
    margin-left: 20px;
    font-weight: bold;
}

 .status-card .money-card .text #title {
    color: #001733;
    font-size: 23px;
    margin-right: 20px;
}

 .status-card .money-card .text #value {
    color: #25282C;
    font-size: 20px;
    width: 130px;
    display: flex;
    align-items: center;
}

</style>