<template>
  <div class="offer">
    <img v-bind:src="photo" class="offer_image" alt="" />
    <h2 class="offer_name">{{ name }}</h2>
    <div class="offer_description">
      <p>{{ description }}</p>
    </div>
    <h1 class="offer_price">{{ price }} руб.</h1>
  </div>
</template>

<script>
export default {
  name: "offerthing",
  props: {
    name: String,
    description: String,
    price: String,
    photo: String,
  },
};
</script>
<style scoped lang="scss">
.offer {
  width: 332px;
  height: 423px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  &_image {
    width: 332px;
    height: 200px;
    border-radius: 4px;
  }
  margin-left: 16px;
  margin-top: 16px;

  &_name {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-left: 16px;

    color: #3f3f3f;
  }
  &_description {
    margin-top: 16px;
    margin-right: 16px;
    margin-left: 16px;
    height: 80px;
    width: 300px;

    p {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;

      color: #3f3f3f;
    }
  }
  &_price {
    margin-top: 32px;
    margin-left: 16px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #3f3f3f;
  }
}
</style>
