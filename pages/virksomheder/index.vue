<template>
  <main>
    <div class="h-screen skod-bg bg-no-repeat bg-cover">
      <Header class="hvid" />
      <HeroVirksomhed />
    </div>
    <CompaniesVirksomhed />
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
    <!-- Who are we start -->
    <div class="bg-hh-black overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28">
      <h3 class="text-center text-6xl leading-14 font-semibold text-white tracking-wide">
        Hvem er vi
      </h3>
      <div class="relative max-w-screen-md mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        <ul class="grid grid-cols-1 gap-10">
          <li v-for="member of team" :key="member.slug" class="col-span-1 bg-hh-gray rounded-lg shadow-lg">
            <div class="w-full flex items-center justify-between p-6 space-x-6">
              <div class="flex-1 truncate">
                <div class="flex items-center space-x-3">
                  <h3 class="text-white text-3xl leading-9 font-bold font-sans">
                    {{ member.navn }}
                  </h3>
                </div>
                <p class="mt-1 text-hh-orange text-xl leading-5 font-semibold font-sans">
                  {{ member.titel }}
                </p>
              </div>
              <img class="w-32 h-32 bg-gray-300 rounded-full flex-shrink-0" :src="member.image" alt="">
            </div>
            <div class="border-t border-hh-white">
              <div class="-mt-px flex p-6">
                <p class="text-gray-300 text-lg leading-5">
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
    const team = await $content('team').fetch()

    return {
      facts, team
    }
  },
  data () {
    return {
      virksomheder: false
    }
  },
  mounted () {
    if (this.$route.fullPath === '/virksomheder') {
      this.virksomheder = true
    }
  },
  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://skodbevægelsen.dk/virksomheder'
        }
      ],
      title: 'Danmarks største skodkampagne - Gør en stor forskel',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Tilmeld din virksomhed/forening og deltag, i Danmarks største skodkampagne fra d. 27 august. Selv en lille indsats gør en stor forskel.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Deltag som virksomhed i Danmarks største skodkampagne'
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
            'https://happyhelper.dk/cmsuploads//2020/08/Skod_virk-4.jpg'
        },
        { hid: 'og:url', property: 'og:url', content: 'https://skodbevægelsen.dk/virksomheder' }
      ]
    }
  }
}
</script>
