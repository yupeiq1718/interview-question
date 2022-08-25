
<script>
export default {
  data () {
    return {
      itemsData: {
        fruit: [
          {
            id: '231',
            name: 'apple'
          }
        ],
        language: [
          {
            id: '002',
            name: 'English'
          },
          {
            id: '933',
            name: 'Chinese'
          }
        ],
        tool: [
          {
            id: '205',
            name: 'computer'
          },
          {
            id: '116',
            name: 'notebook'
          }
        ]
      }
    }
  },
  computed: {
    items () {
      return []
    }
  }
}

</script>
<template>
  <table class="mx-auto w-1/2 border-2 border-black">
    <thead class="font-bold">
      <tr>
        <td>ID</td>
        <td>Type</td>
        <td>Name</td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item of items"
        :key="item.id"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
