<template>
<section class="container mx-auto bg-gray-200 py-10 h-screen">

<!-- Barra separadora -->

    <div class="w-1/2 mx-auto flex items-center mb-10 justify-center">
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -mr-3">

        </div>
        <div class="w-2/3 h-3 bg-blue-300 inline-block">

        </div>
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -ml-3">

        </div>
    </div>

<!-- Título y tabla de validador -->

     <h2 class="text-4xl font-bold text-center">{{$route.params.validatorName}}</h2>
<div class="flex flex-col items-center px-6 mt-10 bg-gray-200">
<table class="sm:w-1/2 table-auto border-2 border-blue-500 mx-auto text-center">
    <tbody>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Validator Name:</th>
            <td>{{$route.params.validatorName}}</td>
        </tr>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Epoch:</th>
            <td>{{$route.params.currentEpoch}}</td>
        </tr>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Total Stake:</th>
            <td>{{$route.params.totalStake}}</td>
        </tr>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Delegators:</th>
            <td>{{$route.params.delegators}}</td>
        </tr>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Current Sign:</th>
            <td>{{$route.params.currentSign}}%</td>
        </tr>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Lifetime Rewards:</th>
            <td>{{$route.params.lifetimeRewards}}</td>
        </tr>
    </tbody>
</table>

<!-- Barra separadora -->

</div>
    <div class="w-1/2 mx-auto flex items-center mb-10 mt-10 justify-center">
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -mr-3">

        </div>
        <div class="w-2/3 h-3 bg-blue-300 inline-block">

        </div>
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -ml-3">

        </div>
    </div>
</section>


  
</template>

<script>
export default {

}
</script>

<style>

</style>