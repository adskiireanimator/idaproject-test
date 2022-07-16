<template>
  <div class="hello">
    <div class="slider-item" v-for="user in friends" :key="user.id">
      <offer
        v-bind:description="user.description"
        v-bind:name="user.name"
        v-bind:photo="user.photo"
        v-bind:price="user.price"
      />
    </div>
  </div>
</template>

<script>
import offer from "./Offerthing.vue";

export default {
  name: "HelloWorld",
  components: {
    offer,
  },
  computed: {
    friends() {
      return this.$store.getters.friendsarr;
    },
  },
  async mounted() {
    this.$store.dispatch("fetchusers", 1);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  position: absolute;
  top: 67px;
  left: 364px;
  display: flex;
  flex-wrap: wrap;
}
</style>
