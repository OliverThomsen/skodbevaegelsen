<template>
  <div class="bg-hh-black overflow-hidden flex items-center justify-center sun-tornado bg-no-repeat bg-cover bg-left-top py-32">
    <div class="">
      <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div class="relative lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div class="relative">
            <h4 class="text-xl leading-8 font-bold font-serif text-white">
              {{ tekst.subtitle }}
            </h4>
            <div class="py-6 text-4xl leading-12 font-semibold font-sans text-white tracking-tight sm:text-6xl sm:leading-14">
              {{ tekst.title }}
            </div>
            <p class="mt-3 text-lg leading-7 font-sans text-white">
              <nuxt-content :document="tekst" />
            </p>
          </div>

          <div class="mt-10 -mx-4 relative lg:mt-0">
            <div class="rounded-lg overflow-hidden shadow-lg ml-8">
              <iframe
                src="https://player.vimeo.com/video/440985646?dnt=true"
                height="315"
                frameborder="0"
                allow="autoplay;"
                class="w-full"
                fullscreen
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async fetch () {
    this.tekst = await this.$content('meet-bodil').fetch()
  },
  data () {
    return {
      tekst: []
    }
  }
}
</script>
