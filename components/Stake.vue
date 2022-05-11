<template>
<section id="stake" class="container mx-auto flex flex-col items-center py-10 bg-gray-200">
        <div class="w-1/2 mx-auto flex items-center mb-10 justify-center">
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -mr-3">

        </div>
        <div class="w-2/3 h-3 bg-blue-300 inline-block">

        </div>
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -ml-3">

        </div>
    </div>

         <h2 class="text-4xl font-bold text-center">Stake with us!</h2>

    <div class="border-2 p-5 bg-gray-400 flex flex-col items-center border-blue-500 w-2/3 max-w-md mt-5 sm:w-1/2">
        <img src="../static/Harmony-Letters-Logo.png" alt="Harmony Logo">
        <p class="text-gray-50 font-bold">APR {{$store.state.stakeAPR}}%</p>
        <a href="https://staking.harmony.one/validators/mainnet/one1p7hpxunckupkdwsytjetnd95tqe3pnsccpw4uu" target="_blank" class="bg-green-300 p-5 rounded-lg mt-10">Stake</a>
    </div>
</section>
</template>


<script>

</script>


<style scoped>



</style>