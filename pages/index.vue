<template>
  <main>
    <HeroVideo />
    <div class="lg:h-screen">
      <Header class="hvid" />
      <Hero />
    </div>
    <!-- Fact start -->
    <div class="relative">
      <div v-if="virksomheder" class="-mt-20 black-curve bg-no-repeat bg-cover h-20" />
      <div :class="[{'bg-hh-black': virksomheder}, {'pattern bg-no-repeat bg-cover bg-hh-orange': !virksomheder}]" class="flex items-center justify-center py-32">
        <div class="">
          <div class="relative">
            <div class="tracking-wide text-center font-sans text-4xl md:text-5xl leading-12 font-bold tracking-tight text-white sm:text-6xl sm:leading-14">
              Sammen om et
              <br>
              skodfrit Danmark
            </div>
          </div>

          <div class="mt-24">
            <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
              <div class="lg:grid lg:grid-cols-3 lg:gap-12">
                <div v-for="fact in facts" :key="fact.slug" class="mt-10 lg:mt-0 first:mt-0">
                  <div class="flex items-center mx-auto justify-center h-56 w-56 rounded-md text-white">
                    <img :src="fact.image" alt="" class="h-full">
                  </div>
                  <div class="mt-5">
                    <h5 class="text-white text-center font-sansserif text-xl leading-7 font-medium">
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

            <div class="mt-10 relative lg:mt-0">
              <div class="rounded-lg overflow-hidden xl:shadow-lg">
                <iframe
                  src="https://player.vimeo.com/video/451448854?dnt=true"
                  height="315"
                  frameborder="0"
                  allow="autoplay;"
                  class="w-full max-w-full"
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
    <!-- Get started start -->
    <div class="bg-hh-black pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mt-6 pt-10">
          <dl class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <div>
                <h3 class="text-4xl leading-12 md:text-6xl md:leading-14 font-semibold text-white tracking-wide">
                  Sådan kommer <br>
                  <span class="text-hh-orange font-black">du</span> i gang:
                </h3>
              </div>
            </div>
            <div class="mt-12 md:mt-0">
              <div v-for="step in steps" :key="step.slug" class="mt-12 first:mt-0">
                <dt class="text-2xl leading-6 font-semibold text-white tracking-wide">
                  {{ step.titel }}
                </dt>
                <dd class="mt-2">
                  <p class="text-base leading-6 font-serif text-white tracking-wide">
                    <nuxt-content :document="step" />
                  </p>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
      <div class="orange-curve bg-no-repeat bg-cover pb-56" />
    </div>
    <!-- Get started slut -->
    <!-- Who are we start -->
    <div class="bg-hh-black overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28">
      <h3 class="text-center text-4xl leading-12 md:text-6xl md:leading-14 font-semibold text-white tracking-wide">
        Hvem er vi
      </h3>
      <div class="relative max-w-screen-md mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        <ul class="grid grid-cols-1 gap-10">
          <li v-for="member of team" :key="member.slug" class="col-span-1 bg-hh-gray rounded-lg shadow-lg">
            <div class="w-full flex flex-wrap items-center justify-between p-6 space-x-6">
              <div class="flex-1 truncate text-center md:text-left">
                <div class="flex items-center space-x-3">
                  <h3 class="text-white mx-auto md:ml-0 text-3xl leading-9 font-bold font-sans">
                    {{ member.navn }}
                  </h3>
                </div>
                <p class="mt-1 text-hh-orange text-xl leading-5 font-semibold font-sans">
                  {{ member.titel }}
                </p>
              </div>
              <div class="w-full order-first md:order-last md:w-1/4 mb-4 md:mb-0">
                <img class="w-32 h-32 bg-gray-300 rounded-full flex-shrink-0 mx-auto m" :src="member.image" alt="">
              </div>
            </div>
            <div class="border-t border-hh-white">
              <div class="-mt-px flex p-6">
                <p class="text-gray-300 text-sm leading-5">
                  <nuxt-content :document="member" />
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Who are we slut -->
    <Footer />
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const facts = await $content('facts').sortBy('position').fetch()
    const bodil = await $content('meet-bodil').fetch()
    const steps = await $content('kom-i-gang').where({ active: true }).sortBy('position').fetch()
    const team = await $content('team').sortBy('position').fetch()

    return {
      facts, bodil, steps, team
    }
  },
  data () {
    return {
      virksomheder: false
    }
  },
  mounted () {
    if (this.$route.fullPath === '/virksomheder' || this.$route.fullPath === '/virksomheder#signupcompany') {
      this.virksomheder = true
    }
  },
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://skodbevægelsen.dk'
        }
      ],
      title: 'Danmarks største skodkampagne - Gør en stor forskel',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Tag familien under armen og deltag, i Danmarks største skodkampagne fra d. 27 august. Selv en lille indsats gør en stor forskel. '
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Deltag i Danmarks største skodkampagne'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Selv en lille indsats gør en stor forskel.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://xn--skodbevgelsen-9fb.dk/meta.jpg'
        },
        { hid: 'og:url', property: 'og:url', content: 'https://xn--skodbevgelsen-9fb.dk/' }
      ]
    }
  }
}
</script>
