<template>
  <div class="bg-hh-orange flex items-center justify-center pattern bg-no-repeat bg-cover py-32">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <div class="pb-12 pt-6 text-center text-lg font-bold font-sans text-white tracking-tight sm:text-6xl leading-14">
        Danmarks største skodkampagne
      </div>
      <div class="bg-white grid grid-cols-3 overflow-hidden shadow rounded-lg">
        <div></div>
        <div>
          <div class="text-center">
            <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Har du lyst til at deltage i
              <br>
              Danmarks største skodkampagne?
            </h2>
            <p class="mt-4 text-lg leading-6 text-gray-500">
              Tilmeld dig herunder og vær' med til indsamling af cigaretskodder fra den 14-19 september.
            </p>
            <button type="button" class="my-4 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-hh-primary focus:outline-none focus:border-hh-primary focus:shadow-outline-hh-primary active:bg-hh-primary transition ease-in-out duration-150">
              Virksomheder
            </button>
          </div>
          <div class="mt-12 max-w-xl mx-auto">
            <form
              action="/tak-for-din-tilmelding"
              name="sign-up"
              method="POST"
              class="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
              netlify
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="sign-up">
              <div class="sm:col-span-2">
                <label for="full_name" class="block text-sm font-medium leading-5 text-gray-700">Navn</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="full_name" name="full_name" type="text" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="zip_code" class="block text-sm font-medium leading-5 text-gray-700">Postnummer</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="zip_code" name="zip_code" type="text" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium leading-5 text-gray-700">Email</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input id="email" name="email" type="email" class="form-input py-3 px-4 block w-full transition ease-in-out duration-150">
                </div>
              </div>
              <div class="sm:col-span-2">
                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <!--
                Simple toggle

                On: "bg-indigo-600", Off: "bg-gray-200"
              -->
                    <span role="checkbox" tabindex="0" aria-checked="false" class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline">
                      <!-- On: "translate-x-5", Off: "translate-x-0" -->
                      <span aria-hidden="true" class="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200" />
                    </span>
                  </div>
                  <div class="ml-3">
                    <p class="text-base leading-6 text-gray-500">
                      By selecting this, you agree to the
                      <a href="#" class="font-medium text-gray-700 underline">Privacy Policy</a>
                      and
                      <a href="#" class="font-medium text-gray-700 underline">Cookie Policy</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div class="sm:col-span-2">
                <span class="w-full inline-flex rounded-md shadow-sm">
                  <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-hh-primary focus:outline-none focus:border-hh-primary focus:shadow-outline-hh-primary active:bg-hh-primary transition ease-in-out duration-150">
                    Tilmeld
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p class="text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider">
          Virksomheder
        </p>
        <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="@/assets/images/Coop.png" alt="Workcation">
          </div>
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="@/assets/images/Coop.png" alt="Mirage">
          </div>
          <div class="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img class="max-h-12" src="@/assets/images/Coop.png" alt="Tuple">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
