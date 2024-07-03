<template>
    <div class="bar">
        <span id="value">R$ {{ value }}</span>
    
        <div :style="{ height: barSize }" class="line">
            <img id="icon"  :src="getImageUrl()" />
        </div>
    </div>

</template>

<script setup>

const props = defineProps({
    imgFileName: String,
    barSize: String,
    value: Number
})

console.log(props.barSize)


function getImageUrl() {
  return new URL(`../assets/home/dashboard/dash-${props.imgFileName}.png`, import.meta.url).href
}

</script>

<style>
.home .chart .bar {
    display: flex;
    flex-direction: column;
}


.home .chart .bar .line { 
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    background-color: #5F43F4;
    border-radius: 3px;
    padding-left: 15px;
    padding-right: 15px;
}

.home .chart .bar #value {
    align-self: center;
    margin-top: auto;
    font-weight: bold;
    font-size: 22px;
    
}

.home .chart .bar #icon {
    margin-top: auto;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 40px;
    height: 40px;
}

</style>