<template>
  <div class="job_search">

    <b-form-input
        v-model="search.keyword"
        list="input-list"
        id="input-with-list"
        type="text"
        placeholder="job title, keywords or company"
    ></b-form-input>
    <b-form-datalist id="input-list" :options="options"></b-form-datalist>

    <b-form-input
        v-model="search.city"
        list="city-list"
        id="input-with-city-list"
        type="text"
        placeholder="city, state or zip code"
    ></b-form-input>
    <b-form-datalist id="city-list" :options="options"></b-form-datalist>

    <button @click.prevent="onSubmit">Search</button>
  </div>
</template>

<script>
export default {
    name: "Search",
    data() {
      return{
          options: ['Apple', 'Banana', 'Grape', 'Kiwi', 'Orange', 'Apple', 'Banana', 'Grape', 'Kiwi', 'Orange', 'Apple', 'Banana', 'Grape', 'Kiwi', 'Orange'],
          search: {
              keyword: '',
              city: ''
          }
      }
    },
    methods: {
        onSubmit() {
            alert(JSON.stringify(this.search));
        },
    }
};
</script>

<style scoped lang="scss">
.job_search {
  display: flex;
  justify-content: space-between;
  input {
    width: calc(50% - 60px);
    font-size: 16px;
    height: 46px;
    padding: 0 20px;
    border-radius: 0;
    display: inline-block;
    background: #e2e2e2;
    border: none;
    &:active,
    &:focus,
    &:hover {
      outline: none;
    }
  }
  button {
    width: 100px;
    border-radius: 0;
    display: inline-block;
    border: none;
    box-shadow: none;
    outline: none;
    background: #6f9ae8;
    color: #fff;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
      background: #365899;
    }
  }
}
</style>
