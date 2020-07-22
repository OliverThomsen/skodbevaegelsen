<template>
  <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <svg class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>

      <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative">
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

        <div class="mt-10 -mx-4 relative lg:mt-0">
          <svg class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden" width="784" height="404" fill="none" viewBox="0 0 784 404">
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="784" height="404" fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
          </svg>
          <div id="download" class="ml-8">
            <h2 class="text-2xl leading-9 font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-10">
              Har du nogle gode ideer til flere ting?
            </h2>
            <p class="mt-4 text-lg leading-6 text-gray-500">
              Danmarks største skodkampagne
            </p>
            <h2 class="mt-12 text-xl leading-7 font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-8">
              Download af materiale
            </h2>
            <span class="mt-4 inline-flex rounded-md shadow-sm">
              <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-hh-primary hover:bg-hh-primary focus:outline-none focus:border-hh-primary focus:shadow-outline-hh-primary active:bg-hh-primary transition ease-in-out duration-150">
                Download
              </button>
            </span>
          </div>
        </div>
      </div>

      <svg class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12" width="404" height="784" fill="none" viewBox="0 0 404 784">
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg>
    </div>
  </div>
</template>
