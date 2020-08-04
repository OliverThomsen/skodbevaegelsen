<template>
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:mt-12 md:mt-20 lg:mt-64 xl:mt-80">
    <div class="relative flex flex-wrap py-12">
      <div class="w-full md:w-2/3 text-center md:text-left">
        <div class="text-lg tracking-wide font-serif text-white lg:text-2xl xl:text-3xl">
          Danmarks største skodkampagne
        </div>
        <h2 class="md:mt-6 leading-none text-4xl lg:text-6xl font-sans tracking-tight text-white">
          Kom igang i dag
        </h2>
        <div class="pt-16">
          <nuxt-link :to="{ path: '/virksomheder',hash:'#signupcompany'}" class="group tracking-wider font-serif rounded-full leading-3 uppercase bg-white px-6 py-4 lg:px-12 lg:py-6 text-hh-orange font-bold lg:text-xl">
            Download al materiale
            <svg
              class="ml-2 h-6 w-6 inline -mt-1 transform group-hover:translate-y-1 transition ease-in-out duration-300"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            ><path d="M8 16a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 16m-7 3l3 3m0 0l3-3m-3 3V10" /></svg>
          </nuxt-link>
        </div>
      </div>
      <div class="hidden md:block w-full md:w-1/3 mt-12 md:-mt-24">
        <div class="space-y-12">
          <div class="text-center">
            <img class="mx-auto rounded-lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60">
            <div class="mt-6">
              <nuxt-link :to="{ path: '/virksomheder',hash:'#signupcompany'}" class="group tracking-wider font-serif rounded-full leading-3 uppercase bg-hh-orange px-2 py-4 lg:px-8 lg:py-4 text-white font-bold">
                Askebæger
                <svg
                  class="ml-2 h-6 w-6 inline -mt-1 transform group-hover:translate-y-1 transition ease-in-out duration-300"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ><path d="M8 16a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 16m-7 3l3 3m0 0l3-3m-3 3V10" /></svg>
              </nuxt-link>
            </div>
          </div>
          <div class="text-center">
            <img class="mx-auto rounded-lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60">
            <div class="mt-6">
              <nuxt-link :to="{ path: '/virksomheder',hash:'#signupcompany'}" class="group tracking-wider font-serif rounded-full leading-3 uppercase bg-hh-orange px-2 py-4 lg:px-8 lg:py-4 text-white font-bold">
                Flyer
                <svg
                  class="ml-2 h-6 w-6 inline -mt-1 transform group-hover:translate-y-1 transition ease-in-out duration-300"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                ><path d="M8 16a5 5 0 01-.916-9.916 5.002 5.002 0 019.832 0A5.002 5.002 0 0116 16m-7 3l3 3m0 0l3-3m-3 3V10" /></svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <svg class="absolute top-36 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern
            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-400"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
      </svg>
      <svg class="absolute top-1/4 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
        <defs>
          <pattern
            id="f210dbf6-a58d-4871-961e-36d5016a0f49"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-400"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
      </svg>
    </div>
  </main>
</template>
