<template>
  <!-- This example requires Tailwind CSS v1.4.0+ -->
  <div class="relative">
    <div class="mx-auto">
      <div class="flex justify-between items-center pr-4 md:pr-0 pt-6 md:pt-0 pb-6 md:justify-start md:space-x-10">
        <div class="lg:w-0 lg:flex-1">
          <nuxt-link to="/" class="flex pl-6">
            <img v-show="!logoBlack" class="h-8 w-auto sm:h-10 lg:h-12 pt-3" src="@/assets/images/Logo.svg" alt="Logo">
            <img v-show="logoBlack" class="h-8 w-auto sm:h-10 lg:h-12 pt-3" src="@/assets/images/logo-sort.svg" alt="Logo">
          </nuxt-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" @click="mobileMenu = !mobileMenu">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
          <nuxt-link
            to="/virksomheder"
            class="menu-items hover:text-hh-orange px-12 py-6 font-sans text-base leading-6 font-bold focus:outline-none transition ease-in-out duration-150"
          >
            Virksomhedstilmelding
          </nuxt-link>
          <!--
          <nuxt-link to="hent-dit-skodkit" class="menu-items hover:text-hh-orange px-12 py-6 font-sans text-base leading-6 font-bold focus:outline-none transition ease-in-out duration-150">
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
      <div v-show="mobileMenu" class="block md:hidden absolute z-40 top-0 inset-x-0 p-2 transition transform origin-top-right">
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
                    <svg class="flex-shrink-0 h-6 w-6 text-hh-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <div class="text-base leading-6 font-medium text-gray-900">
                      Virksomhedstilmelding
                    </div>
                  </nuxt-link>
                  <!--
                  <nuxt-link to="/hent-dit-skodkit" class="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150">
                    <svg class="flex-shrink-0 h-6 w-6 text-hh-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
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
