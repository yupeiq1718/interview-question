<script>
export default {
  setup () {
    console.log('1. Parent Created')

    onBeforeMount(() => console.log('2. Parent BeforeMount'))
    onMounted(() => console.log('3. Parent Mounted'))
  }
}

</script>

<template>
  <CompositionChild />
</template>
