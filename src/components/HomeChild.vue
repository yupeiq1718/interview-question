<script setup lang="ts">
console.log('4. Child Created')

onBeforeMount(() => console.log('5. Child BeforeMount'))
onMounted(() => console.log('6. Child Mounted'))
</script>
