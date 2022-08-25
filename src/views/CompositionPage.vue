<script>
export default {
  setup () {
    const isArticleModalActive = ref(false)
    const isTableModalActive = ref(false)

    const openArticleModal = () => {
      isArticleModalActive.value = true
    }
    const closeArticleModal = () => {
      isArticleModalActive.value = false
    }
    const openTableModal = () => {
      isTableModalActive.value = true
    }
    const closeTableModal = () => {
      isTableModalActive.value = false
    }

    return {
      isArticleModalActive, isTableModalActive, openArticleModal, closeArticleModal, openTableModal, closeTableModal
    }
  }
}

</script>

<template>
  <section>
    <button
      class="m-2 px-4 py-2 bg-black hover:bg-white text-white hover:text-black border-2 border-black"
      @click="openArticleModal"
    >
      Open Article
    </button>
    <button
      class="m-2 px-4 py-2 bg-black hover:bg-white text-white hover:text-black border-2 border-black"
      @click="openTableModal"
    >
      Open Table
    </button>
  </section>
  <!-- Modal -->
  <!-- 將 Modal 的部分用 BaseModal 元件取代 -->
  <section
    v-if="isArticleModalActive"
    class="w-full h-full fixed top-0 left-0 flex justify-center items-center pointer-events-none"
  >
    <div class="relative w-1/2 h-2/3 bg-white px-4 py-2 border-2 border-black pointer-events-auto">
      <button
        class="absolute right-[20px] bottom-[20px] text-black"
        @click="closeArticleModal"
      >
        X
      </button>
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
  </section>
  <!-- Modal -->
  <!-- 將 Modal 的部分用 BaseModal 元件取代 -->
  <section
    v-if="isTableModalActive"
    class="w-full h-full fixed top-0 left-0 flex justify-center items-center pointer-events-none"
  >
    <div class="relative w-1/2 h-2/3 bg-white px-4 py-2 border-2 border-black pointer-events-auto">
      <button
        class="absolute right-[20px] bottom-[20px] text-black"
        @click="closeTableModal"
      >
        X
      </button>
      <!-- Modal Content -->
      <article class="w-full">
        <table class="w-full border-2 border-black">
          <thead>
            <tr class="font-bold">
              <td>header</td>
              <td>header</td>
              <td>header</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>body</td>
              <td>body</td>
              <td>body</td>
            </tr>
            <tr>
              <td>body</td>
              <td>body</td>
              <td>body</td>
            </tr>
            <tr>
              <td>body</td>
              <td>body</td>
              <td>body</td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  </section>
</template>
