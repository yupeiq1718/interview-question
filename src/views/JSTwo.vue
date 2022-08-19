<script setup lang="ts">
console.log('1. Parent Created')

onBeforeMount(() => console.log('2. Parent BeforeMount'))
onMounted(() => console.log('3. Parent Mounted'))
</script>
<!-- <script>
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
</script> -->
<template>
  <JSTwoChild />
</template>
