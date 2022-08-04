<template>
  <header class="m-4">
    <router-link
      class="p-1 m-1 border-2 border-black bg-white hover:bg-black text-black hover:text-white"
      to="/question-one"
    >
      Q1
    </router-link>
    <router-link
      class="p-1 m-1 border-2 border-black bg-white hover:bg-black text-black hover:text-white"
      to="/question-two"
    >
      Q2
    </router-link>
    <router-link
      class="p-1 m-1 border-2 border-black bg-white hover:bg-black text-black hover:text-white"
      to="/question-three"
    >
      Q3
    </router-link>
    <hr class="my-4 border-2 border-black">
  </header>
  <main class="my-2">
    <router-view />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
