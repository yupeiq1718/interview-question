<script setup lang="ts">
alert('1. Parent Created')

onBeforeMount(() => alert('2. Parent BeforeMount'))
onMounted(() => alert('3. Parent Mounted'))
</script>
<!-- <script>
export default {
  created () {
    alert('1. Parent Created')
  },
  beforeMount () {
    alert('2. Parent BeforeMount')
  },
  mounted () {
    alert('3. Parent Mounted')
  }
}
</script> -->
<template>
  <JSTwoChild />
</template>
