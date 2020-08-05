<template>
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
                  <h5 :class="[{'text-white': virksomheder}, {'text-white': !virksomheder}]" class="text-center font-sans text-1xl leading-9 font-base">
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
</template>
<script>
export default {
  async fetch () {
    this.facts = await this.$content('facts').sortBy('position').fetch()
  },
  data () {
    return {
      facts: [],
      virksomheder: false
    }
  },
  mounted () {
    if (this.$route.fullPath === '/virksomheder') {
      this.virksomheder = true
    }
  }
}
</script>
