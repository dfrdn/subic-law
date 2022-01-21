<template>
  <footer class="bg-primary w-full">
    <div
      class="container py-10 grid md:grid-cols-3 gap-10 grid-cols-1 px-5 xl:px-0"
    >
      <div class="flex flex-col text-white">
        <h3>Subic Law</h3>
        <p>
          Subic Law is one of the leading law firms in Olongapo City, our
          attorneys can help you with all of your legal needs. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut ero labore et dolore magna aliqua.
        </p>
      </div>
      <div class="flex flex-col text-white">
        <h3>Connect with Us</h3>
        <div class="space-y-2">
          <div>
            <a href="mailto:subiclaw@gmail.com">
              <email-icon class="pr-2 inline" />
              subiclaw@gmail.com</a
            >
          </div>
          <div>
            <a href="tel:(047)223-1003"
              ><phone-icon class="pr-2 inline" />(047) 223-1003</a
            >
          </div>
          <div>
            <a
              href="https://www.google.com/maps?ll=14.830737,120.280602&z=9&t=m&hl=en&gl=PH&mapclient=embed&cid=8394492565729236242"
              ><location-icon class="pr-2 inline" />Unit 7-C, 3rd Floor, RM
              Centrepoint Bldg., Lot 2995 Corner Magsaysay Drive, East Tapinac,
              Olongapo City
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-tertiary text-primary py-2">
      <div
        class="container flex flex-col md:flex-row justify-between items-center px-5 xl:px-0"
      >
        <p id="copyright" class="text-white order-1 md:order-0">
          All Rights Reserved | Subic Law
          {{ new Date().getFullYear() }}
        </p>
        <div class="flex space-x-2 order-0 md:order-1">
          <a href="https://www.facebook.com/"
            ><facebook-icon class="primary"
          /></a>
        </div>
      </div>
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

h3 {
  @apply uppercase text-white md:text-lg font-bold mb-2;
}

p {
  @apply text-sm md:text-base;
}

#copyright {
  @apply text-xs;
}
</style>
