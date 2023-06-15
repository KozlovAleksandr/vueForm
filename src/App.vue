<template>
  <div class="container">
    <EpmloyeeForm />
  </div>
</template>

<script>
import EpmloyeeForm from "./components/EpmloyeeForm.vue";

export default {
  name: "App",
  components: {
    EpmloyeeForm,
  },
};
</script>
<style>
.container {
  position: relative;
  max-width: 600px;
  width: 100%;
  background-color: bisque;
  padding: 25px;
  border-radius: 10px;
}
</style>
