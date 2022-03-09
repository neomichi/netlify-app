<template>
<div class="main">  
  <HeaderUi />   
  <router-view class="content" />       
  <FooterUi />
 </div>    
</template>

<script lang="ts">
import "./assets/scss/main.scss"
import {ref, defineComponent,  onMounted,onBeforeMount, computed } from "vue"
import FooterUi from "./components/FooterUi.vue"
import HeaderUi from "./components/HeaderUi.vue"

export default defineComponent({
  name: "App",
  components: {
    HeaderUi,
    FooterUi
  },
  setup() {  
    return {};
  },
})
</script>