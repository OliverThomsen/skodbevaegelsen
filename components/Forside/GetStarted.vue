<template>
  <div class="bg-hh-black pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mt-6 pt-10">
        <dl class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <div>
              <h3 class="text-6xl leading-14 font-semibold text-white tracking-wide">
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
</template>
<script>
export default {
  async fetch () {
    this.steps = await this.$content('kom-i-gang').where({ active: true }).sortBy('position').fetch()
  },
  data () {
    return {
      steps: []
    }
  }
}
</script>
