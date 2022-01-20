<template>
  <nav
    :class="hideScrolled"
    class="flex items-center top-0 left-0 h-20 w-full fixed bg-gray-100 transition-all duration-300 ease-in-out text-gray-900 py-4 z-50"
  >
    <div class="flex items-center container justify-between">
      <a href="#hero" class="flex items-center" v-smooth-scroll>
        <s-logo />
        <span class="uppercase font-sans">Subic Law</span>
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
  @apply h-10;
}

.active {
  @apply border-b border-gray-700;
}
</style>
