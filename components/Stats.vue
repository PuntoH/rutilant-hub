<template>
<section id="stats" class="container mx-auto bg-gray-200 py-10 ">
    <div class="w-1/2 mx-auto flex items-center mb-10 justify-center">
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -mr-3">

        </div>
        <div class="w-2/3 h-3 bg-blue-300 inline-block">

        </div>
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -ml-3">

        </div>
    </div>
     <h2 class="text-4xl font-bold text-center">Check our stats <span class="animate-pulse bg-blue-500 bg-clip-text text-transparent">live!</span></h2>
<div class="flex flex-col-reverse sm:flex-row items-center px-6 mt-10 bg-gray-200">
<table class="sm:w-1/2 table-auto border-2 border-blue-500 text-center">
    <tbody>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Validator Name:</th>
            <td>{{validatorName}}</td>
        </tr>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Epoch:</th>
            <td>{{currentEpoch}}</td>
        </tr>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Total Stake:</th>
            <td>{{totalStake}}</td>
        </tr>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Delegators:</th>
            <td>{{delegators}}</td>
        </tr>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Current Sign:</th>
            <td>{{currentSign}}%</td>
        </tr>
        <tr class="border-2 border-blue-500">
            <th class="border-r-2 border-blue-500">Lifetime Rewards:</th>
            <td>{{lifetimeRewards}}</td>
        </tr>
    </tbody>
</table>

<div class="sm:w-1/2 text-center">
<ul class="list-disc list-inside text-xl font-bold my-10">
    <li>Trusted by many</li>
    <li>Governance facilitator</li>
    <li>Reliable</li>
    <li>100% Transparency</li>
    <li>Support 24/7</li>
</ul>
</div>
</div>
</section>
</template>


<script>
    export default {
        mounted() {
            this.getName();
            this.getNamel();
        },
        data() {
            return {
                validatorName: "",
                delegatorsData: null,
                validatorData: null,
                currentEpoch: null,
                totalStake: null,
                delegators: null,
                currentSign: null,
                lifetimeRewards: null,
            }
        },
        methods: {
        async getName(){
            const res = await fetch('https://api.s0.t.hmny.io/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: `hmy_getValidatorInformation`,
      params: [
          "one1p7hpxunckupkdwsytjetnd95tqe3pnsccpw4uu",
      ],
      id: 1
    })
  });
            const validatorData = await res.json();
            this.validatorData = validatorData;
            this.currentEpoch = validatorData.result['current-epoch-performance'].epoch;
            this.currentSign = validatorData.result['current-epoch-performance']['current-epoch-signing-percent']['current-epoch-signing-percentage'] * 100;
            this.totalStake = parseInt(validatorData.result['epos-winning-stake'] / 10**18);
            this.lifetimeRewards = parseInt(validatorData.result.lifetime['reward-accumulated'] / 10**18);
            this.validatorName = validatorData.result.validator.name

            let apr = parseFloat(validatorData.result.lifetime.apr * 100).toFixed(2);
            this.$store.commit('defineAPR', apr);
    },
            async getNamel(){
            const res = await fetch('https://api.s0.t.hmny.io/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: `hmy_getDelegationsByValidator`,
      params: [
          "one1p7hpxunckupkdwsytjetnd95tqe3pnsccpw4uu",
      ],
      id: 1
    })
  });
            const delegatorsData = await res.json();
            this.delegatorsData = delegatorsData;
            this.delegators = delegatorsData.result.length;

    }
        },
    }
</script>


<style scoped>


</style>