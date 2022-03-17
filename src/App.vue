<template>
  <!-- <the-navigation /> -->
  <the-header />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
// import TheNavigation from "../src/components/TheNavigation.vue";
import TheHeader from "../src/components/TheHeader.vue";
export default {
  components: { TheHeader },
};
</script>
