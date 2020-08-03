<template>
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
</template>
<script>
export default {
  async fetch () {
    this.team = await this.$content('team').fetch()
  },
  data () {
    return {
      team: []
    }
  }
}
</script>
