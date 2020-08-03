<template>
  <main>
    <HeroVideo class="absolute top-0" />
    <div class="h-screen">
      <Header />
      <Hero />
    </div>
    <!-- Fact start -->
    <div class="relative">
      <div v-if="virksomheder" class="-mt-20 black-curve bg-no-repeat bg-cover h-20" />
      <div :class="[{'bg-hh-black': virksomheder}, {'pattern bg-no-repeat bg-cover bg-hh-orange': !virksomheder}]" class="flex items-center justify-center py-32">
        <div class="">
          <div class="relative">
            <div class="tracking-wide text-center font-sans text-5xl leading-12 font-bold tracking-tight text-white sm:text-6xl sm:leading-14">
              Sammen om et
              <br>
              skodfrit Danmark
            </div>
          </div>

          <div class="mt-24">
            <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
              <div class="lg:grid lg:grid-cols-3 lg:gap-12">
                <div v-for="fact in facts" :key="fact.slug" class="mt-10 lg:mt-0 first:mt-0">
                  <div class="flex items-center mx-auto justify-center h-56 w-56  rounded-md bg-hh-primary text-white">
                    <img :src="fact.image" alt="">
                  </div>
                  <div class="mt-5">
                    <h5 :class="[{'text-white': virksomheder}, {'text-hh-black': !virksomheder}]" class="text-center font-serif text-2xl leading-9 font-medium">
                      <nuxt-content :document="fact" />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Facts slut -->
    <!-- Bodil start -->
    <div class="bg-hh-black overflow-hidden flex items-center justify-center sun-tornado bg-no-repeat bg-cover bg-left-top py-32">
      <div class="">
        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div class="relative lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div class="relative">
              <h4 class="text-xl leading-8 font-bold font-serif text-white">
                {{ bodil.subtitle }}
              </h4>
              <div class="py-6 text-4xl leading-12 font-semibold font-sans text-white tracking-tight sm:text-6xl sm:leading-14">
                {{ bodil.title }}
              </div>
              <p class="mt-3 text-lg leading-7 font-sans text-white">
                <nuxt-content :document="bodil" />
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
    <!-- Bodil slut -->
    <Companies />
    <GetStarted />
    <Whoarewe />
    <Footer />
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const facts = await $content('facts').sortBy('position').fetch()
    const bodil = await $content('meet-bodil').fetch()

    return {
      facts, bodil
    }
  },
  data () {
    return {
      title: 'Happy Helper + Coop'
    }
  },
  mounted () {
    if (this.$route.fullPath === '/virksomheder') {
      this.virksomheder = true
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>
