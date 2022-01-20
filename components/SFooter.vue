<template>
  <footer
    class="text-white bg-gray-900 flex flex-col py-12 items-center text-gray-900-light justify-center text-sm tracking-wide space-y-8"
  >
    <div
      class="container flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-stretch lg:items-start justify-center lg:justify-between"
    >
      <div class="w-full lg:w-1/5 space-y-4">
        <div class="flex">
          <s-logo />
          <span class="font-bold text-3xl tracking-tight">Subic Law</span>
        </div>
        <h2>
          <a :href="`mailto:${content.email}`">{{ content.email }}</a>
        </h2>
        <div class="flex space-x-4"></div>
      </div>
      <div class="w-full lg:w-1/5 space-y-4 flex flex-col"></div>
      <div class="w-full lg:w-3/5 py-4 lg:py-0">
        <p class="leading-loose">{{ content.disclaimer }}</p>
      </div>
    </div>
    <div
      class="container flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between"
    >
      <div>
        <p class="">&copy; {{ new Date().getFullYear() }} Subic Law</p>
      </div>
      <div
        class="flex flex-col md:flex-row md:space-x-10 space-y-4 md:space-y-0"
      ></div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      content: {},
    }
  },
})
</script>

<style scoped>
footer {
  min-height: 80px;
}
</style>
