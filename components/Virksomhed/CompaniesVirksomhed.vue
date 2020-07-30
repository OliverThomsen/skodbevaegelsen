<template>
  <div>
    <div id="signupcompany" class="bg-hh-orange flex items-center justify-center pattern2 bg-no-repeat bg-cover py-32">
      <div class="w-full relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div class="pb-12 pt-6 text-center text-4xl leading-12 font-semibold font-sans text-white tracking-tight sm:text-6xl sm:leading-14">
        <!-- Danmarks største skodkampagne -->
        </div>
        <div class="bg-white flex overflow-hidden shadow-2xl rounded-lg py-12">
          <div class="hidden md:block md:w-1/4" />
          <div class="w-full sm:w-full px-4 md:px-0">
            <div class="text-center">
              <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Stå i spidsen for en skodfri fremtid
              </h2>
              <p class="mt-4 text-lg leading-6 text-gray-500">
                Tilmeld din virksomhed herunder og vær' med til indsamling
                <br>
                af cigaretskodder fra den 14-19 september.
              </p>
            </div>
            <div class="mt-12 max-w-xl mx-auto">
              <form
                action="/tak-for-din-tilmelding"
                name="sign-up-company"
                method="POST"
                class="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
                netlify
                netlify-honeypot="bot-field"
                novalidate="true"
                @submit="checkForm"
              >
                <input type="hidden" name="form-name" value="sign-up-company">
                <div class="sm:col-span-2">
                  <label for="full_name" class="block text-sm font-medium leading-5 text-gray-700">Kontaktperson</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="full_name"
                      v-model="name"
                      name="full_name"
                      type="text"
                      class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                      placeholder="Bodil Fosgaard"
                      :class="{'border border-red-500': nameError}"
                      @blur="checkName"
                    >
                  </div>
                  <p v-if="nameError" class="text-red-500 text-xs">
                    Navn er påkrævet.
                  </p>
                </div>
                <div class="sm:col-span-2">
                  <label for="company_name" class="block text-sm font-medium leading-5 text-gray-700">Virksomhed- eller foreningsnavn</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="company_name"
                      v-model="companyName"
                      name="company_name"
                      type="text"
                      class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                      :class="{'border border-red-500': companyNameError}"
                      placeholder="1610"
                      @blur="checkCompanyName"
                    >
                  </div>
                  <p v-if="companyNameError" class="text-red-500 text-xs">
                    Virksomhedsnavn er påkrævet.
                  </p>
                </div>
                <div class="sm:col-span-2">
                  <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
                  <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="email"
                      v-model="email"
                      name="email"
                      type="email"
                      class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                      :class="{'border border-red-500': emailError}"
                      placeholder="Bodil@hey.com"
                      @blur="checkEmail"
                    >
                  </div>
                  <p v-if="emailError" class="text-red-500 text-xs">
                    E-mail er påkrævet.
                  </p>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <!--
                Simple toggle

                On: "bg-indigo-600", Off: "bg-gray-200"
              -->
                      <span
                        :class="{ 'bg-green-400': privacyPolicy }"
                        role="checkbox"
                        tabindex="0"
                        aria-checked="false"
                        class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
                        @click="privacyPolicy = !privacyPolicy"
                      >
                        <!-- On: "translate-x-5", Off: "translate-x-0" -->
                        <span aria-hidden="true" :class="{ 'translate-x-5': privacyPolicy }" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200" />
                      </span>
                    </div>
                    <div class="ml-3">
                      <p class="text-base leading-6 text-gray-500">
                        Jeg accepterer hermed vores
                        <nuxt-link to="/privatlivspolitik" class="font-medium text-gray-700 underline">
                          privatlivspolitik
                        </nuxt-link>
                        og
                        <nuxt-link to="/cookiepolitik" class="font-medium text-gray-700 underline">
                          cookiepolitik
                        </nuxt-link>.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <div class="flex items-start">
                    <div class="flex-shrink-0">
                      <!--
                Simple toggle

                On: "bg-indigo-600", Off: "bg-gray-200"
              -->
                      <span
                        :class="{ 'bg-green-400': samtykke }"
                        role="checkbox"
                        tabindex="0"
                        aria-checked="false"
                        class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
                        @click="samtykke = !samtykke"
                      >
                        <!-- On: "translate-x-5", Off: "translate-x-0" -->
                        <span aria-hidden="true" :class="{ 'translate-x-5': samtykke }" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200" />
                      </span>
                    </div>
                    <div class="ml-3">
                      <p class="text-base leading-6 text-gray-500">
                        Jeg giver hermed samtykke til, at Happy Helper sender mig e-mails med nyheder, tilbud samt relevant information. Det er nemt at afmelde sig Happy Helpers’s nyhedsbrev. I hver e-mail findes en »Afmeld«-knap
                      </p>
                    </div>
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <span class="w-full inline-flex rounded-md">
                    <button value="submit" type="submit" :class="[{'cursor-pointer bg-green-400 active:bg-green-500 text-white border-transparent': samtykke && privacyPolicy }, {'cursor-default text-gray-500 border-gray-200': !samtykke || !privacyPolicy }]" class=" w-full inline-flex items-center justify-center px-6 py-3 text-base leading-6 font-medium rounded-md border-2 focus:outline-none transition ease-in-out duration-150">
                      Tilmeld
                    </button>
                  </span>
                <!-- Når den er aktiv -->
                </div>
              </form>
            </div>
          </div>
          <div class="hidden md:block md:w-1/4" />
        </div>

        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p class="text-center text-white text-base leading-6 font-semibold uppercase tracking-widest">
            arrangeret af
          </p>
          <div class="mt-6 grid grid-cols-1 gap-0.5 lg:grid-cols-3 lg:mt-8">
            <div class="col-span-1 flex justify-center py-8 px-8">
              <a href="https://www.instagram.com/made_by_my_butts/" target="_blank">
                <img class="h-16" src="@/assets/images/Logo.svg" alt="Skodbevægelsen logo">
              </a>
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8">
              <a href="https://garage.coop/" target="_blank">
                <img class="h-14 mt-2" src="@/assets/images/coop-logo.svg" alt="coop logo">
              </a>
            </div>
            <div class="col-span-1 flex justify-center py-8 px-8">
              <a href="https://happyhelper.dk/?utm_source=skod&utm_medium=site" target="_blank">
                <img class="h-16" src="@/assets/images/happy-helper-logo.svg" alt="Happy Helper logo">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      nameError: false,
      companyName: null,
      companyNameError: false,
      email: null,
      emailError: false,
      privacyPolicy: false,
      samtykke: false
    }
  },
  methods: {
    checkName (e) {
      if (!this.name) {
        this.nameError = true
        this.name = null
      }
      if (this.name) {
        this.nameError = false
      }
      e.preventDefault()
    },
    checkCompanyName (e) {
      if (!this.companyName) {
        this.companyNameError = true
        this.companyName = null
      }
      if (this.companyName) {
        this.companyNameError = false
      }
      e.preventDefault()
    },
    checkEmail (e) {
      if (!this.validEmail(this.email)) {
        this.emailError = true
        this.email = null
      }
      if (this.email) {
        this.emailError = false
      }
      e.preventDefault()
    },
    checkForm (e) {
      if (!this.name) {
        this.nameError = true
        this.name = null
      }
      if (!this.companyName) {
        this.companyNameError = true
        this.companyName = null
      }
      if (!this.validEmail(this.email)) {
        this.emailError = true
        this.email = null
      }
      if (this.email) {
        this.emailError = false
      }
      if (this.name) {
        this.nameError = false
      }
      if (this.companyName) {
        this.companyNameError = false
      }
      if (this.name && this.companyName && this.validEmail(this.email) && this.samtykke && this.privacyPolicy) {
        return true
      }
      e.preventDefault()
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
