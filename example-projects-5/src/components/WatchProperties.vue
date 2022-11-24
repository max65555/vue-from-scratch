<template>
  <div>
      <h1>
        <input type="text" v-model="inputValue">
      </h1>
  </div>
</template>
<script>
export default {
  name: "WatchProperties",
  data() {
    return {
      inputValue: "",
    }
  },
  watch:{
    inputValue() {
      console.log("input Value has changed");
    }
    //TODO: inputValue() run everytime inputValue changes
    
  }
  
}
</script>