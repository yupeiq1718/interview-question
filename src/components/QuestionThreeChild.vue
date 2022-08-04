<script setup lang="ts">
alert('4. Child Created')

onBeforeMount(() => alert('5. Child BeforeMount'))
onMounted(() => alert('6. Child Mounted'))
</script>
<!-- <script>
export default {
  created () {
    alert('4. Child Created')
  },
  beforeMount () {
    alert('5. Child BeforeMount')
  },
  mounted () {
    alert('6. Child Mounted')
  }
}
</script> -->
