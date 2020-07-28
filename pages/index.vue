<template>
  <main>
    <HeroVideo class="absolute top-0" />
    <div class="h-screen">
      <Header />
      <Hero />
    </div>
    <Facts class="h-xxl" />
    <Bodil class="h-xxl" />
    <Companies />
    <GetStarted />
    <Whoarewe />
    <Footer />
  </main>
</template>

<script>
export default {
  data () {
    return {
      title: 'Happy Helper + Coop'
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
