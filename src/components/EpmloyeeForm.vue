<template>
  <form class="form">
    <h2 class="form__title">Заявка на приём сотрудника на работу</h2>
    <AppInput label="Фамилия" placeholder="Фамилия" v-model.trim="lastname" />
    <small v-if="errors.lastname">{{ errors.lastname }}</small>
    <AppInput label="Имя" placeholder="Имя" v-model.trim="firstname" />
    <small v-if="errors.firstname">{{ errors.firstname }}</small>
    <AppInput
      label="Отчество"
      placeholder="Отчество"
      v-model.trim="middlename"
    />
    <small v-if="errors.middlename">{{ errors.middlename }}</small>

    <AppSelect v-model="city" placeholder="Город проживания" />
    <small v-if="errors.city">{{ errors.city }}</small>

    <div class="form__columns">
      <p class="form__columns-left">Планирумая дата выхода на работу</p>
      <div class="form__columns-right">
        <AppDatePicker placeholder="Выберите дату" v-model="startDate" />
        <small v-if="errors.startDate">{{ errors.startDate }}</small>
      </div>
    </div>

    <div class="form__columns">
      <p class="form__columns-left">Планируется ли испытательный срок?</p>
      <div class="form__columns-right">
        <span class="form__columns-span">Нет</span>
        <AppSwitch v-model="isTrialPeriod" />
        <span class="form__columns-span">Да</span>
      </div>
    </div>
    <div v-if="isTrialPeriod" class="form__columns">
      <p class="form__columns-left">Продолжительность испытательного срока</p>
      <div class="form__columns-right">
        <AppRadio v-model="trialPeriod" />
      </div>
    </div>

    <el-row class="form__buttons">
      <el-button type="danger" @click="onReset">Сброс</el-button>
      <el-button type="success" @click="onSubmit">Отправить</el-button>
    </el-row>
  </form>
</template>

<script>
import AppSelect from "./AppSelect.vue";
import AppInput from "./AppInput.vue";
import AppDatePicker from "./AppDatePicker.vue";
import AppSwitch from "./AppSwitch.vue";
import AppRadio from "./AppRadio.vue";

import createData from "@/farebase/fetchData";

export default {
  name: "EpmloyeeForm",
  components: {
    AppSelect,
    AppInput,
    AppDatePicker,
    AppSwitch,
    AppRadio,
  },

  data() {
    return {
      lastname: "",
      firstname: "",
      middlename: "",
      city: "",
      startDate: "",
      isTrialPeriod: false,
      trialPeriod: "oneMonth",
      errors: {
        lastname: "",
        firstname: "",
        middlename: "",
        city: "",
        startDate: "",
      },
    };
  },
  methods: {
    checkValidation() {
      let isValid = true;
      if (this.lastname.length === 0) {
        this.errors.lastname = "Необходимо указать фамилию";
        isValid = false;
      } else {
        this.errors.lastname = "";
      }
      if (this.firstname.length === 0) {
        this.errors.firstname = "Необходимо указать имя";
        isValid = false;
      } else {
        this.errors.firstname = "";
      }
      if (this.middlename.length === 0) {
        this.errors.middlename = "Необходимо указать отчество";
        isValid = false;
      } else {
        this.errors.middlename = "";
      }

      if (this.city.length === 0) {
        this.errors.city = "Необходимо указать город проживания";
        isValid = false;
      } else {
        this.errors.city = "";
      }

      if (!this.startDate) {
        this.errors.startDate = "Укажите дату выхода на работу";
        isValid = false;
      } else {
        this.errors.startDate = "";
      }

      return isValid;
    },
    onSubmit() {
      if (this.checkValidation()) {
        const data = {
          lastname: this.lastname,
          firstname: this.firstname,
          middlename: this.middlename,
          city: this.city,
          startDate: this.startDate,
          trialPeriod: this.isTrialPeriod ? this.trialPeriod : "",
        };
        createData(data);
        this.onReset();
      }
    },
    onReset() {
      this.lastname = "";
      this.firstname = "";
      this.middlename = "";
      this.city = "";
      this.startDate = "";
      this.isTrialPeriod = false;
      this.trialPeriod = "oneMonth";
      this.errors = {
        lastname: "",
        firstname: "",
        middlename: "",
        city: "",
        startDate: "",
      };
    },
  },
};
</script>
<style lang="scss">
.form {
  align-items: center;

  & small {
    font-size: 12px;
    margin-left: 5px;
    color: rgb(221, 58, 58);
  }

  &__title {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  &__columns {
    width: 100%;
    margin-top: 5px;
    font-weight: 300;
    display: flex;
    align-items: center;

    &-left,
    &-right {
      flex: 1;
      padding: 0 5px;
    }
    &-span {
      margin: 0 5px;
    }
  }

  &__buttons {
    margin-top: 5px;
    justify-content: end;
  }
}
</style>
