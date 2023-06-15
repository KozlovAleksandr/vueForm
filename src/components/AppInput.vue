<template>
  <el-input :placeholder="placeholder" class="form__input" />
</template>

<script>
export default {
  name: "AppInput",
  props: {
    placeholder: String,
  },
};
</script>
<style lang="scss">
.form__input {
  margin-top: 5px;
}
</style>
