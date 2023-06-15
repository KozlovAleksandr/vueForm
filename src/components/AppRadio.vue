<template>
  <el-radio-group class="checkbox-column" required>
    <el-radio label="oneMonth">Один месяц</el-radio>
    <el-radio label="twoMonth">Два месяца</el-radio>
    <el-radio label="threeMonth">Три месяца</el-radio>
  </el-radio-group>
</template>
    
<script>
export default {
  name: "AppRadio",
};
</script>

<style >
.checkbox-column {
  display: flex;
  flex-direction: column;
  align-items: start;
}
</style>
    