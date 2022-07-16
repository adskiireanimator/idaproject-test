<template>
  <div class="adder">
    <p class="form_name">Наименование товара</p>
    <input
      type="text"
      v-model="new_name"
      placeholder="Введите наименование товара"
      v-bind:class="{
        invalid: checkname,
        form_name_input: true,
        form_input: !checkname,
      }"
    />
    <p class="form_name_err" v-if="checkname">Поле является обязательным</p>

    <p class="form_description">Описание товара</p>
    <textarea
      type="text"
      v-model="new_description"
      class="form_description_input"
      placeholder="Введите описание товара"
    />
    <p class="form_piclink">Ссылка на изображение товара</p>
    <input
      type="text"
      v-model="new_piclink"
      v-bind:class="{
        invalid: checkphoto,
        form_piclink_input: true,
        form_input: !checkphoto,
      }"
      placeholder="Введите ссылку"
    />
    <p class="form_piclink_err" v-if="checkphoto">Поле является обязательным</p>

    <p class="form_cost">Цена товара</p>
    <input
      v-model="new_price"
      type="text"
      v-bind:class="{
        invalid: checkprice,
        form_cost_input: true,
        form_input: !checkprice,
      }"
      placeholder="Введите цену"
    />
    <p class="form_cost_err" v-if="checkprice">Поле является обязательным</p>
    <button
      v-bind:class="{
        form_button: true,
        btncor:
          !v$.new_name.$invalid &&
          !v$.new_price.$invalid &&
          !v$.new_piclink.$invalid,
        btnuncor:
          v$.new_name.$invalid ||
          v$.new_price.$invalid ||
          v$.new_piclink.$invalid,
      }"
      v-on:click="checkform"
    >
      Добавить товар
    </button>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "OfferAdd",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      new_description: "",
      new_price: "",
      new_name: "",
      new_piclink: "",
      checkname: false,
      checkprice: false,
      checkphoto: false,
    };
  },
  validations() {
    return {
      new_price: { required },
      new_name: { required },
      new_piclink: { required },
    };
  },
  methods: {
    addOffer() {
      let arr = this.$store.getters.friendsarr;
      arr.push({
        name: this.new_name,
        description: this.new_description,
        price: this.new_price,
        photo: this.new_piclink,
      });
      this.$store.commit("updatefriends", arr);
      this.new_name = "";
      this.new_price = "";
      this.new_piclink = "";
    },
    checkform() {
      if (this.new_name == "") {
        this.checkname = true;
      } else {
        this.checkname = false;
      }
      if (this.new_price == "") {
        this.checkprice = true;
      } else {
        this.checkprice = false;
      }
      if (this.new_piclink == "") {
        this.checkphoto = true;
      } else {
        this.checkphoto = false;
      }
      if (!(this.checkphoto || this.checkprice || this.checkname)) {
        this.addOffer();
      }
    },
  },
};
</script>
<style scoped lang="scss">
.invalid {
  background: #fffefb;
  border: 1px solid #ff8484;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding-left: 16px;
}
.btncor {
  color: white;
  cursor: pointer;
  background: #45bd45;
  border-radius: 10px;
}
.btnuncor {
  color: #b4b4b4;
  background: #eeeeee;
  border-radius: 10px;
}
.form_button {
  position: absolute;
  width: 284px;
  height: 36px;
  left: 16px;
  top: 380px;
  border: none;
  text-align: center;
}

@keyframes createsidemenu {
  from {
    box-shadow: 0 0 20px rgb(0 0 0 / 1%);
  }
  to {
    box-shadow: 0 0 20px rgb(0 0 0 / 20%);
  }
}
.btncor:hover {
  animation-duration: 0.2s;
  animation-name: createsidemenu;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
}
.adder {
  position: absolute;
  width: 332px;
  height: 440px;
  border-radius: 4px;
  left: 32px;
  top: 83px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
}
.form_input {
  border: none;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding-left: 16px;
}
.form_name {
  position: absolute;
  left: 24px;
  top: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485e;

  &_input {
    position: absolute;
    width: 284px;
    height: 36px;
    left: 24px;
    top: 41px;
  }
  &_err {
    position: absolute;
    width: 100px;
    height: 10px;
    left: 24px;
    top: 81px;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    /* identical to box height */

    letter-spacing: -0.02em;

    color: #ff8484;
  }
}
.form_description {
  position: absolute;
  width: 74px;
  height: 13px;
  left: 24px;
  top: 93px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485e;

  &_input {
    position: absolute;
    width: 284px;
    height: 108px;
    left: 24px;
    top: 110px;
    border: none;
    resize: none;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding-left: 16px;
    padding-top: 10px;
  }
}
.form_piclink {
  position: absolute;
  width: 134px;
  height: 13px;
  left: 24px;
  top: 234px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485e;

  &_input {
    position: absolute;
    width: 284px;
    height: 36px;
    left: 24px;
    top: 251px;
  }
  &_err {
    position: absolute;
    width: 100px;
    height: 10px;
    left: 24px;
    top: 291px;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    /* identical to box height */

    letter-spacing: -0.02em;

    color: #ff8484;
  }
}
.form_cost {
  position: absolute;
  width: 53px;
  height: 13px;
  left: 24px;
  top: 303px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485e;

  &_input {
    position: absolute;
    width: 284px;
    height: 36px;
    left: 24px;
    top: 320px;
  }
  &_err {
    position: absolute;
    width: 100px;
    height: 10px;
    left: 24px;
    top: 360px;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    letter-spacing: -0.02em;
    color: #ff8484;
  }
}
</style>
