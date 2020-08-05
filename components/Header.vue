<template>
  <!-- This example requires Tailwind CSS v1.4.0+ -->
  <div class="relative">
    <div class="mx-auto">
      <div class="flex justify-between items-center pr-4 lg:pr-0 pt-6 lg:pt-0 pb-6 lg:justify-start lg:space-x-10">
        <div class="lg:w-0 lg:flex-1">
          <nuxt-link to="/" class="flex pl-6">
            <img v-show="!logoBlack" class="h-8 w-auto sm:h-10 lg:h-12 pt-3" src="@/assets/images/Logo.svg" alt="Logo">
            <img v-show="logoBlack" class="h-8 w-auto sm:h-10 lg:h-12 pt-3" src="@/assets/images/logo-sort.svg" alt="Logo">
          </nuxt-link>
        </div>
        <div class="-mr-2 -my-2 lg:hidden">
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="mobileMenu = !mobileMenu">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <nuxt-link
            to="/virksomheder"
            class="menu-items hover:text-hh-orange py-6 font-sans text-base leading-6 font-bold focus:outline-none transition ease-in-out duration-150"
          >
            Virksomhedstilmelding
          </nuxt-link>
          <!--
          <nuxt-link to="hent-dit-skodkit" class="whitespace-no-wrap menu-items hover:text-hh-orange py-6 font-sans text-base leading-6 font-bold focus:outline-none transition ease-in-out duration-150">
            Hent dit skodkit
          </nuxt-link> -->
          <span class="inline-flex">
            <nuxt-link :to="{ path: '/',hash:'#signup'}" class="whitespace-no-wrap font-sans inline-flex items-center justify-center px-12 py-6 text-lg leading-6 font-medium text-white bg-hh-orange hover:bg-white hover:text-hh-orange focus:outline-none transition ease-in-out duration-150">
              Tilmeld dig
            </nuxt-link>
          </span>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-class="opacity-0 translate-y-1"
      enter-to-end="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-75"
      leave-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-1"
    >
      <div v-show="mobileMenu" class="block lg:hidden absolute z-40 top-0 inset-x-0 p-2 transition transform origin-top-right">
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div class="pt-5 pb-6 px-5 space-y-6">
              <div class="flex items-center justify-between">
                <div>
                  <nuxt-link to="/">
                    <img class="h-8 w-auto" src="@/assets/images/logo-sort.svg" alt="mobile logo">
                  </nuxt-link>
                </div>
                <div class="-mr-2">
                  <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="mobileMenu = !mobileMenu">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav class="grid row-gap-8">
                  <nuxt-link to="/virksomheder" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-hh-orange"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Virksomhedstilmelding
                    </div>
                  </nuxt-link>
                  <!--
                  <nuxt-link to="/hent-dit-skodkit" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                    <svg
                      class="flex-shrink-0 h-6 w-6 text-hh-orange"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    ><path d="M8 16a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 16m-7 3l3 3m0 0l3-3m-3 3V10" /></svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Hent dit skodkit
                    </div>
                  </nuxt-link> -->
                </nav>
              </div>
            </div>
            <div class="py-6 px-5 space-y-6">
              <div class="space-y-6">
                <span class="w-full flex rounded-md shadow-sm">
                  <nuxt-link :to="{ path: '/', hash:'#signup'}" class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-hh-orange focus:outline-none focus:border-hh-orange focus:shadow-outline-hh-orange active:bg-hh-primary transition ease-in-out duration-150">
                    Tilmeld dig
                  </nuxt-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>

export default {
  data () {
    return {
      logoBlack: false,
      mobileMenu: false
    }
  },
  mounted () {
    if (this.$route.fullPath === '/privatlivspolitik' || this.$route.fullPath === '/cookiepolitik') {
      this.logoBlack = true
    }
  },
  head () {
    return {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
}
</script>
