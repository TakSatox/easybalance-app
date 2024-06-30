<template>
    <main>
        <div class="top-card">
            <HomeDashboardMoneyCard img-filename="icon-balance.png" title="Saldo" />
            <HomeDashboardMoneyCard img-filename="icon-income.png" title="Receitas" />
            <HomeDashboardMoneyCard img-filename="icon-expense.png" title="Despesas" />
        </div>

        <div class="rigth-card">
            <HomeDashboardMoneyCard img-filename="icon-income.png" title="Janeiro" />
            <HomeDashboardMoneyCard img-filename="icon-income.png" title="Fevereiro" />
            <HomeDashboardMoneyCard img-filename="icon-income.png" title="Março" />
            <HomeDashboardMoneyCard img-filename="icon-income.png" title="Abril" />
            <HomeDashboardMoneyCard img-filename="icon-income.png" title="Maio" />
        </div>
    </main>
</template>


<script setup>
import '@/css/home-dashboard.css'
import HomeDashboardMoneyCard from './HomeDashboardMoneyCard.vue';


</script>