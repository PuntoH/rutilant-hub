<template>
<section id="faq" class="container mx-auto flex flex-col items-center py-10 bg-gray-200">
        <div class="w-1/2 mx-auto flex items-center mb-10 justify-center">
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -mr-3">

        </div>
        <div class="w-2/3 h-3 bg-blue-300 inline-block">

        </div>
        <div class="w-6 h-6 bg-blue-300 rounded-full inline-block -ml-3">

        </div>
    </div>
    <h2 class="text-4xl font-bold text-center">F.A.Q</h2>

    <div v-for="(faq, i) in faqs" :key="i" class="bg-blue-200 rounded-lg p-5 mt-4 w-2/3 cursor-pointer" @click="toggleHidden(i)">
        <div class="flex flex-row justify-between items-center">
            <h3 class="text-xl mb-2">{{faq.question}}</h3>
            <span class="w-5 h-5 bg-blue-500 rounded-full"></span>
        </div>

        <div  class="border-t-2 border-blue-400" v-if="!faq.hidden" >
            <p class="mt-2">{{faq.answer}}</p>
        </div>
    </div>
    
</section>
</template>


<script>
    export default {
        data() {
            return {
                faqs: [
                    {question: "Is staking safe?", answer: "Yes, staking is safe. Your $ONEs never leave your wallet, so they can't be taken away by a validator", hidden: true},

                    {question: "How much is the APR?", answer: "It varies depending on the amount of circulating ONE being staked. Right now it's. During the last few months it's been between 9% and 10%", hidden: true},

                    {question: "Why should I stake?", answer: "By staking with a valdiator you're helping secure and decentralize the network and, by doing so, you get rewarded.", hidden: true},

                    {question: "How long does it take to undelegate?", answer: "The undelegation process takes 7 epochs, which is roughly 5 days.", hidden: true},

                    {question: "Do rewards get automatically compounded?", answer: "No, you actually have to manually claim your rewards and then stake them.", hidden: true},
                ],
            }
        },
        methods: {
            toggleHidden(index) {
                this.faqs[index].hidden = !this.faqs[index].hidden;
                return this.faqs[index].hidden;
            }
        }
    }
</script>


<style scoped>



</style>