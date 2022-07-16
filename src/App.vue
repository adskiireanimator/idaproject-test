<template>
  <p class="descript">Добавление товара</p>
  <div class="configer"></div>
  <OfferAdd />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import OfferAdd from "./components/OfferAdd.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    OfferAdd,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Source Sans Pro";
}

.descript {
  position: absolute;
  width: 247px;
  height: 35px;
  left: 32px;
  top: 32px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3f3f3f;
}
</style>
