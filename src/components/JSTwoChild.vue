<script setup lang="ts">
console.log('4. Child Created')

onBeforeMount(() => console.log('5. Child BeforeMount'))
onMounted(() => console.log('6. Child Mounted'))
</script>
<!-- <script>
export default {
  created () {
    console.log('4. Child Created')
  },
  beforeMount () {
    console.log('5. Child BeforeMount')
  },
  mounted () {
    console.log('6. Child Mounted')
  }
}
</script> -->
