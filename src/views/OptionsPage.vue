<script>
export default {
  created () {
    console.log('1. Parent Created')
  },
  beforeMount () {
    console.log('2. Parent BeforeMount')
  },
  mounted () {
    console.log('3. Parent Mounted')
  }
}
</script>
<template>
  <Child />
</template>
