<template>
  <div id="app">
    <nav>
      <router-link to="/chartjs">Chart.js</router-link>
      <router-link to="/apexcharts">ApexCharts</router-link>
      <router-link to="/googlecharts">Google Charts</router-link>
    </nav>
    <router-view id="app"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

nav {
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  margin: 15px 30px 30px;
  padding: 10px 15px;
  border-radius: 4px;
  color: green;
  text-decoration: none;
}

.router-link-exact-active {
  color: white;
  background: green;
  font-weight: bold;
}
</style>
