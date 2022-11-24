<template>
  <div class="container">
    <div v-bind:class="{ displayInline: isInline && !isBlock, displayBlock : !isInline && isBlock }"
    @click="changeAttribute" class="core"
    >
    {{message}}
  </div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: [
    'message'
  ],
  data() {
    return {
      // isInline: true,
      isInline:true,
      isBlock : false,  
    }
  },
  computed: {
    
  },
  methods: {
    changeAttribute() {
      this.isInline = !this.isInline;
      this.isBlock = !this.isBlock;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.displayBlock{
  padding:24px;
  background-color:green;
  color:white; 

}
.displayInline{
  padding:24px;
  font-size:14px;
  color:red;
  
}
.core{
  user-select: none;
}
.container{
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
</style>
