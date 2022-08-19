<script setup lang="ts">
const readTime = () => ({
  serverTime: '1660881600',
  endTime: '1660881720'
})
const minute = ref(0)
const second = ref(0)
</script>

<!-- <script>
export default {
  data () {
    return {
      minute: 0,
      second: 0
    }
  },
  methods: {
    readTime () {
      return {
        serverTime: '1660881600',
        endTime: '1660881720'
      }
    }
  }
}
</script> -->

<template>
  <div class="flex flex-col justify-center items-center">
    <div class="text-black font-bold text-xl">
      {{ 'minute: ' }}{{ minute }}
    </div>
    <div class="text-black font-bold text-xl">
      {{ 'second: ' }}{{ second }}
    </div>
  </div>
</template>
