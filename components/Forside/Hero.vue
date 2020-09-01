<template>
  <main class="pt-14 pb-28 md:pt-10 lg:py-0 relative flex justify-center items-center mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 lg:mt-64 xl:mt-80">
    <div class="">
      <div class="text-center md:mx-auto lg:text-left">
        <div class="text-lg tracking-wide font-serif text-white lg:text-2xl xl:text-3xl">
          Danmarks største skodkampagne
        </div>
        <h2 class="mt-1 text-4xl font-sans tracking-tight leading-10 text-white sm:leading-none sm:text-6xl lg:text-9xl xl:text-11xl">
          Selv en lille indsats
          <br class="hidden md:inline">
          <span class="text-white font-bold">gør en stor forskel</span>
        </h2>
        <div class="pt-16">
          <nuxt-link :to="{ path: '/',hash:'#signup'}" class="group tracking-wider font-serif rounded-full leading-3 uppercase bg-white px-6 py-4 lg:px-12 lg:py-6 text-hh-orange font-bold lg:text-xl">
            Tilmeld
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
         <!-- <a href="https://skodbevægelsen.dk/program.pdf" class="group tracking-wider sm:invisible md:invisible lg:visible xl:visible font-serif rounded-full leading-3 uppercase border-white border-solid bg-hh-orange px-6 py-4 lg:px-12 lg:py-6 text-white font-bold lg:text-xl">
            Hent program
            <svg
            class="h-6 w-6 inline -mt-1 transform group-hover:translate-y-1 transition ease-in-out duration-300"
            fill="white"
            stroke-linecap=""
            stroke-linejoin=""
            stroke-width="1.3"
            viewBox="0 0 20 20"
            stroke="hh-orange"
          ><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg>
        </a>-->
        </div>
      </div>
    </div>
  </main>
</template>
