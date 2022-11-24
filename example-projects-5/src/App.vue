<template>
  <!-- <hello-world message="lorem"></hello-world> -->
  <!-- <mark-down> </mark-down> -->
  <fetch-data v-if="!isDisable"></fetch-data>
  <watch-properties v-if="!isDisable"></watch-properties>
   <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
  <data-table
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery">
  </data-table>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MarkDown from './components/MarkDown.vue';
import FetchData from './components/FetchData.vue'; 
import WatchProperties from './components/WatchProperties.vue';
import DataTable from './components/DataTable.vue';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // MarkDown,
    FetchData,
    WatchProperties,
    DataTable
  },
  data() {
    return {
      isDisable: true,
      searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
