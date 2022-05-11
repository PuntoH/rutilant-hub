<template>
<section id="tools" class="container mx-auto bg-gray-200">

<!-- Barra separadora-->

        <div class="w-1/2 mx-auto flex items-center mb-10 justify-center">
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -mr-3">

        </div>
        <div class="w-2/3 h-3 bg-blue-300 inline-block">

        </div>
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -ml-3">

        </div>
    </div>

    <h2 class="text-4xl font-bold text-center">Customize your stats</h2>
<div class="flex flex-col items-center px-6 mt-10 bg-gray-200">

<div class="flex flex-col w-1/2 justify-center items-center">
<div>
    <input type="text" placeholder="one address" v-model="oneAddress">
</div>

<div class="mt-5">
    <input type="color" placeholder="Color bordes" value="#ff0000" v-model="tableBorderColor">
    {{tableBorderColor}}
</div>

    <button @click="getValidatorInfo(oneAddress)" class="bg-green-300 p-3 rounded-lg mt-10 w-40 mb-5">Get Stats!</button>

</div>

<table class="w-3/4 sm:w-1/2 table-auto border-2 border-blue-500 text-center">
    <tbody>
    <tr class="border-2 border-blue-500" :style="{borderColor : tableBorderColor}">
        <th class="border-r-2 border-blue-500 w-1/2" :style="{borderColor : tableBorderColor}">Validator Name:</th>
        <td :style="{borderColor : tableBorderColor}">{{validatorName}}</td>
    </tr>
    <tr class="border-2 border-blue-500" :style="{borderColor : tableBorderColor}">
        <th class="border-r-2 border-blue-500" :style="{borderColor : tableBorderColor}">Epoch:</th>
        <td :style="{borderColor : tableBorderColor}"> {{currentEpoch}}</td>
    </tr>
    <tr class="border-2 border-blue-500" :style="{borderColor : tableBorderColor}">
        <th class="border-r-2 border-blue-500" :style="{borderColor : tableBorderColor}">Total Stake:</th>
        <td :style="{borderColor : tableBorderColor}">{{totalStake}}</td>
    </tr>
    <tr class="border-2 border-blue-500" :style="{borderColor : tableBorderColor}">
        <th class="border-r-2 border-blue-500" :style="{borderColor : tableBorderColor}">Delegators:</th>
        <td :style="{borderColor : tableBorderColor}">{{delegators}}</td>
    </tr>
    <tr class="border-2 border-blue-500" :style="{borderColor : tableBorderColor}">
        <th class="border-r-2 border-blue-500" :style="{borderColor : tableBorderColor}">Current Sign:</th>
        <td :style="{borderColor : tableBorderColor}">{{currentSign}}%</td>
    </tr>
    <tr class="border-2 border-blue-500" :style="{borderColor : tableBorderColor}">
        <th class="border-r-2 border-blue-500" :style="{borderColor : tableBorderColor}">Lifetime Rewards:</th>
        <td :style="{borderColor : tableBorderColor}">{{lifetimeRewards}}</td>
    </tr>
    </tbody>
</table>
    <button @click="postAxios()" class="bg-green-300 p-3 rounded-lg mt-10 w-40">Save</button>
</div>

<div class="flex flex-col justify-center items-center">
<h3 class="text-2xl font-bold mt-12">Saved Validators</h3>
<button @click="deleteAxios()" class="bg-red-300 p-3 rounded-lg mt-10 w-40" v-if="this.savedValidators.length > 0">Clear list</button>
</div>

<div v-for="(validator, i) in savedValidators" :key="i" class="bg-blue-200 mx-auto rounded-lg p-5 mt-4 w-2/3 cursor-pointer" @click="tryRoute(validator)">
        <div class="flex flex-row justify-between items-center">
            <h3 class="text-xl mb-2">{{validator.validatorName}}</h3>
            <span class="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xl"></span>

        </div>
</div>
</section>
</template>


<script>
import axios from "axios";
    export default {

        data() {
            return {
                savedValidators: [],
                tableBorderColor: "",
                oneAddress: "",
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
        getValidatorInfo(address) {
            this.getValidatorData(address);
            this.getValidatorDelegators(address);
        },
        async getValidatorData(address){
            const res = await fetch('https://api.s0.t.hmny.io/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: `hmy_getValidatorInformation`,
      params: [
          address,
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

    },

            async getValidatorDelegators(address){
            const res = await fetch('https://api.s0.t.hmny.io/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: `hmy_getDelegationsByValidator`,
      params: [
          address,
      ],
      id: 1
    })
  });
            const delegatorsData = await res.json();
            this.delegatorsData = delegatorsData;
            this.delegators = delegatorsData.result.length;

    },

    postAxios() {
        let header = {
                            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }
      let post = {
                validatorName: this.validatorName,
                currentEpoch: this.currentEpoch,
                totalStake: this.totalStake,
                delegators: this.delegators,
                currentSign: this.currentSign,
                lifetimeRewards: this.lifetimeRewards,
    };
    let nombreValidators = 'validators.json';
    axios.post("https://rutilant-1992b-default-rtdb.firebaseio.com/" + nombreValidators, post, header);

    return this.savedValidators.push(post);
        },

    deleteAxios() {
    let nombreValidators = 'validators.json';
    axios.delete("https://rutilant-1992b-default-rtdb.firebaseio.com/" + nombreValidators);
    let cleanList = [];
    this.savedValidators = cleanList;
    },

    tryRoute(val) {
        this.$router.push({
            name: 'slug',
            params: {
                slug: val.validatorName,
                validatorName: val.validatorName,
                currentEpoch: val.currentEpoch,
                totalStake: val.totalStake,
                delegators: val.delegators,
                currentSign: val.currentSign,
                lifetimeRewards: val.lifetimeRewards
                }
        })
    }

    },
    mounted() {
    let results = [];
    let nombreValidators = 'validators.json';
    axios.get("https://rutilant-1992b-default-rtdb.firebaseio.com/" + nombreValidators).then(res => {
    for (const id in res.data) {
        results.push({
                validatorName: res.data[id].validatorName,
                currentEpoch: res.data[id].currentEpoch,
                totalStake: res.data[id].totalStake,
                delegators: res.data[id].delegators,
                currentSign: res.data[id].currentSign,
                lifetimeRewards: res.data[id].lifetimeRewards,
        });
    }
    this.savedValidators = results;
    })

        },
    }
</script>


<style scoped>

</style>