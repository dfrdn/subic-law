<template>
  <div>
    <header id="hero" class="bg-black overflow-hidden relative">
      <div class="lg:w-1/2 h-full absolute z-0 top-0 right-0">
        <img
          src="~/assets/header.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="grid grid-flow-col md:grid-flow-row grid-cols-1 lg:grid-cols-6 grid-rows-2 gap-y-10 lg:grid-rows-3 md:gap-10 container relative md:p-16 lg:p-28"
      >
        <div
          class="mt-10 row-start-2 md:row-start-auto order-2 md:order-1 grid grid-cols-12 md:grid-cols-2 gap-4 md:gap-10 col-span-4 row-span-1 md:row-span-1"
        >
          <div
            class="col-start-2 col-span-9 md:col-span-1 md:col-start-auto border border-yellow-300 text-white p-4 md:p-8"
          >
            <h2
              class="text-sm md:text-base mb-1 md:mb-4 uppercase tracking-wide"
            >
              Our Experience
            </h2>
            <p class="text-base md:text-2xl">
              15+ years of Outstanding Legal Service
            </p>
          </div>
          <div
            class="col-start-2 col-span-9 md:col-span-1 md:col-start-auto border border-gray-400 text-white p-4 md:p-8"
          >
            <h2
              class="text-base md:text-md mb-1 md:mb-4 uppercase tracking-wide"
            >
              Our Services
            </h2>
            <p class="text-base md:text-2xl">
              Olongapo City and throughout Zambales
            </p>
          </div>
        </div>
        <div
          class="flex flex-col text-center space-y-2 justify-center md:text-left mt-8 md:mt-0 order-1 md:order-2 bg-white col-span-1 md:col-span-4 md:row-span-2 p-8 h-2/3 md:h-3/4"
        >
          <h1 class="font-bold text-4xl md:text-5xl">
            We are here to help you
          </h1>
          <p class="text-base md:text-3xl leading-relaxed">
            As one of the leading law firms in Olongapo City, our attorneys can
            help you with all of your legal needs
          </p>
        </div>
        <div
          class="backdrop-filter backdrop-blur-md md:backdrop-blur-none bg-black bg-opacity-30 md:bg-transparent row-start-3 md:row-start-4 order-3 md:col-span-6 text-white py-4 md:py-0"
        >
          <a
            href="#about"
            v-smooth-scroll
            class="flex justify-center md:justify-start"
          >
            <span class="mr-8">Learn more about Subic Law</span>
            <span class="animate-pulse"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                /></svg
            ></span>
          </a>
        </div>
      </div>
    </header>
    <div v-scroll-spy="{ allowNoActive: true }">
      <section id="about">
        <div class="container grid md:grid-cols-2 gap-6">
          <div class="space-y-8">
            <div>
              <h2>About Subic Law</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                poriti laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in uienply voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat norin proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div
              class="hidden md:flex items-center justify-center overflow-hidden"
            >
              <img src="https://picsum.photos/600/300" alt="" class="w-full" />
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/600/300" alt="" class="w-full" />
            </div>
            <div class="bg-black flex-grow flex items-center p-4">
              <p class="text-white italic">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut ero labore et dolore magna
                aliqua. Ut enim ad minim veniam."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="lawyers" class="container">
        <div>
          <h2>Our Lawyers</h2>
          <div class="space-y-4">
            <div
              v-for="n in 4"
              :key="n"
              class="grid grid-cols-1 md:grid-cols-3"
            >
              <div class="flex items-center justify-center overflow-hidden">
                <img
                  src="https://picsum.photos/600/300"
                  alt=""
                  class="w-full"
                />
              </div>
              <div class="bg-gray-200 col-span-2 flex flex-col p-4 md:p-6">
                <h3>Name</h3>
                <p>Bio</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="practice-areas" class="container">
        <h2>Practice Areas</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          <div class="bg-black text-white" v-for="n in 8" :key="n">
            <div
              class="absolute md:relative h-60 p-6 bg-gray-500 bg-opacity-50 md:bg-black md:bg-opacity-100"
            >
              <h3>Practice</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim.
              </p>
            </div>
            <div class="flex items-center justify-center overflow-hidden h-60">
              <img
                src="https://picsum.photos/600/300"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" class="container grid md:grid-cols-2 gap-10">
        <div class="border-2 border-black flex order-2 md:order-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494282.9295284363!2d120.39201175464098!3d14.565686587139465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711bdd902c49%3A0x747f3a8339f2d512!2sAttys.%20ZC%20Mendoza%2C%20Jr.%2C%20AR%20Orozco%2C%20FJ%20Abdon!5e0!3m2!1sen!2sph!4v1642689800195!5m2!1sen!2sph"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            class="w-full"
          ></iframe>
        </div>
        <div class="order-1 md:order-2">
          <h2>Get in Touch</h2>
          <p>LOREM IPSUM DOLOR AMET CONSECTETUER</p>
          <p>LOREM IPSUM DOLOR AMET CONSECTETUER</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style lang="scss" scoped>
section {
  @apply py-8 md:py-20;
}

h2 {
  @apply text-3xl font-bold mb-8;
}

h3 {
  @apply text-2xl font-bold mb-4;
}
</style>
