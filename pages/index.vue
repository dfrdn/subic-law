<template>
  <div>
    <header id="hero" class="bg-black overflow-hidden relative">
      <div class="lg:w-1/2 h-full absolute z-0 top-0 right-0 flex items-end">
        <img
          src="~/assets/header.jpg"
          alt=""
          class="h-5/6 md:h-full object-cover object-center-bottom md:object-center"
        />
      </div>
      <div
        class="grid grid-flow-col md:grid-flow-row grid-cols-1 lg:grid-cols-6 grid-rows-2 gap-y-10 lg:grid-rows-3 md:gap-10 container relative md:p-16 lg:p-28"
      >
        <div
          class="mt-10 row-start-2 md:row-start-auto order-2 md:order-1 grid grid-cols-12 md:grid-cols-2 gap-4 md:gap-10 col-span-4 row-span-1 md:row-span-1"
        >
          <div
            class="col-start-2 col-span-9 md:col-span-1 md:col-start-auto border border-tertiary text-white p-4 md:p-8"
          >
            <p
              class="font-header font-bold text-xs md:text-sm mb-1 md:mb-4 uppercase tracking-wide"
            >
              Our Experience
            </p>
            <p class="text-base md:text-2xl">
              15+ years of Outstanding Legal Service
            </p>
          </div>
          <div
            class="col-start-2 col-span-9 md:col-span-1 md:col-start-auto border border-secondary text-white p-4 md:p-8"
          >
            <p
              class="font-header font-bold text-xs md:text-sm mb-1 md:mb-4 uppercase tracking-wide"
            >
              Our Service Locations
            </p>
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
              v-for="lawyer in content.lawyers"
              :key="lawyer.name"
              class="grid grid-cols-1 md:grid-cols-3"
            >
              <div class="flex items-center justify-center overflow-hidden">
                <!-- Add dynamic Lawyer Image Here -->
                <img
                  src="https://picsum.photos/600/300"
                  alt=""
                  class="w-full"
                />
              </div>
              <div class="bg-gray-200 col-span-2 flex flex-col p-4 md:p-6">
                <h3>{{ lawyer.name }}</h3>
                <p>{{ lawyer.description }}</p>
                <div>
                  <span><phone-icon /> {{ lawyer.phone }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="practice-areas" class="container">
        <h2>Practice Areas</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div
            class="bg-black text-white"
            v-for="practice in content.practiceAreas"
            :key="practice.title"
          >
            <div
              class="absolute md:relative h-32 p-6 bg-gray-500 bg-opacity-50 md:bg-black md:bg-opacity-100"
            >
              <h3 class="">{{ practice.title }}</h3>
              <!-- <p>
                {{ practice.description }}
              </p> -->
            </div>
            <div class="flex items-center justify-center overflow-hidden h-60">
              <!-- Add dynamic practice Area Image Here -->
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
        <div class="border-2 border-secondary flex order-2 md:order-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494282.9295284363!2d120.39201175464098!3d14.565686587139465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711bdd902c49%3A0x747f3a8339f2d512!2sAttys.%20ZC%20Mendoza%2C%20Jr.%2C%20AR%20Orozco%2C%20FJ%20Abdon!5e0!3m2!1sen!2sph!4v1642689800195!5m2!1sen!2sph"
            style="border: 0px"
            allowfullscreen=""
            loading="lazy"
            class="w-full border"
          ></iframe>
        </div>
        <div class="order-1 md:order-2">
          <h2>Get in Touch</h2>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-tertiary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-tertiary rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-tertiary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-tertiary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3">
                <button
                  class="shadow bg-primary hover:bg-tertiary focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Send
                </button>
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PhoneIcon from '~/components/icons/PhoneIcon.vue'

export default Vue.extend({
  components: { PhoneIcon },
  name: 'IndexPage',
  data() {
    return {
      content: {
        practiceAreas: [
          {
            title: 'Settlement of Estate, Housing, and Land Use',
            description: 'LOREM IPSUM',
            image: '',
          },
          {
            title: 'Civil and Family Law',
            description: 'LOREM IPSUM',
            image: '',
          },
          {
            title: 'Corporate Housekeeping',
            description: 'LOREM IPSUM',
            image: '',
          },
          {
            title: 'Government Law',
            description: 'LOREM IPSUM',
            image: '',
          },
          {
            title: 'Contract Drafting and Review',
            description: 'LOREM IPSUM',
            image: '',
          },
          {
            title: 'Criminal',
            description: 'LOREM IPSUM',
            image: '',
          },
        ],
        lawyers: [
          {
            name: 'Atty. Zosimo C. Mendoza, Jr.',
            image: '',
            position: 'Partner',
            description:
              'Atty. Mendoza earned his AB (Philosophy) from Ateneo de Manila University, his law education from the Ateneo de Manila School of Law and Arellano Law Foundation.  He passed the Bar in 1993.  He also has a Master’s Degree in Business Administration (Ateneo-Regis MBA Program).  Before he became active in private law practice, he worked in the government, in particular, the Subic Bay Metropolitan Authority (SBMA) in 1996 and later in the Light Rail Transit Authority (LRTA). He worked in LRTA as Corporate Secretary, Department Manager, Bids and Awards Committee Chairman, and OIC-Administrator from 2001-2005. Outside of government, he was appointed Corporate Secretary of Subic Bay Marine and Exploratorium, Inc. (SBMEI) for eight years.',
            phone: '',
            facebook: '',
            website: '',
          },
          {
            name: 'Atty. Frank John S. Abdon',
            image: '',
            position: 'Associate',
            description:
              'Atty. Abdon is engaged in general law practice and has been working at the Z.C. Mendoza Law Office since January 2008 where he gained extensive experience and expertise in the field of litigation which include appearing in different courts in Central Luzon and Metro Manila.  He graduated from the Ateneo de Manila University in the year 2001 with a degree of Bachelor of Arts, Major in Political Science and completed his Juris Doctor degree from the Ateneo de Manila University School of Law in the year 2006.  He was a Legal Consultant for the City Government of Olongapo from September 2008 until June 2013 where he was assigned to perform tasks given by the City Legal Office.  In 2008, he became a part-time instructor at Columban College, Inc., Olongapo City, where he teaches business law subjects up to the present.',
            phone: '',
            facebook: '',
            website: '',
          },
          {
            name: 'Atty. Orozco',
            image: '',
            position: 'Associate',
            description: '',
            phone: '',
            facebook: '',
            website: '',
          },
          {
            name: 'Atty. Daniel John A. Fordan',
            image: '',
            position: 'Associate',
            description:
              'Atty. Fordan obtained his Juris Doctor degree (with honors) from the Ateneo de Manila University School of Law in 2018. Prior to going into the legal field, he worked as a software engineer after he graduated from the Ateneo de Manila University in 2013 with a degree of BS Computer Science. He was admitted to the Philippine Bar in 2019 where he ranked 4th in the Bar Exams. He previously worked at Gulapa Law, an Ortigas-based law firm where he handled special projects, general corporate, and intellectual property matters. In particular, he served as assistant corporate secretary in a technology company, a real estate company, and a holding company, advising in various legal issues and assisting in stockholders’ and directors’ meeting and compliance with reportorial requirements of the Securities and Exchange Commission. He also handles matters involving due diligence, data privacy, intellectual property, and public-private partnerships.',
            phone: '',
            facebook: '',
            website: '',
          },
        ],
      },
    }
  },
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
