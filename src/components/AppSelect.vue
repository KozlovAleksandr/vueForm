<template>
  <el-select class="form__select" :placeholder="placeholder" size="large">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  name: "AppSelect",
  props: {
    placeholder: String,
  },
  data() {
    return {
      options: [
        {
          value: "Moscow",
          label: "Москва",
        },
        {
          value: "Omsk",
          label: "Омск",
        },
        {
          value: "Kazan",
          label: "Казань",
        },
        {
          value: "Samara",
          label: "Самара",
        },
        {
          value: "Krasnodar",
          label: "Краснодар",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.form__select {
  width: 100%;
  margin-top: 5px;
}
</style>
