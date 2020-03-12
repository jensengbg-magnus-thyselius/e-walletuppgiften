<template>
  <div id="app">
    <router-view v-bind:cards="cards"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      cards: [
        {
          id: 1,
          vendor: "Bitcoin Inc",
          holder: "John Doe",
          cardnumber: "1234 5678 9101 1112",
          valid: "12/22",
          isActive: true,
          color: "#EA8C2B"
        },
        {
          id: 2,
          vendor: "Ninja Bank",
          holder: "John Doe",
          cardnumber: "1234 5678 9101 1112",
          valid: "12/22",
          isActive: false,
          color: "#559F7A"
        },
        {
          id: 3,
          vendor: "Block Chain Inc",
          holder: "John Doe",
          cardnumber: "1234 5678 9101 1112",
          valid: "12/22",
          isActive: false,
          color: "#262E5D"
        },
        {
          id: 4,
          vendor: "Evil Corp",
          holder: "John Doe",
          cardnumber: "1234 5678 9101 1112",
          valid: "12/22",
          isActive: false,
          color: "#141518"
        }
      ]
    }
  }
}
</script>

<style>
  .app {
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100vw;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  h1 {
    text-align: center;
  }


</style>
