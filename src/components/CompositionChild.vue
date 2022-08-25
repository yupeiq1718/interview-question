<script>
export default {
  setup () {
    console.log('4. Child Created')

    onBeforeMount(() => console.log('5. Child BeforeMount'))
    onMounted(() => console.log('6. Child Mounted'))
  }
}

</script>
