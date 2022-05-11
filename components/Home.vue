<template>
    <div>
        <introduction></introduction>
        <stats></stats>
        <stake></stake>
        <faq></faq>
        <tools></tools>
        <contact></contact>
    </div>
</template>

<script>

import Introduction from './Introduction.vue';
import Stats from './Stats.vue';
import Stake from './Stake.vue';
import Faq from './FAQ.vue';
import Tools from './Tools.vue';
import Contact from './Contact.vue';


export default {
  components: { Introduction, Stats, Stake, Faq, Tools, Contact},
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}

</script>

<style scoped>


</style>