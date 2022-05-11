<template>
  <div>
    <NavBar/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Home from '../components/Home.vue';
import Footer from '../components/Footer.vue';



export default {
  components: {
    NavBar, Home, Footer,
  },
  head: {
    title: "Rutilant Hub",
    meta: [
      {content: "Rutilant Hub is a Validator for the Harmony Blockchain."}
    ]
  },
}
</script>
