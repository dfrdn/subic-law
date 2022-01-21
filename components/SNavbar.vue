<template>
  <nav
    :class="hideScrolled"
    class="flex items-center top-0 left-0 h-20 w-full fixed bg-gray-100 transition-all duration-75 text-gray-900 py-4 z-10"
  >
    <div class="flex items-center container justify-between">
      <div
        class="flex-grow grid grid-cols-3 justify-items-center place-items-center place-content-center md:hidden"
      >
        <!-- Mobile Toggle -->
        <div class="md:hidden justify-self-start flex">
          <button class="items-center pl-5" @click="drawer">
            <svg
              class="h-8 w-8 fill-current text-black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Header Logo -->
        <a href="#hero" class="flex items-center" v-smooth-scroll>
          <s-logo />
        </a>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block container px-2 md:px-6 md:py-4">
        <div class="hidden md:flex justify-between md:items-center">
          <a href="#hero" class="flex items-center" v-smooth-scroll>
            <s-logo />
            <span class="uppercase font-sans whitespace-nowrap">Subic Law</span>
          </a>

          <div class="space-x-3" v-scroll-spy-active v-scroll-spy-link>
            <a
              v-for="link in links"
              :key="link.label"
              :href="link.link"
              v-smooth-scroll
              class="inline-block"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
      </div>

      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-href-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-href-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 opacity-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="px-5 py-2 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false"
          >
            <svg
              class="w-6 h-6 text-black"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b text-black whitespace-nowrap"
        >
          <a href="#hero" class="w-44">
            <s-logo class="block" />
            <span class="uppercase font-sans whitespace-nowrap">Subic Law</span>
          </a>
        </span>

        <ul class="tracking-wider text-black text-lg" @click="isOpen = false">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.link"
            class="block border-t py-4"
          >
            {{ link.label }}
          </a>
        </ul>
      </aside>

      <!-- <div class="space-x-3" v-scroll-spy-active v-scroll-spy-link>
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.link"
          v-smooth-scroll
          class="inline-block"
        >
          {{ link.label }}
        </a>
      </div> -->
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

interface Link {
  label: string
  link: string
}

export default Vue.extend({
  data: () => {
    return {
      isHidden: false,
      isOpen: false,
      scrollPosition: 0,
      prevScrollPosition: 0,
      links: [
        {
          label: 'About',
          link: '#about',
        },

        {
          label: 'Our Lawyers',
          link: '#lawyers',
        },

        {
          label: 'Our Practice Areas',
          link: '#practice-areas',
        },

        {
          label: 'Contact Us',
          link: '#contact',
        },
      ],
    }
  },
  computed: {
    hideScrolled() {
      return {
        scrolled: this.isHidden,
      }
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false
    })
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY
      if (this.prevScrollPosition >= this.scrollPosition) {
        this.isHidden = false
      } else {
        this.isHidden = true
      }
      this.prevScrollPosition = this.scrollPosition
    },
    drawer() {
      this.isOpen = !this.isOpen
    },
  },
})
</script>

<style lang="scss" scoped>
nav {
  .nuxt-link-exact-active:not(.logo):not(.burger-link):not(.search) {
    @apply text-gray-900 border-gray-900 border-b-2;
  }
  .nuxt-link-exact-active.burger-link {
    @apply text-gray-900;
  }
  .burger-link {
    @apply text-gray-900;
  }
}

.scrolled {
  @apply h-10 shadow;
}

.active {
  @apply border-b border-gray-700;
}
</style>
