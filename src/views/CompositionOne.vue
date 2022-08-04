<script setup lang="ts">
const isModalActive = ref(false)

const openModal = () => {
  isModalActive.value = true
}
const closeModal = () => {
  isModalActive.value = false
}

</script>

<template>
  <button
    class="bg-black hover:bg-white text-white hover:text-black border-2 border-black px-4 py-2"
    @click="openModal"
  >
    Open Modal
  </button>
  <!-- Modal -->
  <!-- 將 Modal 的部分用 BaseModal 元件取代 -->
  <div
    v-if="isModalActive"
    class="bg-black/50 w-full h-full fixed top-0 left-0 flex justify-center items-center"
  >
    <button
      class="absolute right-[20px] top-[20px] text-white hover:text-black"
      @click="closeModal"
    >
      X
    </button>
    <div class="relative w-1/2 h-2/3 bg-white px-4 py-2">
      <!-- Modal Content -->
      <article class="w-full">
        <h1 class="my-2 text-xl font-bold text-black">
          Title
        </h1>
        <p class="mb-2 text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos inventore soluta sapiente, repellendus at ex corrupti quibusdam animi enim exercitationem iusto provident. Deserunt, eaque? Voluptas quisquam necessitatibus a pariatur labore.
        </p>
        <p class="mb-2 text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos inventore soluta sapiente, repellendus at ex corrupti quibusdam animi enim exercitationem iusto provident. Deserunt, eaque? Voluptas quisquam necessitatibus a pariatur labore.
        </p>
      </article>
    </div>
  </div>
</template>
