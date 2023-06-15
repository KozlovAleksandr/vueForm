<template>
  <el-date-picker
    type="date"
    :placeholder="placeholder"
    format="DD.MM.YYYY"
    value-format="DD.MM.YYYY"
    :disabled-date="disabledDate"
  />
</template>
  
  <script>
export default {
  name: "AppDatePicker",
  props: {
    placeholder: String,
  },
  methods: {
    disabledDate(time) {
      return time.getTime() < Date.now();
    },
  },
};
</script>
  <style lang="scss">
.form__input {
  margin-top: 5px;
}
</style>
  