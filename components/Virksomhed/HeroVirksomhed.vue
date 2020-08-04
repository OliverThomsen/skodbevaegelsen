<template>
  <main class="pt-14 pb-28 md:pt-10 lg:py-0 relative flex justify-center items-center mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 lg:mt-64 xl:mt-80">
    <div class="">
      <div class="text-center md:mx-auto lg:text-left">
        <span class="tracking-wide text-white text-2xl font-bold bg-hh-orange p-2">
          Virksomhedstilmelding
        </span>
        <h2 class="mt-6 leading-none text-4xl lg:text-6xl font-sans tracking-tight text-white">
          Tilmeld din virksomhed
          <br class="hidden md:inline">
          og støt op om <span class="text-white font-bold">Danmarks største skodkampagne</span>
        </h2>
        <div class="pt-16">
          <nuxt-link :to="{ path: '/virksomheder',hash:'#signupcompany'}" class="group tracking-wider font-serif rounded-full leading-3 uppercase bg-white px-6 py-4 lg:px-12 lg:py-6 text-hh-orange font-bold lg:text-xl">
            Tilmeld din virksomhed
            <svg
              class="h-4 w-4 inline -mt-1 transform group-hover:translate-x-1 transition ease-in-out duration-300"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M9 5l7 7-7 7" /></svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>
