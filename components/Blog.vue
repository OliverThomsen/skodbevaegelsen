<template>
  <main>
    <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Kom og hjælp
          </h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            Målet er indsamle så mange cigaretskodder som muligt, og både privatpersoner og virksomheder kan deltage.
          </p>
          <p class="mt-3 max-w-2xl mx-auto text-xl font-bold leading-7 text-gray-500 sm:mt-4">
            Plexiglassene er opstillet fra d. 21 august til d. 19 september.
          </p>
        </div>
        <div class="md:flex content-center justify-center flex-wrap p-4">
          <div v-for="(place, index) of placements" :key="index" class="md:flex md:w-1/2 lg:w-1/3 px-4 py-4">
            <div class="md:flex-1 rounded-lg overflow-hidden shadow-lg bg-white">
              <div class="flex-shrink-0">
                <img class="h-48 w-full object-cover" :src="place.img" alt="">
              </div>
              <div class="flex-1 p-4 flex flex-col justify-between">
                <div class="flex-1">
                  <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    {{ place.title }}
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    <nuxt-content :document="place" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  async fetch () {
    this.placements = await this.$content('/placements').fetch()
  },
  data () {
    return {
      placements: []
    }
  }
}
</script>
